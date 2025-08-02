$(document).ready(function () {

  fetch("../json/imagenesCarousel.json")
    .then(response => response.json())
    .then(data => {
      let html = "";

      data.forEach((item, index) => {
        html += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img src="${item.imagen}" class="d-block w-100 carousel-img" alt="${item.nombre}">
        </div>
      `;
      });

      $("#carousel-container").html(html);
    });
});