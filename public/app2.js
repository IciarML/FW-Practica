const products = [
    {
      productName: "HARRY POTTER",
      price: 15,
      img: "/Photos/Imagen1.png",
    },
    {
      productName: "THE BELL JAR",
      price: 20,
      img: "/Photos/Image2.jpg",
    },
    {
      productName: "RETORNO DE LAS ESTRELLAS",
      price: 30,
      img: "/Photos/Image3.jpg",
    },
    {
      productName: "INVISIBLE",
      price: 40,
      img: "/Photos/Image4.jpg",
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
                                <div class="book-author">{{autor}}</div> <!--Author-->
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