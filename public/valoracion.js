//Valoraciones
async function generateRandom(){

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