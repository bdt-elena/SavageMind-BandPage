document.addEventListener('DOMContentLoaded', function(){ //Cargamos el contenido del documento
    iniciarAPP(); //llamamos la función que tendrá las funciones para la pagina
});

function iniciarAPP(){
    
    galeriaEventos(); //llamamos la funcion para crear una galeria de eventos
  
}

function galeriaEventos(){

    const galeria = document.querySelector(".imagenes"); //seleccionamos la ul de html donde pondremos nuestras imagenes

    
    for(let i=1; i<=5;i++){ //hacemos un for que empieza desde el 17 ya que nuestros archivos inician con ese numero
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
        
            <source srcset="build/img/eventos/${i}.avif" type="image/avif">
            <source srcset="build/img/eventos/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/eventos/${i}" alt="Imagen Galería">
        
        `;
        galeria.appendChild(imagen);
    };
}