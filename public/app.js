const NUM_RESULTS = 4;
let loadMoreRequests = 0;

//Cargar más
async function loadMore(){
    //Paso 1: Calcular los índices "from" y "to" para la siguiente carga de resultados
    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;
    //Paso 2: Realizar una solicitud asíncrona al servidor para obtener más resultados de libros
    const response = await fetch(`/books?from=${from}&to=${to}`);
    //Paso 3: Obtener los nuevos resultados en formato de texto desde la respuesta del servidor
    const newPosts = await response.text();
    //Paso 4: Obtener el elemento HTML donde se mostrarán los resultados de los libros
    const postsDiv = document.getElementById("books");
    //Paso 5: Agregar los nuevos resultados al contenido existente en el elemento HTML
    postsDiv.innerHTML += newPosts;
    //Paso 6: Incrementar el contador de solicitudes de cargar más
    loadMoreRequests++;
}

//Buscador
async function checkBuscarAvailability() {
    //Paso 1: Obtener el elemento de entrada con el id 'buscar'
    let buscarInput = document.getElementById('buscar');
    //Paso 2: Obtener el valor en minúsculas del campo de entrada de búsqueda
    let buscar = buscarInput.value.toLowerCase(); //convierte los nombres a minusculas para no hacer distinciones
    //Paso 3: Realizar una solicitud asíncrona al punto final del servidor '/availableBuscar' con el término de búsqueda como parámetro de consulta
    const response = await fetch(`/availableBuscar?buscar=${buscar}`);
    //Paso 4: Analizar la respuesta JSON recibida del servidor
    const responseObj = await response.json();
    //Paso 5: Crear un mensaje en función del estado de disponibilidad
    let message = responseObj.available? 
        '<p>No encontrado</p>':
        '<p>Encontrado</p>';
        /*
        IDEAS PARA EL BUSCADOR
        if (responseObj.available) {
            //<p>No encontrado</p>
        } else { 
            //<p>encontrado</p>
        }  
        */
        
    //Paso 6: Obtener el elemento HTML con el id 'message'
    const messageDiv = document.getElementById('message');
    //Paso 7: Actualizar el contenido del elemento 'message' con el mensaje generado
    messageDiv.innerHTML = message;
}

/*           NO FUNCIONA POR AHORA
async function generateRandom(){ //para subir las valoraciones con ajax

    const key = Math.ceil(Math.random() * 100)

    const response = await fetch(`/saveRandom`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: key
        })
    });

    const info = await response.json();
  
    const content = document.getElementById("content");

    const newRow = document.createElement("tr")
    const cell1 = document.createElement("td")
    cell1.textContent = info.key
    const cell2 = document.createElement("td")
    cell2.textContent = info.value
    newRow.appendChild(cell1)
    newRow.appendChild(cell2)
    content.appendChild(newRow);

}

async function newBook(){ //para hacer post a los libros

}*/

//Animacion
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5,
        }
    })

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
            scrub: 0.5,
            start: 'center center',
            end: 2000,
        }
    })

    document.querySelectorAll('.character').forEach(el => {

        gsap.to(el.querySelector('.caption'), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.quote'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.quote'),
                start: 'top bottom',
                end: '+=20%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.nickname'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.nickname'),
                start: 'top bottom',
                end: '+=10%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.block'), {
            x: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.block'),
                start: 'top bottom',
                end: '+=' + window.innerWidth,
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('img'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('img'),
                start: 'top bottom',
                end: '+=50%',
                scrub: 0.5,
            }
        })

        gsap.to(el.querySelector('.huge-text'), {
            y: 0,
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.huge-text'),
                start: 'top bottom',
                end: '+=100%',
                scrub: 0.5,
            }
        })

    })

})