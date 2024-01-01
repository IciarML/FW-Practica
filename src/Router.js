import express from 'express';
import * as Service from './Service.js';
import { getPostss } from './Service.js';

const router = express.Router();

router.get('/', (req, res) => {
    const posts = getPostss(0,4);
    res.render('Homepage', {
        posts: posts
    });
});

router.post('/new', (req, res) => {
    //Se extraen los datos
    let { titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios } = req.body;
    let valoraciones = [];
    let notCorrectTitulo = ''
    let notCorrectAutor = ''
    let notCorrectPrecio = ''
    /*if (req.body.titulo == '' || req.body.autor == '' || req.body.precio == '') {
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
            //Se llama a una función (addPost) para agregar una nueva publicación*/
            let post = Service.getPost(Service.addPost({ titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios, valoraciones }));
        //};
});

router.get("/editar/:id", (req, res) => {
    let post = Service.getPost(req.params.id);
    res.render("FormularioEditar",{post});
  }); 

router.post('/update/:id', (req, res) => {
        let { titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios } = req.body;
        let post = ({titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios});
        Service.editPost(req.params.id,post);
        post = Service.getPost(req.params.id);
        res.render('productDescription',{post});
});
            

router.post("/newValoracion/:id", (req, res) => {
    let { nombre, comentario, estrellas } = req.body;
    let newValoracion = ({ nombre, comentario, estrellas });
    Service.addValoracion(req.params.id, newValoracion)
    let post = Service.getPost(req.params.id);
    res.render('productDescription', { post });
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

//Cargar más
router.get('/books', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const posts = getPostss(from,to);

    res.render('books', {
        posts: posts
    });
});


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


export default router;
