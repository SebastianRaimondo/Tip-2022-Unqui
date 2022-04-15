const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');


// @route  POST api/users
// @desc   Register user
router.post('/', [
    body('name', 'El nombre es requerido')
    .not()
    .isEmpty(),
    
    body('email', 'Por favor incluya un email válido').isEmail(),
    body('password', 'Por favor ingrese una contraseña con mas de seis caracteres'
    ).isLength({min:6}),

],async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const {name, email, password} = req.body;
    
    try{
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({errors: [{msg: 'Este usuario ya existe'}]});
        }

         const avatar = gravatar.url(email, {
         s: '200',
         r:'pg',
         d:'mm'}); 

         user = new User({
          name,
          email,
          avatar,
          password

         });

         const salt = await bcrypt.genSalt(10);

         user.password = await bcrypt.hash(password, salt);

         await user.save();

         const payload = {
             user: {
                 id: user._id
             }
         }

         //console.log(payload)


         jwt.sign(payload, 
            config.get('jwtSecret'),
            {expiresIn: 360000},
            (err, token) => {
             if(err) throw err;
             res.json({token});
            });

   // res.send('User registered');
    }catch(err){
      console.error(err.messege);
      res.status(500).send('Server error')
    } 

    
});

module.exports = router;