fetch("../json/imagenes.json") // ajusta la ruta si es necesario
    .then(response => response.json())
    .then(data => {
        const banner = data.find(item => item.nombre === "Banner");
        if (banner) {
            document.getElementById("banner").innerHTML = `
          <img src="${banner.imagen}" alt="${banner.descripcion}" />
        `;
        }
    });