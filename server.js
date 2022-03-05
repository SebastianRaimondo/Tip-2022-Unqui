//Importar express
const express = require('express');

//Inicializar la variable con exprees
const app = express();

//Creo un endpoint para probar
app.get('/', (req, res) => res.send('API Running pedro anido'))

//Poner el puerto en una variable de entorno para cuando se deploye,
// localmente se va a conectar al puerto 5000
const PORT = process.env.PORT || 5000; 

//Le paso el puerto de escucha y una funcion callback que me devuelva algo cuando se conecte
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));