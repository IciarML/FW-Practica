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
    let valoraciones = [];
    let notCorrectTitulo = ""
    let notCorrectAutor = ""
    let notCorrectPrecio = ""
    if (req.body.titulo == '' || req.body.autor == '' || req.body.precio == '') {
        //Se renderiza a savedBook
        res.render('savedBook', {
            posts: Service.getPosts(),
            success: req.body.titulo != notCorrectTitulo,
            success2: req.body.autor != notCorrectAutor,
            success3: req.body.precio != notCorrectPrecio,
            bien: (req.body.titulo != notCorrectTitulo) && (req.body.autor != notCorrectAutor) && (req.body.precio != notCorrectPrecio),
        });
    }
    else {
        //Se renderiza a savedBook
        res.render('savedBook', {
            posts: Service.getPosts(),
            success: req.body.titulo != notCorrectTitulo,
            success2: req.body.autor != notCorrectAutor,
            success3: req.body.precio != notCorrectPrecio,
            bien: (req.body.titulo != notCorrectTitulo) && (req.body.autor != notCorrectAutor) && (req.body.precio != notCorrectPrecio),
        });
        //Se llama a una función (addPost) para agregar una nueva publicación
       let post = Service.getPost(Service.addPost({ titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios, valoraciones }));
    };
});


router.post("/newValoracion/:id", (req, res) => {
    let { nombre, comentario, estrellas } = req.body;
    let newValoracion = ({ nombre, comentario, estrellas });
    Service.addValoracion(req.params.id, newValoracion)
    let post = Service.getPost(req.params.id);
    res.render("productDescription", { post });
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

//Editar libro
router.get('/post/:id/modify', (req, res) => {
    let { titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios } = req.body;
    let post = Service.getPost(req.params.id);
    res.render('Formulario', { post }
        /*posts: Service.getPosts(),
        nuevoTitulo: req.body.titulo,
        succesnuevoAutor: req.body.autor,
        nuevoGenero: req.body.precio,
    }*/);
    //Service.addPost({ titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios });
});

export default router;
