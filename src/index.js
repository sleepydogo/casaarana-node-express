
const express = require('express');
const bodyParser = require('body-parser');  
const app = express();


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  // Token de vendedor 
  access_token: "APP_USR-8473819707556294-030702-b361bd1db8400f52c31f90315604fb1b-1085351960"
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }))


// Rutas 
app.post('/checkout', (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "Entrada",
        unit_price: 300,
        quantity: 1,
      },
    ],
  };
  
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response.body);
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
  
})

// Server

app.listen(3000, () => {
    console.log("Server en puerto 3000");
})
