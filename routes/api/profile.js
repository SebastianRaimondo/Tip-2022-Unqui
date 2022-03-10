const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { body, validationResult } = require('express-validator');
const config = require('config');
const request = require('request');




router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create or update user profile

router.post(
  '/',
  [
    auth,
    [
      body('status', 'Status is riquired').not().isEmpty(),

      body('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
    } = req.body;

    //Bulid profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(",").map((sk) => sk.trim());
    }

    //console.log(profileFields.social.twitter);
    //res.send('Anido cajeta');

    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profile },
          { new: true }
        );

        return res.json(profile);
      }

      //Create
      profile = new Profile(profileFields);
      // console.log(profileFields.social.twitter);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//Get all profiles

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//Get profile by id

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return send.status(400).json({ msg: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server error');
  }
});

//Delete profile, user and posts

router.delete('/', auth, async (req, res) => {
  try {
    //Remove profile
    await Profile.findOneAndRemove({
      user: req.user.id,
    });

    //Remove user
    await User.findOneAndRemove({
      _id: req.user.id,
    });

    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//Add experience to profile
router.put(
  '/experience',
  [
    auth,

    body('title', 'Title is required').not().isEmpty(),

    body('company', 'company is required').not().isEmpty(),

    body('from', 'From date is riquired').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, company, location, from, to, current, description } =
      req.body;

    const newExperience = {
      title,
      company,
      location,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExperience);
      await profile.save();
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Delete experience from profile

router.delete('/experience/:exp_id', auth, async(req, res) =>{

  try{
    const profile = await Profile.findOne({ user: req.user.id })

    //Get index to remove
    const indexToRemove = profile.experience.map(item => item.id).indexOf(req.params.exp_id)
    //console.log(indexToRemove)
    profile.experience.splice(indexToRemove,1)
    await profile.save();
    res.json(profile);

 }catch(err){
  console.error(err.message);
  res.status(500).send("Server error");
  }


});



//Add education to profile
router.put(
  '/education',
  [
    auth,

    body('school', 'School is required').not().isEmpty(),

    body('degree', 'Degree is required').not().isEmpty(),

    body('fieldofstudy', 'Field of study is riquired').not().isEmpty(),

    body('from', 'From date riquired').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { school, degree, from, to, fieldofstudy, current, description } =
      req.body;

    const newEducation = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.education.unshift(newEducation);
      await profile.save();
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//Delete education from profile

router.delete('/education/:edu_id', auth, async(req, res) =>{

  try{
    const profile = await Profile.findOne({ user: req.user.id })

    //Get index to remove
    const indexToRemove = profile.education.map(item => item.id).indexOf(req.params.edu_id)
    //console.log(indexToRemove)
    profile.education.splice(indexToRemove,1)
    await profile.save();
    res.json(profile);

 }catch(err){
  console.error(err.message);
  res.status(500).send("Server error");
  }


})

//Get user repos from github
router.get("/github/:username", async (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${
        req.params.username
      }/repos?per_page=5&sort=created:asc&client_id=${config.get(
        "githubClientId"
      )}&client_secret=${config.get("githubSecret")}`,
      method: "GET",
      headers: { "user-agent": "node.js" },
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);
      if (response.statusCode != 200) {
        res.status(400).json({ msg: "No Github profile found" });
      }

      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});




module.exports = router;
