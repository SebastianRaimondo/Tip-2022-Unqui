
# Anido programa

## Esta aplicacion es una mini red social para programadores, con el proposito de interactuar entre colegas y tambien poder publicar un perfil con sus habilidades, experiencias y nivel, cualquier persona interesada o empresa puede contactar con la persona de dicho perfil


## Instalacion

Es necesario instalar Node.js y MongoDB para la base de datos local, en caso de contar con un cluster no es necesario instalar MongoDB
    

## Scripts de Instalacion
En la raiz del proyecto correr el script "npm install" para instalar las dependencias del server y luego en la carpeta "Client" correr el mismo script para instalar las dependencias del cliente

## Configuracion de la base de datos

Para cambiar el puerto en el que se levanta el servicio hay que modificar el archivo ".env" que se encuentra en el root del proyecto


Para cambiar el puerto en el que la api llama al servicio hay que modificar la variable "proxy" en el archivo "package.json" en la carpeta client 

Para configurar la conexion a la base de datos se debe modificar la variable "mongoURI" en el archivo
 "default.json" en la carpeta config que se encuentra en el root del proyecto

 ## Para correr la aplicacion

En  la raiz del proyecto ejecutar el comando "run dev", con ese comando se corren el servidor y el cliente de forma concurrente gracias a la biblioteca "concurrently"