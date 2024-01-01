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

document.addEventListener("keyup", e=>{
    
    if(e.target.matches("#buscador")){
        if(e.key === "Escape")e.target.value = ""
        document.querySelectorAll(".book-image").forEach(books =>{
            books.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?books.classList.remove("filtro")
            :books.classList.add("filtro")
        })
    }    
})