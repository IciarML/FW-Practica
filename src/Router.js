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
