# Curso de Visual Thinking API

## Si desea probar y modificar el proyecto

Descargue el repositorio en su equipo, escribiendo en la terminal

``` terminal
git clone git@github.com:alfonso-ramos/code_challenge_launchX.git
```

Despues descargue las dependencias utilizadas con el comando

```terminal
npm install
```
## Dependencias

Las dependencias utilizadas en este proyecto son:
- Eslint
- Jest
- Express
### El para que se utilzó cada dependencia

**Eslint** es una dependencia que por medio de una serie de reglas,busca y corrige errores de codigo y lo corrige para poder seguir un estilo de codigo.

Con **Jest** creamos pruebas de unidad para cada metodo de nuestras clases, para conocer si realmente nuestro codigo funciona, primero tenemos que hacer pruebas

**Express** se utilizo para el desarrollo de esta API, levanta un localhost en el puerto 300, con el cual podemos acceder a nuestro metodos de la API

## Como usar esta API

Una vez que ejecutaste el comando:

```terminal
$ npm run server
```

Puedes acceder a las siguientes rutas y ver los endpoints que se requirieron para esta API

- Para acceder al JSON de todos los estudiantes [localhost:3000/students](http://localhost:3000/students)
- Para acceder a los emails de los estudiantes pero solo a aquellos que tengan una certifización [localhost:3000/students/emails](http://localhost:3000/students/emails)
- Para acceder al JSON de estudiantes pero solo aquellos que tengan 500 o mas puntos [localhost:3000/students/credits](http://localhost:3000/students/credits)