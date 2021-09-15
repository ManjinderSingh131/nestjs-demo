let url = 'http://localhost:3000/products';
var form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var title = document.getElementById('title').value;
  console.log(title);
  var description = document.getElementById('description').value;
  console.log(description);
  var price = document.getElementById('price').value;
  console.log(price);

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      description: description,
      price: price,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.id) {
        M.toast({ html: 'Product added successfully with id 🆔 ' + data.id });
      } else {
        M.toast({
          html:
            'Some internal error occured. Please check your inputs and try again.',
        });
      }
    });
});
