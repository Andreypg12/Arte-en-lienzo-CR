$(document).ready(function () {

  fetch("../json/imagenesCarousel.json")
    .then(response => response.json())
    .then(data => {
      let html = "";

      data.forEach((item, index) => {
        html += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <img src="${item.imagen}" class="d-block w-100 carousel-img" alt="${item.nombre}">
          <div class="carousel-caption">
            <button class="btn carousel-Boton text-light p-2 p-md-3 fs-6 fs-md-5">${item.nombre}</button>
          </div>
        </div>
      `;
      });

      $("#carousel-container").html(html);
    });
});