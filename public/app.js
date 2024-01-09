const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/books?from=${from}&to=${to}`);

    const newPosts = await response.text();
  
    const postsDiv = document.getElementById("books");

    postsDiv.innerHTML += newPosts;

    loadMoreRequests++;
}


//Buscador
async function checkBuscarAvailability() {

    let buscarInput = document.getElementById('buscar');

    let buscar = buscarInput.value.toLowerCase(); //convierte los nombres a minusculas para no hacer distinciones

    const response = await fetch(`/availableBuscar?buscar=${buscar}`);

    const responseObj = await response.json();

    let message = responseObj.available? 
        '<p>No encontrado</p>':
        '<p>Encontrado</p>';

    const messageDiv = document.getElementById('message');
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