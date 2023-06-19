document.addEventListener('DOMContentLoaded', function(){ //Cargamos el contenido del documento
    iniciarAPP(); //llamamos la función que tendrá las funciones para la pagina
});

function iniciarAPP(){
    
    galeriafotos();
    btnVideos();
    btnFotos();
}

function btnVideos(){

    const hidde_video = document.getElementById('hidde-video');
    const btn_hidde_video = document.getElementById('hidde-video-btn');
    const hidde_foto = document.getElementById('hidde-foto');

    btn_hidde_video.addEventListener('click', function(){
        hidde_video.classList.add('show-videos');
        hidde_foto.classList.remove('show-fotos');
    })
}
function btnFotos(){

    
    const hidde_foto = document.getElementById('hidde-foto');
    const btn_hidde_foto = document.getElementById('hidde-foto-btn');
    const hidde_video = document.getElementById('hidde-video');

    btn_hidde_foto.addEventListener('click', function(){
        hidde_foto.classList.add('show-fotos');
        hidde_video.classList.remove('show-videos');
    })

}
function galeriafotos(){

    const galeria = document.querySelector(".foto"); //seleccionamos la ul de html donde pondremos nuestras imagenes

    
    for(let i=1; i<=17;i++){ //hacemos un for que empieza desde el 17 ya que nuestros archivos inician con ese numero
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
        
            <source srcset="build/img/${i}.avif" type="image/avif">
            <source srcset="build/img/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/${i}" alt="Imagen Galería">
        
        `;
        imagen.classList.add('foto-galeria');

        imagen.onclick = function (){
            modalimg(i);
        }
        galeria.appendChild(imagen);
    };
}

function modalimg(id){

    const imagen = document.createElement("picture");
        imagen.innerHTML = `
            <source srcset="build/img/${id}.avif" type="image/avif">
            <source srcset="build/img/${id}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/${id}.jpg" alt="Imagen galeria">
        `;

    console.log(id);

    //creando overlay
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Boton para cerrar modal overlay img
    const closeModal = document.createElement('P');
    closeModal.textContent = 'X';
    closeModal.classList.add('boton-cerrar');

    closeModal.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    };
    
    overlay.appendChild(closeModal);

    
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    };
    
    //Agregando la foto al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}