const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
  
    //Get token from header
    const token = req.header('x-auth-token');

    console.log("el token desde el middleware auth" + " " + token)
    //Check if not token
    if(!token){

        return res.status(401).json({msg: 'No me llego el token amigo eee , autorizacion denegada negroo'});
    }

    //Verify token 
    try{
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      req.user = decoded.user;
      console.log("desde el decodificador middleware" + " " + req.user)
      next();
    }catch(err){
    
        res.status(401).json({ msg: 'Token is not valid'});
      
    }
}