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
    let notCorrectPrecio = ""
    //Se llama a una función (addPost) para agregar una nueva publicación
    if(req.body.titulo == '' || req.body.autor == '' || req.body.precio == ''){
        //Se renderiza a savedBook
        res.render('savedBook',  {
        posts: Service.getPosts(),
        success: req.body.titulo != notCorrectTitulo,
        success2: req.body.autor != notCorrectAutor,
        success3: req.body.precio != notCorrectPrecio,
        bien: (req.body.titulo != notCorrectTitulo) && (req.body.autor != notCorrectAutor) && (req.body.precio != notCorrectPrecio),
});
    }
    else{
        res.render('savedBook',  {
            posts: Service.getPosts(),
            success: req.body.titulo != notCorrectTitulo,
            success2: req.body.autor != notCorrectAutor,
            success3: req.body.precio != notCorrectPrecio,
            bien: (req.body.titulo != notCorrectTitulo) && (req.body.autor != notCorrectAutor) && (req.body.precio != notCorrectPrecio),
        });
        Service.addPost({ titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios });
    }; 
});


//Ruta de la pagina detalle
router.get('/post/:id', (req, res) => {
    let post = Service.getPost(req.params.id);
    res.render('productDescription', { post });
});

//Ruta de la pagina intermedia al borrar
router.get('/post/:id/delete', (req, res) => {
    Service.deletePost(req.params.id);
    res.render('deleteBook');
});


//Rutas del formulario
router.get('/formulario', (req, res) => {
    res.render('Formulario');
 });
 
//Modificar plato
router.get('/post/:id/modify', (req, res) => { 
    let post = Service.getPost(req.params.id);  
    res.render('Formulario', {post});
 }); 

 
export default router;
