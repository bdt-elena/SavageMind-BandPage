const {src, dest, watch, parallel} = require('gulp'); //importamos gulp

//CSS
const sass = require('gulp-sass')(require('sass')); //importamos gulp-sas y sass a la vez
//Imagenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done){
   
    src('src/scss/**/*.scss')//Identificar el archivo SASS
        //.pipe(plumber) 
        .pipe(sass())   //Compila
        .pipe(dest('build/css'))  //Almacenar en el disco duro

  
    done();
}

function images(done){

    const opcs = {
        optimizationLevel: 3 //Optimizamos las imagenes en un nivel 3
    }

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(cache(imagemin(opcs)))
        .pipe(dest("build/img"))

    done();
}
function imagestoWebp(done){

    const opcs = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(webp(opcs))
        .pipe(dest('build/img'))

    done();
}

function imagestoAvif(done){

    const opcs = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(avif(opcs))
        .pipe(dest('build/img'))

    done();
}

function javaScript(done){

    src("src/js/**/*.js")
        .pipe(dest('build/js'));

    done();
}

function dev(done){

    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javaScript);
    done();
}

exports.css = css; //Par exportar la funcion
exports.js = javaScript;
exports.images = images;
exports.imagestoWebp = imagestoWebp;
exports.imagestoAvif = imagestoAvif;
exports.dev = parallel(images, imagestoWebp, imagestoAvif, javaScript, dev);