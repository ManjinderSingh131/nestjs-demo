let url = 'http://localhost:3000/products';
let cardContainer = document.querySelector('.cardContainer');

async function getAllCards() {
  // Get card using fetch api from our api endpoint
  const response = await fetch(url);
  const data = await response.json();

  let productSet = '';
  for (let product of data) {
    productSet += `
        <div class="col s12 m6 xl6">
        <div class="card blue darken-1 z-depth-2">
            <div class="card-content white-text">
              <span class="card-title grey-text text-darken-3">🆔 ${product.id}</span>

            <div class="prod-title">📌 Title: ${product.title}</div>
            <div class="prod-description">📃 Description: ${product.description}</div>
            <div class="prod-price">💵 Price: ${product.price}</div>
            </div>
          </div>
        </div>
      `;
  }
  cardContainer.innerHTML = productSet;
}
getAllCards();
