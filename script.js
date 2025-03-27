function getCat() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;
      let img = document.getElementById('catImage');
      if (!img) {
        img = document.createElement('img');
        img.id = 'catImage';
        img.style.width = "300px";
        img.style.borderRadius = "10px";
        document.body.appendChild(img);
      }
      img.src = imageUrl;
    })
    .catch(error => console.log('Hata:', error));
}

window.onload = getCat;
