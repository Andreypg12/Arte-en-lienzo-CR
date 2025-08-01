fetch("../json/galeriaImagenes.json")
    .then(response => response.json())
    .then(data => {

        let html = "";

        data.forEach(item => {
            html += `

        <div class="card categoria" data-categoria="${item.nombre}">
          <img src="${item.imagen}" alt="${item.nombre}">
          <p>${item.nombre}</p>
        </div>

        `;
        });

        $("#containerPrincipalGaleriaImagenes").html(html);

    })
    .then(() => {
        $(document).on("click", ".categoria", function () {
            const categoriaSeleccionada = $(this).data("categoria");

            fetch("../json/galeriaImagenesProductos.json")
                .then(response => response.json())
                .then(data => {
                    const imagenesFiltradas = data.filter(item => item.categoria === categoriaSeleccionada);

                    let html = "";
                    imagenesFiltradas.forEach(item => {
                        html += `

                        <div class="card">
                            <img src="${item.imagen}"">
                            <p class="precio" data-colones="${item.precio}" >₡${item.precio}</p>
                        </div>
                        
                        `;
                    });

                    $("#containerProductosGaleriaImagenes").html(html);
                });
        });
    })
    .catch(error => {
        console.error("Error al cargar la galería principal:", error);
    }); 