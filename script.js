fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].url;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = "Random Cat";
    img.style.width = "300px";
    img.style.borderRadius = "10px";
    document.body.appendChild(img);
  })
  .catch(error => console.log('Hata:', error));
