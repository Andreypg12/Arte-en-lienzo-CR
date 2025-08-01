let tasas = {};

$("#selectorMoneda").on("change", function () {
    const monedaSeleccionada = $(this).val();

    if (monedaSeleccionada === "CRC") {
        // Mostrar los precios originales en colones
        $(".precio").each(function () {
            const colones = parseFloat($(this).data("colones"));
            $(this).text(`₡${colones.toFixed(2)}`);
        });
    } else {
        // Si ya tengo la tasa guardada, la uso
        if (tasas[monedaSeleccionada]) {
            actualizarPrecios(tasas[monedaSeleccionada], monedaSeleccionada);
        } else {
            // Llamar a la API con base CRC
            $.get("https://v6.exchangerate-api.com/v6/df5f5677a49efc737d8e4a94/latest/CRC", function (data) {
                const tasa = data.conversion_rates[monedaSeleccionada];
                tasas[monedaSeleccionada] = tasa; // Guardar tasa
                actualizarPrecios(tasa, monedaSeleccionada);
            }).fail(function () {
                console.error("Error al obtener la tasa de cambio");
            });
        }
    }
});

// Función para actualizar todos los precios con la tasa
function actualizarPrecios(tasa, moneda) {
    const simbolo = moneda === "USD" ? "$" : "€";

    $(".precio").each(function () {
        const colones = parseFloat($(this).data("colones"));
        const convertido = colones * tasa;
        $(this).text(`${simbolo}${convertido.toFixed(2)} ${moneda}`);
    });
}
