//Importar mongoose
const mongoose = require('mongoose');

//Importar config
const config = require('config');

//Le pido a config que me traiga los datos del json
const db = config.get('mongoURI');

//Conectar a la base de datos usando una funcion con async
const connectDB = async () => {

    try{
      await mongoose.connect(db);

      console.log('MongoDB Connected...')
    }catch(err){
        console.error(err.message);

        //Exit process with failure
        process.exit(1);

    }
}

module.exports = connectDB;