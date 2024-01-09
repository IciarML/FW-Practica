const form = document.getElementById('forms');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor'); 
const sinopsis = document.getElementById('sinopsis');
const precio = document.getElementById('precio');
const imagen = document.getElementById('imagen');

const genero = document.getElementById('genero');
const isbn = document.getElementById('isbn');
const editorial = document.getElementById('editorial');
const idioma = document.getElementById('idioma');

form.addEventListener('submit', e=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const tituloValue = titulo.value.trim();
    const autorValue = autor.value.trim();
    const sinopsisValue = sinopsis.value.trim();
    const precioValue = precio.value.trim();
    const generoValue = genero.value.trim();
    const isbnValue = isbn.value.trim();
    const editorialValue = editorial.value.trim();
    const idiomaValue = idioma.value.trim();
    const imagenValue = imagen.value.trim();

    if(tituloValue == ''){
        setErrorFor(titulo, 'Error, tiene que indicar el título.');
    }
    else if (!isTitle(tituloValue)){
        setErrorFor(titulo, 'Indique la primera letra en mayúscula.');
    }
    else{
        setSuccessFor(titulo);
    }
    if(autorValue == ''){
        setErrorFor(autor, 'Error, tiene que indicar el autor.');
    }
    else{
        setSuccessFor(autor);
    }
    if(sinopsisValue == ''){
        setErrorFor(sinopsis, 'Error, tiene que indicar la sinopsis.');
    }
    else{
        setSuccessFor(sinopsis);
    }
    if(precioValue == ''){
        setErrorFor(precio, 'Error, tiene que indicar el precio.');
    }
    else if(!isPrice(precioValue)){
        setErrorFor(precio, 'Indique un número.');
    }
    else{
        setSuccessFor(precio);
    }
    if(imagenValue == ''){
        setErrorFor(imagen, 'Error, tiene que indicar la imagen.');
    }
    else if(!isURL(imagenValue)) {
        setErrorFor(imagen, 'Indique un formato de URL válido.');
    }
    else{
        setSuccessFor(imagen);
    }
    if(generoValue == ''){
        setErrorFor(genero, 'Error, tiene que indicar el genero.');
    }
    else{
        setSuccessFor(genero);
    }
    if(isbnValue == ''){
        setErrorFor(isbn, 'Error, tiene que indicar el isbn.');
    }
    else{
        setSuccessFor(isbn);
    }
    if(editorialValue == ''){
        setErrorFor(editorial, 'Error, tiene que indicar la editorial.');
    }
    else{
        setSuccessFor(editorial);
    }
    if(idiomaValue == ''){
        setErrorFor(idioma, 'Error, tiene que indicar el idioma.');
    }
    else{
        setSuccessFor(idioma);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'control error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'control success';
}

function isURL(imagen){
    return /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*)*$/.test(imagen);
}

function isTitle(titulo){
    return /^[A-Z]/.test(titulo);
}

function isPrice(precio){
    return /^[0-9]+$/.test(precio);
}