
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", login);
document.getElementById("btn__pago").addEventListener("click", pago);

window.addEventListener("resize", widthPag);

// Variables

var contenedor__login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_back_login  = document.querySelector(".caja__back-login");
var caja_back_register = document.querySelector(".caja__back-register");

// Mercado pago
const mercadopago = new MercadoPago('TEST-27b738ff-ca1a-4485-b310-303bb67791a2', {
  locale: 'es-AR'
});

document.getElementById("checkout-btn").addEventListener("click", function() {

  $('#checkout-btn').attr("disabled", true);
  
  const orderData = {
    quantity: 1,
    description: "Entrada",
    price: 300
  };
    
  fetch("/create_preference", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then(function(response) {
        return response.json();
    })
    .then(function(preference) {
        createCheckoutButton(preference.id);
        
        $(".shopping-cart").fadeOut(500);
        setTimeout(() => {
            $(".container_payment").show(500).fadeIn();
        }, 500);
    })
    .catch(function() {
        alert("Unexpected error");
        $('#checkout-btn').attr("disabled", false);
    });
});

function register(){
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor__login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_back_register.style.opacity = "0";
        caja_back_login.style.opacity = "1";
    }
    else { 
        formulario_register.style.display = "block";
        contenedor__login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_back_register.style.display = "none";
        caja_back_login.style.display = "block";
    }
    
}

function login(){
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor__login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_back_register.style.opacity = "1";
        caja_back_login.style.opacity = "0";
    }
    else {
        formulario_register.style.display = "none";
        contenedor__login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_back_register.style.display = "block";
        caja_back_login.style.display = "none";
    }
}

function widthPag() {
    if (window.innerWidth > 850) {
        caja_back_login.style.display = "block";
        caja_back_register.style.display = "block";
    }else{
        caja_back_register.style.display = "block";
        caja_back_register.style.opacity = "1";
        caja_back_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor__login_register.style.left = "0px";
    }
}

function pago(){
    alert('hola');
}

widthPag();