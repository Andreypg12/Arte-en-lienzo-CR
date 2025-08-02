$(document).ready(function () {

  fetch("../json/imagenes.json")
    .then(response => response.json())
    .then(data => {
      const banner = data.find(item => item.nombre === "Banner");
      if (banner) {
        document.querySelectorAll('[name="banner"]').forEach(element => {
          element.innerHTML = `<img src="${banner.imagen}" alt="${banner.descripcion}" />`;
        });
      }
    });

});