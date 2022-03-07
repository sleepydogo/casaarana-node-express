
const express = require('express');
const app = express();


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "",
});


// Rutas 

app.get('/checkout', (req, res) => {
    res.send('<h1> hola como te vaasfdsd </h1>')
})

// Server

app.listen(3000, () => {
    console.log("Server en puerto 3000");
})
