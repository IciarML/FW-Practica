const posts = new Map();
let nextId = 0;

addPost({
        imagen: 'Photos/Image1.jpg', titulo: "HARRY POTTER COLECCIÓN COMPLETA", autor: "J.K. Rowling", precio: "80.68",
        genero: "Fantasía", sinopsis: "...", isbn: "9788408224228", editorial: "SALAMANDRA", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "Photos/Image2.jpg", titulo: "THE BELL JAR", autor: "Sylvia Plath", precio: "11.18",
        genero: "Biografía", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Inglés", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "public/Photos/Image3.jpg", titulo: "RETORNO DE LAS ESTRELLAS", autor: "Stanisław Lem", precio: "13.77",
        genero: "Ficción", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "public/Photos/Image4.jpg", titulo: "INVISIBLE", autor: "Eloy Moreno", precio: "15.15",
        genero: "Literatura", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});

//HEARTSTOPPER
addPost({
        imagen: "public/Photos/Image5.jpg", titulo: "HEARTSTOPPER 1. DOS CHICOS JUNTOS", autor: "Alice Oseman", precio: "15.15",
        genero: "Romance",
        sinopsis: "Esta historia de amor entre dos chicos, uno de ellos declaradamente homosexual y el otro en vías de autodescubrimiento, nos recordará que hay primeros amores frágiles como el cristal y memorables como el diamante. Con los titubeos propios de cualquier amor adolescente, Heartstopper responde a la manera de sentir de los jóvenes reales, con una visión abierta, natural y sensible sobre el amor y la identidad sexual, sin perder nunca la delicadeza y la emoción.",
        isbn: "9788408224228", editorial: "HACHETTE CHILDREN S BOOKS", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Victoria",
        comentario: "Se ha convertido en mi cómic favorito. Es impresionante. No podrás leer una mejor historia de amor.",
        estrellas: "5/5",
});

addPost({
        imagen: "public/Photos/Image6.jpg", titulo: "LA FUNDACIÓN", autor: "Antonio Buero Vallejo", precio: "9.45",
        genero: "Misterio", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "public/Photos/Image7.jpg", titulo: "LOBEZNO: EL VIEJO LOGAN", autor: "Mark Millar, Steve Mcniven", precio: "20.85",
        genero: "Cómic", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "public/Photos/Image8.jpg", titulo: "LA BIBLIOTECA DE LA MEDIA NOCHE", autor: "Matt Haig", precio: "21.37",
        genero: "Ficción", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "public/Photos/Image9.jpg", titulo: "MONET: THE TRIUMPH OF IMPRESSIONISM", autor: "Daniel Wildenstein", precio: "15.20",
        genero: "Historia", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Inglés", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "../Photos/Image10.jpg", titulo: "EIGHTEEN", autor: "Alberto Ramos", precio: "12.25",
        genero: "Poesía", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "../Photos/Image11.jpg", titulo: "VEINTE MIL LEGUAS DE VIAJE SUBMARINO", autor: "Julio Verne", precio: "14.96",
        genero: "Aventura", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});
addPost({
        imagen: "../Photos/Image12.jpg", titulo: "LOS PACIENTES DEL DOCTOR GARCÍA", autor: "Almudena Grandes", precio: "21.75",
        genero: "Historia", sinopsis: "...", isbn: "9788408224228", editorial: "...", idioma: "Castellano", optionRadios: "Tapa blanda",
        //Valoracion
        nombre: "Roberta",
        comentario: "Se ha convertido en mi libro favorito.",
        estrellas: "5/5",
});

export function addPost(post) {
        let id = nextId++;
        post.id = id.toString();
        posts.set(post.id, post);
}

export function deletePost(id) {
        posts.delete(id);
}

export function getPosts() {
        return [...posts.values()];
}

export function getPost(id) {
        return posts.get(id);
}
