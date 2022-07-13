window.onload = inicio;

var imagen, cajaImagen, boton;

function inicio() {
  //Se añaden los elementos al final del body
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `<button id="boton1" class="boton">Botón 1</button>
  <button id="boton2" class="boton">Botón 2</button>
  <button id="boton3" class="boton">Botón 3</button>
  <div id="imagen"><img src="./images/logo-html.png" /></div>`
  );
  imagen = document.querySelector("img");
  cajaImagen = document.querySelector("#imagen");
  boton = document.querySelectorAll(".boton");
  //llamo al primero de los botones, al hacer clic se ejecutará acción1
  boton[0].onclick = accion1;
  boton[1].onclick = accion2;
  boton[2].onclick = accion3;
}

function accion1() {
  imagen.style.backgroundColor = "#1162ac";
  //pruebo con lo siguiente porque no funciona el radio pero no resulta, parece que es por el tipo de imagen
  //var imagen_body = imagen;
  //imagen_body.style.borderRadius("50%");

  cajaImagen.style.borderRadius = "50%";
  cajaImagen.style.transform = "rotate(10deg)";
  boton[0].style.visibility = "hidden";
}
function accion2() {
  if (cajaImagen.style.display == "block") {
    cajaImagen.style.display = "none";
    boton[1].style.backgroundColor = "#1162ac";
  } else {
    cajaImagen.style.display = "block";
    boton[1].style.backgroundColor = "#FF8000";
  }
}
function accion3() {
  cajaImagen.removeAttribute("style");
  boton[0].style = null;
  boton[1].style = null;
  boton[2].style = null;
}
