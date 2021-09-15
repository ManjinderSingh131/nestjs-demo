let url = `http://localhost:3000/products`;
let cardContainer = document.querySelector('.product-id-list');

async function listProductNameWithID() {
  let response = await fetch(url);
  let data = await response.json();
  let details = '';
  for (let product of data) {
    details += `
  <span>📌 Title: ${product.title}</span>
  <span>🆔 ID: ${product.id}</span>
  <br>
    `;
  }

  cardContainer.innerHTML = details;
}
listProductNameWithID();

var form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var prodid = document.getElementById('prodid').value;
  console.log('prodid ' + prodid);
  if (!prodid) {
    M.toast({ html: 'Please provide an input' });
  }
  let url = `http://localhost:3000/products/${prodid}`;
  fetch(url, {
    method: 'DELETE',
  })
    .then(function(response) {
      if (response.status == 200) {
        M.toast({ html: 'Product deleted successfully with id 🆔 ' + prodid });
      } else {
        M.toast({ html: 'Product with id 🆔 ' + prodid + ' does not exist!' });
      }
    })
    .then(function(data) {});
});
