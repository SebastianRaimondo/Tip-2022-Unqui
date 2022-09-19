
//Importar express

const express = require('express');
const upload = require("./client/src/multer");


//Importar connectDB
const connectDB = require('./config/db');

//Inicializar la variable con exprees
const app = express();

const router = express.Router();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}));

const path = require("path")

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.post("/api/upload", upload(), (req,res) =>{

  res.send(req.file.filename)

})

//Serve static assets in production

if(process.env.NODE_ENV === "production"){

  //Set static folder

app.use(express.static("client/build"))

app.get("*",(req,res) => {

  res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
})
}


//Poner el puerto en una variable de entorno para cuando se deploye,
// localmente se va a conectar al puerto 5000
const PORT = process.env.PORT || 5000; 

//Le paso el puerto de escucha y una funcion callback que me devuelva algo cuando se conecte
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));