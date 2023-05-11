
// MOSTRAR SENHA

function mostrarSenha() {
  var check = document.getElementById("password");
  if (check.type == "password") {
      check.type = "text"
      } else {
        check.type = "password"
        }
}


// SLIDER 
$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000
 
  });

  


// //Ir Homepage
// function irHomepage() {
//   location.href = "homepage.ejs"
// }
// const btnHp = document.querySelector("#btnHp");
//   btnHp.addEventListener ("click", irHomepage);

// //Ir cadastro
// function irCadastro() {
//   location.href = "cadastro.ejs"
// }
// const btnCad = document.querySelector("#btnCad");
//   btnCad.addEventListener ("click", irCadastro);

// // Ir duvidas
// function irDuvidas() {
//   location.href = "duvidas.ejs"
// }
// const btnDuv = document.querySelector("#btnDoubts");
//   btnDuv.addEventListener ("click", irDuvidas);

  


