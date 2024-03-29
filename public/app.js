const NUM_RESULTS = 4;
let loadMoreRequests = 0;

//Cargar más
async function loadMore() {
    //Paso 1: Calcular los índices "from" y "to" para la siguiente carga de resultados
    const from = (loadMoreRequests + 1) * NUM_RESULTS;
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

//Valoraciones
async function generateRandom() {

    const key = document.getElementById('commentInput').value

    console.log('Sending key:', key);

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
    cell1.textContent = key
    newRow.appendChild(cell1)
    content.appendChild(newRow);
}

//Filtro
function buscar() {
    //Obtener el valor del campo de búsqueda
    var query = document.getElementById('busqueda').value.toLowerCase();

    var elementos = [
        { titulo: "HARRY POTTER COLECCIÓN COMPLETA" },
        { titulo: "THE BELL JAR" },
        { titulo: "RETORNO DE LAS ESTRELLAS" },
        { titulo: "INVISIBLE" },
        { titulo: "HEARTSTOPPER 1. DOS CHICOS JUNTOS" },
        { titulo: "LA FUNDACIÓN" },
        { titulo: "LOBEZNO: EL VIEJO LOGAN" },
        { titulo: "LA BIBLIOTECA DE LA MEDIA NOCHE" },
        { titulo: "MONET: THE TRIUMPH OF IMPRESSIONISM" },
        { titulo: "EIGHTEEN" },
        { titulo: "VEINTE MIL LEGUAS DE VIAJE SUBMARINO" },
        { titulo: "LOS PACIENTES DEL DOCTOR GARCÍA" }
    ];

    //Filtrar los elementos que coinciden con la consulta
    var resultados = elementos.filter(function (elemento) {
        return elemento.titulo.toLowerCase().includes(query);
    });

    //Mostrar los resultados
    mostrarResultados(resultados);
}

function mostrarResultados(resultados) { //HTML para mostrar los resultados
    var resultadosHTML = '<ul>';

    resultados.forEach(function (resultado) {
        resultadosHTML += '<li>' + resultado.titulo + '</li> <br>';
    });

    resultadosHTML += '</ul>';

    //Mostrar los resultados en el elemento con id "resultados"
    document.getElementById('resultados').innerHTML = resultadosHTML;
}