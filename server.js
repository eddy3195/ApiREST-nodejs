require ('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// otro forma de serializar la informacion de las peticiones HTTP 
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));


// configuracion por defecto del paquete body-parse

// create application/json parser
//var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/usuario', function (req, res) {

  const { nombre, apellido, edad } = req.body;
  var nombre_persona = nombre;

  if (nombre_persona === undefined) {

    return res.status(400).json({
      ok: false,
      message: 'Unos de los valores obtenidos es invalido o vacio'
    });

  } else {

    return res.json({
      nombre,
      apellido,
      edad
    });

  }

});

app.put('/usuario', function(req, res){
  return res.send('Peticion PUT');
});

app.delete('/usuario/:id', function(req, res){

  const {id} = req.params;
  
  if(id == 5){
      return res.json({
        id
      });

  }else{
    return res.send('El id no existe en nuestra base de datos');
  }

  
});
 
app.listen(process.env.PORT, () =>{
    console.log('escuchando en el puerto', 3000);
});

