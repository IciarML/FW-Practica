const posts = new Map();
let nextId = 0;

addPost({imagen: "public/Photos/Image1.jpg", titulo: "HARRY POTTER COLECCIÓN COMPLETA", autor: "J.K. Rowling", precio: "80.68",
        genero: "Fantasía"}); 
addPost({imagen: "public/Photos/Image2.jpg", titulo: "THE BELL JAR", autor: "Sylvia Plath", precio: "11.18",
        genero: "Biografía"}); 
addPost({imagen: "public/Photos/Image3.jpg", titulo: "RETORNO DE LAS ESTRELLAS", autor: "Stanisław Lem", precio: "13.77",
        genero: "Ficción"}); 
addPost({imagen: "public/Photos/Image4.jpg", titulo: "INVISIBLE", autor: "Eloy Moreno", precio: "15.15",
        genero: "Literatura"}); 
addPost({imagen: "public/Photos/Image5.jpg", titulo: "HEARTSTOPPER 1. DOS CHICOS JUNTOS", autor: "Alice Oseman", precio: "15.15",
        genero: "Romance"}); 
addPost({imagen: "public/Photos/Image6.jpg", titulo: "LA FUNDACIÓN", autor: "Antonio Buero Vallejo", precio: "9.45",
        genero: "Misterio"}); 
addPost({imagen: "public/Photos/Image7.jpg", titulo: "LOBEZNO: EL VIEJO LOGAN", autor: "Mark Millar, Steve Mcniven", precio: "20.85",
        genero: "Cómic"}); 
addPost({imagen: "public/Photos/Image8.jpg", titulo: "LA BIBLIOTECA DE LA MEDIA NOCHE", autor: "Matt Haig", precio: "21.37",
        genero: "Ficción"}); 
addPost({imagen: "public/Photos/Image9.jpg", titulo: "MONET: THE TRIUMPH OF IMPRESSIONISM", autor: "Daniel Wildenstein", precio: "15.20",
        genero: "Historia"}); 
addPost({imagen: "public/Photos/Image10.jpg", titulo: "EIGHTEEN", autor: "Alberto Ramos", precio: "12.25",
        genero: "Poesía"}); 
addPost({imagen: "public/Photos/Image11.jpg", titulo: "VEINTE MIL LEGUAS DE VIAJE SUBMARINO", autor: "Julio Verne", precio: "14.96",
        genero: "Aventura"}); 
addPost({imagen: "public/Photos/Image12.jpg", titulo: "LOS PACIENTES DEL DOCTOR GARCÍA", autor: "Almudena Grandes", precio: "21.75",
        genero: "Historia"}); 


export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(){
    return [...posts.values()];
}

export function getPost(id){
    return posts.get(id);
}