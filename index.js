const express = require('express');
const app = express();
const morgan=require('morgan');
 
//Configuraciones  servidor
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Nuestro primer WS Get
app.get('/', (req, res) => {    
    res.json(
        {
            "num1": 6,
            "num2": 9
        }
    );
})


// Endpoint para sumar dos números
app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;

  // Validar que se hayan enviado los dos números  que no esten vacio
  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan números para sumar' });
  }

  // Sumar los números
  const resultado = num1 + num2;

  // Enviar el resultado
  res.send({ resultado });
});



//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
//git 