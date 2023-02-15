# Título: Descripción

// TEXTO

# API desplegada

La API desplegada puede encontrarse en el enlace: "{ENLACE}"
Todas las rutas descritas en el apartado "Rutas de la aplicación" son endpoints válidos contra esta url.

La aplicación completa desplegada se puede encontrar en el siguiente enlace: "{API DESPLEGADA}"

# Variables de Entorno

Si el proyecto quiere correrse en local, deberá crearse un archivo .env en el directorio raíz. 

Dicho archivo deberá comprender todas estas variables de entorno:

1. PORT
2. MONGODB_URI
3. ORIGIN
4. CLOUDINARY_NAME
5. CLOUDINARY_KEY
6. CLOUDINARY_SECRET
7. TOKEN_SECRET
8. SALT

Por motivos obvios de seguridad, no se indican los valores de estas variables de entorno. Si por motivos de testeo se quiere lanzar el proyecto en local, estoy encantado de compartir los valores usados en mi proyecto local. 

Para instalar todas las dependencias utilizadas en el proyecto, simplemente se ha de ejecutar el comando:
```
npm install
```

# Colección Postman

En el directorio raíz del proyecto se encontrará una json denominado "{NOMBRE POSTMAN}". A lo largo del desarrollo de este proyecto se usa Postman para testear nuestra api. Se puede importar este archivo directamente como una colección en Postman para visualizar todo el trabajo de testeo. Las peticiones están organizadas por carpetas según las correspondientes rutas. De cada petición se incluyen distintos ejemplos de respuestas y manejos de errores.

# Rutas de la aplicación

## **{NOMBRE RUTA}**

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/photos/list             | GET               | [photos]                           | Get all photos from DB

## **User routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/users/list             | GET               | [users]                           | Get all users from the DB     |

## **Auth routes**:

| URL path                    | HTTP Method       | Response                          | Action                        |
| :--------------------------:|:-----------------:| :--------------------------------:| :----------------------------:|
| /api/auth/create            | POST              | {message: 'New User created!'}    | Create a new user             |
| /api/auth/login             | POST              | `Token`    | Log user in             |