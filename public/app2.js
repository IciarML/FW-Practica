//Buscador
const products = [
  {
    productName: "HARRY POTTER",
    author: "J.K. Rowling",
    price: 80.68,
    img: "/Photos/Imagen1.png",
  },
  {
    productName: "THE BELL JAR",
    author: "Sylvia Plath",
    price: 11.18,
    img: "/Photos/Image2.jpg",
  },
  {
    productName: "RETORNO DE LAS ESTRELLAS",
    author: "Stanisław Lem",
    price: 13.77,
    img: "/Photos/Image3.jpg",
  },
  {
    productName: "INVISIBLE",
    author: "Eloy Moreno",
    price: 15.15,
    img: "/Photos/Image4.jpg",
  },
  {
    productName: "HEARTSTOPPER 1. DOS CHICOS JUNTOS",
    author: "Alice Oseman",
    price: 15.15,
    img: "/Photos/Image5.jpg",
  },
  {
    productName: "LA FUNDACIÓN",
    author: "Antonio Buero Vallejo",
    price: 9.45,
    img: "/Photos/Image6.jpg",
  },
  {
    productName: "LOBEZNO: EL VIEJO LOGAN",
    author: "Mark Millar, Steve Mcniven",
    price: 20.85,
    img: "/Photos/Image7.jpg",
  },
  {
    productName: "LA BIBLIOTECA DE LA MEDIA NOCHE",
    author: "Matt Haig",
    price: 21.37,
    img: "/Photos/Image8.jpg",
  },
  {
    productName: "MONET: THE TRIUMPH OF IMPRESSIONISM",
    author: "Daniel Wildenstein",
    price: 15.20,
    img: "/Photos/Image9.jpg",
  },
  {
    productName: "EIGHTEEN",
    author: "Alberto Ramos",
    price: 12.25,
    img: "/Photos/Image10.jpg",
  },
  {
    productName: "VEINTE MIL LEGUAS DE VIAJE SUBMARINO",
    author: "Julio Verne",
    price: 14.96,
    img: "/Photos/Image11.jpg",
  },
  {
    productName: "LOS PACIENTES DEL DOCTOR GARCÍA",
    author: "Almudena Grandes",
    price: 21.75,
    img: "/Photos/Image12.jpg",
  },
];
const shopContent = document.getElementById("shopContent");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const displayProducts = (productList) => {
  shopContent.innerHTML = "";

  if (productList.length === 0) {
    noResults.style.display = "block";
  } else {
    productList.forEach((product) => {
      const content = document.createElement("div");
      content.className = "card-products";
      content.innerHTML = `
            <div id='books'>
            <div class="space">
                <div class="container-fluid"> <!--Total width-->
                    <!--The rows must be contained in a container-->
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="book">
                              <a href="post/{{id}}"><img src="${product.img}" class="img-fluid" id="book-image"></a>
                                <!--Image-->
                                <!--class="img-fluid" is used to make an image flexible and adapt to the width of its container-->
                                <hr> <!--Horizontal line-->
                                <div> <!--Title-->
                                    <a class="book-title" id="book-title" href="post/{{id}}">
                                    ${product.productName}
                                    </a>
                                </div>
                                <div class="book-author">${product.author}</div> <!--Author-->
                                <div class="book-price">${product.price} €</div> <!--Price-->
                            </div>
                            <ul id="results" class="results"></ul>
                        </div>
                </div>
            </div>
            </div>
            `;
      shopContent.append(content);
    });
    noResults.style.display = "none";
  }
};

const handleSearch = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) => product.productName.toLowerCase().startsWith(searchTerm));

  displayProducts(filteredProducts);
};

displayProducts(products);

searchInput.addEventListener("input", handleSearch);