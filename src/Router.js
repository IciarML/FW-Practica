import express from 'express';
import * as Service from './Service.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Homepage', { 
        posts: Service.getPosts() 
    });
});

router.post('/new', (req, res) => {
    //Se extraen los datos
    let { titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios } = req.body;
    //Se llama a una función (addPost) para agregar una nueva publicación
    Service.addPost({ titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios });

    form.addEventListener("submit", e =>{
        let warnings = ""
        let entrar = false
        if(titulo.value.length < 1){
            warnings += 'Debes poner un titulo'
            entrar = true
        }
        if(autor.value.length < 1){
            warnings += 'Debes poner un autor'
            entrar = true
        }
        if(genero.value = "..."){
            warnings += 'Debes poner un genero'
            entrar = true
        }
        if(sinopsis.value.length < 1){
            warnings += 'Debes poner un sinopsis'
            entrar = true
        }
        if(isbn.value.length < 1){
            warnings += 'Debes poner un isbn'
            entrar = true
        }
        if(precio.value.length < 1){
            warnings += 'Debes poner un precio'
            entrar = true
        }
        if(editorial.value.length < 1){
            warnings += 'Debes poner un editorial'
            entrar = true
        }
        if(idioma.value = "..."){
            warnings += 'Debes poner un idioma'
            entrar = true
        }
        if(imagen.value.length < 1){
            warnings += 'Debes poner un imagen'
            entrar = true
        }
        if(entrar) {
            parrafo.innerHTML = warnings
        }
        else {
            parrafo.innerHTML = "Enviado"
        }
        
    })
    //Se renderiza a savedBook
    res.render('savedBook');
});

router.get('/post/:id', (req, res) => {
    let post = Service.getPost(req.params.id);
    res.render('productDescription', { post });
});

router.get('/post/:id/delete', (req, res) => {
    Service.deletePost(req.params.id);
    res.render('deleteBook');
});

export default router;
