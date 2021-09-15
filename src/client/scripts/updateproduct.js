var form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var prodid = document.getElementById('prodid').value;
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var price = document.getElementById('price').value;
  let url = `http://localhost:3000/products/${prodid}`;
  var updatedProduct;
  if (!title && !description && !price) {
    M.toast({
      html: 'Please enter some input!',
    });
  } else if (title && description && price) {
    updatedProduct = {
      title,
      description,
      price,
    };
  } else if (!title && description && price) {
    updatedProduct = {
      description,
      price,
    };
  } else if (!title && !description && price) {
    updatedProduct = {
      price,
    };
  } else if (title && !description && !price) {
    updatedProduct = { title };
  } else if (!title && description && !price) {
    updatedProduct = { description };
  }

  if (updatedProduct) {
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(updatedProduct),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function(response) {
        if (response.status == 200) {
          M.toast({
            html: 'Product updated successfully with id 🆔 ' + prodid,
          });
        } else {
          M.toast({
            html: 'Product with id 🆔 ' + prodid + ' does not exist!',
          });
        }
      })
      .then(function(data) {});
  }
});
