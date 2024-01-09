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
    const posts = getPostss(0,4); //para que cuando vuelva al Homepage se carguen 4 libros
    let { titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios } = req.body;
    let valoraciones = [];
    //Se llama a una función (addPost) para agregar una nueva publicación
    Service.getPost(Service.addPost({ titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios, valoraciones }));
    res.render('Homepage',{posts: posts});
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


//Buscador
let existingNames = ['eighteen', 'lobezno: el viejo logan', 'monet: the triumph of impressionism', 'pacientes', 'harry', 'the', 'the bell jar'];

router.get('/availableBuscar', (req, res) => {

    let buscar = req.query.buscar.toLowerCase();

    let matchingNames = existingNames.filter(name => name.toLowerCase().includes(buscar));

    let availableBuscar = matchingNames.length === 0;


    let response = {
        available: availableBuscar
    }

    res.json(response);
});



//Valoraciones
/*router.post('/saveRandom', (req, res) => {

    let info = req.body.key;

    let response = {
        key: info,
        value: Math.ceil(Math.random() * 100)
    }

    res.json(response);
});*/


/*let existingNames = [ 
    {name:'la biblioteca de medianoche', image: '/Photos/Image8.jpg'},
    {name: 'la fundacion', image: '/Photos/Image6.jpg' },
    {name: 'eighteen', image: '/Photos/Image10.jpg' },
    {name: 'lobezno: el viejo logan', image: '/Photos/Image7.jpg'},
    {name: 'monet: the triumph of impressionism', image: '/Photos/Image9.jpg'},
    {name: 'los pacientes del doctor garcía', image: '/Photos/Image12.jpg' },
    {name: 'harry potter coleccion completa', image: '/Photos/Imagen1.png'},
    {name: 'the bell jar', image: '/Photos/Image2.jpg' },

];*/


export default router;