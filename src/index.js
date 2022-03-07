
const express = require('express');
const app = express();

// Rutas 

app.get('/checkout', (req, res) => {
    res.send('<h1> hola como te vaasfd </h1>')
})

// Server

app.listen(3000, () => {
    console.log("Server en puerto 3000");
})
