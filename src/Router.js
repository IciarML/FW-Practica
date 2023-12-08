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
    let post = Service.getPost(req.params.id);
    let { titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios } = req.body;
    let notCorrectTitulo = ""
    let notCorrectAutor = ""
    let notCorrectGenero = "..."
    /*let notCorrectSinopsis = ""
    let notCorrectIsbn = ""
    let notCorrectPrecio = ""
    let notCorrectEditorial = ""
    let notCorrectIdioma = ""
    let notCorrectImagen = ""
    let notCorrectOptionRadios = ""*/
    //Se llama a una función (addPost) para agregar una nueva publicación
    Service.addPost({ titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios });

    //Se renderiza a savedBook
    res.render('savedBook',  {
        posts: Service.getPosts(),
    success: req.body.titulo != notCorrectTitulo,
    success2: req.body.autor != notCorrectAutor,
    success3: req.body.genero != notCorrectGenero,
    bien: (req.body.titulo != notCorrectTitulo) && (req.body.autor != notCorrectAutor) && (req.body.genero != notCorrectGenero),
});
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
