
const express = require('express');
const bodyParser = require('body-parser');  
const app = express();


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  // Token de vendedor 
  access_token: "APP_USR-216903659492431-030703-54ef13b88ed906bc4bd2310790f453a0-1085396902"
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }))


// Rutas 
app.post('/checkout', (req, res) => {
  // Crea un objeto de preferencia
  var preference = {}
  preference = {
    "items": [
      {
        "title": "Entrada Cosmica",
        "currency_id": "ARS",
        "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
        "description": "Entrada al evento Casa Arana.",
        "category_id": "entrada",
        "quantity": 1,
        "unit_price": 75.76,
        "picture_url": "https://w7.pngwing.com/pngs/35/742/png-transparent-t-shirt-ape-hoodie-monkey-chimpanzee-t-shirt-fictional-character-glasses-hair.png"
      }
    ],
    "payment_methods": {
      "excluded_payment_types": [
        {
          "id": "ticket"
        }
      ],
      "installments": 1
	  },
    "notification_url": "https://hookb.in/9XoX6JGrjBsW1OXXwZKB",
  }

  
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
