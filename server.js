//Importar express
const express = require('express');

//Importar connectDB
const connectDB = require('./config/db');

//Inicializar la variable con exprees
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}));

//Creo un endpoint para probar
app.get('/', (req, res) => res.send('API Running pedro anido'))


//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//Poner el puerto en una variable de entorno para cuando se deploye,
// localmente se va a conectar al puerto 5000
const PORT = process.env.PORT || 5000; 

//Le paso el puerto de escucha y una funcion callback que me devuelva algo cuando se conecte
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));