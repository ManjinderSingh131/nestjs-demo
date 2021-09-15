const findProduct = document.querySelector('#prod-find-input');
findProduct.addEventListener('input', () => {
  let name = findProduct.value.toUpperCase();
  let matchingTitles = document.getElementsByClassName('prod-title');
  let div = document.getElementsByClassName('card');

  for (i = 0; i < matchingTitles.length; i++) {
    if (matchingTitles[i].innerText.toUpperCase().includes(name)) {
      div[i].style.display = '';
    } else {
      div[i].style.display = 'none';
    }
  }
});
