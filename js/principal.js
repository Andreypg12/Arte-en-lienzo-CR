$(document).ready(
    // ================= generador del Nav Bar =================
    function () {


        document.querySelectorAll('[name="navbar"]').forEach((element) => {
            element.innerHTML = `
            <div class="container-fluid">
                <button class="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                    <div class="navbar-nav">
                        <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-4">
                            <a href="index.html" class="nav-item nav-link texto-cuerpo">Home</a>
                            <a href="acercaDe.html" class="nav-item nav-link texto-cuerpo">Acerca de..</a>

                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle texto-cuerpo" data-bs-toggle="dropdown">Más
                                    Info</a>
                                <div class="dropdown-menu bg-light m-0">
                                    <a href="galeriaImagenes.html" class="dropdown-item textoDropdown">Galería Arte</a>
                                    <a href="autores.html" class="dropdown-item textoDropdown">Autores</a> 
                                    <a href="#" id="btnPoliticas" class="dropdown-item textoDropdown">Políticas de la empresa</a>
                                </div>
                            </div>

                            <a href="Contacto.html" class="nav-item nav-link texto-cuerpo">Contacto</a>
                        </div>
                    </div>
                </div>
                <!-- Modal (cuadro de texto) -->
                <div id="modalPoliticas" class="modal">
                    <div class="modal-content">
                        <h2>Políticas de la empresa</h2>
                        <p>
                            La agenda siempre se manejará por quincena y con pocos cupos en agenda, debido a mis otros
                            trabajos.
                            Te recomiendo agendar con tiempo, recuerda que los retratos llevarán días para poder terminarlo
                            y dar un resultado hermoso.
                        </p>
                        <ul>
                            <li>Todos los pedidos se consideran confirmados una vez realizado el adelanto correspondiente
                                del 50% del valor del pedido.</li>
                            <li>Una vez confirmados, hay un plazo de 24 horas para cambios en el pedido.</li>
                            <li>No se realizan devoluciones de dinero una vez se realice el pedido, salvo por error
                                incurrido de Arte en Lienzo, en este caso, Arte en Lienzo cuenta con un mes hábil para el
                                reintegro del dinero.</li>
                            <li>Tiempo estimado de producción es de 2 - 4 semanas desde la confirmación del pedido.</li>
                            <li>Se le hará saber al cliente una fecha tentativa de envío.</li>
                            <li>En caso de presentarse un atraso por algún inconveniente de Arte en Lienzo, se le hará saber
                                al cliente, NO se realiza la devolución del pedido por la razón antes descrita, por lo que
                                se enviará el pedido tan pronto se encuentre listo. Si por este retraso el cliente ya no
                                desea continuar con el pedido, no se realizará reembolso.</li>
                            <li>Solamente se procede a entregar y a enviar una vez cancelado la totalidad del pedido más el
                                costo del envío.</li>
                            <li>Los envíos serán realizados por medio de Correos Costa Rica y por medio de Uber Flash, Arte
                                en Lienzo CR no se responsabiliza por enviar paquetes a direcciones mal proporcionadas por
                                el cliente, para lo cual, el cliente debe asegurarse de enviar la ubicación o dirección
                                correcta.</li>
                            <li>No se realizan desembolsos o devoluciones de adelanto si el pedido se encuentra terminado.
                            </li>
                            <li>En caso de que el cliente incurra al error de encargar un estuche con un modelo de celular
                                erróneo, este deberá cancelar el monto de 5000 colones para poder solicitar de nuevo el
                                modelo correcto para la funda de celular.</li>
                            <li>En caso de que el cliente indique un tamaño erróneo del lienzo, se cobrará el pedido según
                                el tamaño realizado.</li>
                            <li>El cliente que realice un pedido de retratos de personas o mascotas acepta que Arte en
                                Lienzo CR pueda subir a redes sociales el resultado del retrato. De no ser así, el cliente
                                debe indicar que no quiere que se suba el retrato a redes sociales.</li>
                            <li>No se aceptan reclamos después de 24 horas de la entrega del producto.</li>
                            <li>Todo pago se realiza por medio de transferencia bancaria, SINPE MÓVIL o PayPal.</li>
                            <li>Los daños producidos por el descuido de las instituciones de envío, deberán ser reportadas
                                de inmediato para solucionar el problema con estas instituciones. Arte en Lienzo no
                                responderá ni realizará devoluciones por descuidos por parte de Correos Costa Rica o Uber
                                Flash. Siempre existe la opción del retiro personal en San Rafael de Alajuela.</li>
                            <li>La persona encargada del retiro personal deberá cancelar el pedido antes de retirarlo.</li>
                        </ul>
                        <div class="modal-footer">
                            <button id="btnCerrarModal" class="btn-close-modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            `;

            // Todo lo que accede al DOM debe ir aquí dentro ↓↓↓
            const modal = element.querySelector("#modalPoliticas");
            const btn = element.querySelector("#btnPoliticas");
            const btnCerrar = element.querySelector("#btnCerrarModal");

            // Podrías tener una X con clase close, si no existe, ignóralo
            const spanClose = element.querySelector(".close");

            modal.style.display = "none";

            // Abrir modal
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                modal.style.display = "flex"; // o 'block' si estás usando estilos básicos
            });

            // Cerrar con botón
            btnCerrar.addEventListener("click", () => {
                modal.style.display = "none";
            });

            // Cerrar con la X si existe
            if (spanClose) {
                spanClose.addEventListener("click", () => {
                    modal.style.display = "none";
                });
            }

            // Cerrar haciendo clic fuera del contenido
            window.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        });

        // ================= generador del Nav Bar =================

        // ================= Cambio y marcado de pagina =================
        // 1. Detectar URL actual y marcar el enlace activo individual
        $(".navbar-nav .nav-link").each(function () {
            if (this.href === window.location.href) {
                $(this).addClass("active");
            }
        });

        // 2. Al hacer clic, cambiar clase active
        $(".navbar-nav .nav-link").on("click", function () {
            $(".navbar-nav .nav-link").removeClass("active");
            $(this).addClass("active");
        });

        // 3. Marcar dropdown activo si estamos en galeriaImagenes.html o autores.html
        const currentPage = window.location.pathname.split("/").pop();

        if (
            currentPage === "galeriaImagenes.html" ||
            currentPage === "autores.html"
        ) {
            $(".navbar-nav .nav-link").removeClass("active");
            $(".nav-item.dropdown > .nav-link.dropdown-toggle").addClass("active");
        }
        // ================= Cambio y marcado de pagina =================

        // ================= Llamado al api =================



        fetch("https://andreypg12.github.io/Api_imagenes_arte_en_lienzo/json/apiImagenes.json")
            .then((response) => response.json())
            .then((data) => {
                ponerImagenesIndividuales(data.imagenes);

                ponerImagenesCarouselPrincipal(data.imagenesCarouselPrincipal);

                ponerImagenesGaleriaPrincipal(data.galeriaImagenes);

                ponerImagenesCarouselGaleriaImagenes(
                    data.imagenesCarouselGaleriaImagenes
                );

                ponerImagenesCartasIndex(data.imagenesCartasIndex);

                // ================= Galeria de imagenes de los productos =================

                $(document).on("click", ".categoria", function () {
                    const categoriaSeleccionada = $(this).data("categoria");

                    const imagenesFiltradas = data.galeriaImagenesProductos.filter(
                        (item) => item.categoria === categoriaSeleccionada
                    );

                    $("#titulo-relacionados").fadeIn();

                    let htmlProductos = "";
                    imagenesFiltradas.forEach((item) => {
                        htmlProductos += `
                        <div class="card">
                            <img src="${item.imagen}">
                            <p class="precio" data-colones="${item.precio}">₡${item.precio}</p>
                        </div>
                        `;
                    });

                    $("#containerProductosGaleriaImagenes").html(htmlProductos).show();

                    // Desplaza la pantalla suavemente hacia el contenedor
                    const containerOffset = $("#titulo-relacionados").offset().top;
                    $("html, body").animate({ scrollTop: containerOffset, }, 500); // 500 milisegundos para una transición suave


                });


                $(document).on("dblclick", ".categoria", function () {
                    location.reload();
                });

                // ================= Galeria de imagenes de los productos =================
            })
            .catch((error) => {
                console.error("Error al cargar JSON:", error);
            });

        // ================= Llamado al api =================

        function ponerImagenesIndividuales(data) {
            // ================= Imagen del banner =================

            const banner = data.find((item) => item.nombre === "Banner");

            if (banner) {
                document.querySelectorAll('[name="banner"]').forEach((element) => {
                    element.innerHTML = `<img src="${banner.imagen}" alt="${banner.descripcion}" />`;
                });
            }

            // ================= Imagen del banner =================

            // ================= Seccion de los tamaños de los cuadros en la galeria de imagenes =================

            const medidas = data.find((item) => item.nombre === "Medidas");

            ponerImagenSola(medidas, "#seccion-imagen", "");

            // ================= Seccion de los tamaños de los cuadros en la galeria de imagenes =================

            // ================= Cuadro de mascota en index =================

            const cuandroMascota = data.find(
                (item) => item.nombre === "CuadroMascotaindex"
            );

            ponerImagenSola(cuandroMascota, "#cuadroMascotaIndex", "circular-image");

            // ================= Cuadro de mascota en index =================

            // ================= Parte de imagenes de las dueñas de Arte y lienzo =================

            const Yoen = data.find((item) => item.nombre === "ImagenYoen");

            ponerImagenSola(Yoen, "#Yoen", "imagen-somos");

            const Yoen_Yoman = data.find(
                (item) => item.nombre === "ImagenYoen_Yoman"
            );

            ponerImagenSola(Yoen_Yoman, "#Yoen_Yoman", "imagen-somos");

            const Yoman = data.find((item) => item.nombre === "ImagenYoman");

            ponerImagenSola(Yoman, "#Yoman", "imagen-somos");

            // ================= Parte de imagenes de las dueñas de Arte y lienzo =================

            // ================= Parte de autores =================

            const Alejandro = data.find((item) => item.nombre === "ImagenAlejandro");

            ponerImagenSola(Alejandro, "#Alejandro", "");

            const Andrey = data.find((item) => item.nombre === "ImagenAndrey");

            ponerImagenSola(Andrey, "#Andrey", "");

            const Nana = data.find((item) => item.nombre === "ImagenNanaAcercaDe");

            ponerImagenSola(Nana, "#imagenNanaAcercaDe", "");


            const imagenFooter = data.find((item) => item.nombre === "ImagenFooter");
            $(".footer-curve").css("--footer-img", `url('${imagenFooter.imagen}')`);

            // ================= Parte de autores =================
        }

        function ponerImagenSola(item, contenedor, clases) {
            if (item) {
                let html = `<img src="${item.imagen}" alt="${item.descripcion}" class="${clases}">`;

                $(contenedor).html(html);
            }
        }

        // ================= Carousel de la página principal =================

        function ponerImagenesCarouselPrincipal(data) {
            let html = "";

            data.forEach((item, index) => {
                html += `
                        <div class="carousel-item ${index === 0 ? "active" : ""
                    }">
                        <img src="${item.imagen
                    }" class="d-block w-100 carousel-img" alt="${item.nombre
                    }">
                        </div>
                    `;
            });

            $("#carousel-container").html(html);
        }

        // ================= Carousel de la página principal =================

        // ================= Galeria principal =================

        function ponerImagenesGaleriaPrincipal(data) {
            let html = "";

            data.forEach((item) => {
                html += `
                        <div class="card categoria" data-categoria="${item.nombre}">
                        <img src="${item.imagen}" alt="${item.nombre}">
                        <p>${item.nombre}</p>
                        </div>
                    `;
            });

            $("#containerPrincipalGaleriaImagenes").html(html);
        }

        // ================= Galeria principal =================

        //================= Seccion del carrusel de la galeria de imagenes =================

        function ponerImagenesCarouselGaleriaImagenes(data) {
            let html = "";

            data.forEach((item, index) => {
                html += `
                        <div class="carousel-item ${index === 0 ? "active" : ""
                    }">
                        <img src="${item.imagen}" class="d-block w-100" alt="${item.nombre
                    }">
                        </div>

                    `;
            });

            $("#carousel-container-galeria").html(html);
        }

        //================= Seccion del carrusel de la galeria de imagenes =================

        //================= Seccion de las cartas en el index =================

        function ponerImagenesCartasIndex(data) {
            data.forEach((item) => {
                let html = `
                    <figure class="art-item ${item.clase}">
                        <img src="${item.imagen}" alt="${item.alt}">
                        <figcaption class="image-caption">
                            <p class="caption-text">${item.nombre}</p>
                            <p class="caption-subtext">${item.subTexto}</p>
                        </figcaption>
                    </figure>
                    `;

                switch (item.categoria) {
                    case "izquierda":
                        $("#izquierda").append(html);
                        break;

                    case "centro":
                        $("#centro").append(html);
                        break;

                    default:
                        $("#derecha").append(html);
                        break;
                }
            });
        }

        //================= Seccion de las cartas en el index =================

        // ================= Parte de los botones de la galeria de imagenes =================

        $("#btn-imagen").click(function () {
            $("#seccion-imagen").slideToggle();
        });

        $("#btn-carrusel").click(function () {
            $("#carousel-section").slideToggle();
        });

        // ================= Parte de los botones de la galeria de imagenes =================

        // ================= Calculo de edad en formulario =================

        $("#FechaNacimiento").on("change", function () {
            const fechaNacimiento = new Date($(this).val());
            const fechaActual = new Date();

            let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

            if (
                mes < 0 ||
                (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
            ) {
                edad--;
            }

            $("#edad").val(edad);
        });

        // ================= Calculo de edad en formulario =================

        const path = window.location.pathname.split("/").pop();

        const pages = {
            "acercaDe.html": "Acerca de...",
            "Contacto.html": "Contacto",
            "autores.html": "Autores",
            "galeriaImagenes.html": "Galería de imagenes"
        };

        let breadcrumb = `
            <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" style="font-weight: bolder" aria-current="page">
                ${pages[path] || "Página"}
            </li>
            </ol>
        `;

        $("#breadcrumb-container").html(breadcrumb);
    }
);
