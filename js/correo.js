document.addEventListener("DOMContentLoaded", function () {


  const form = document.getElementById("form");
  const btn = document.getElementById("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita recarga porque sino no se envía el mensaje

    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_xhqmv1r";

    emailjs.sendForm(serviceID, templateID, form).then(() => {

        btn.value = "Enviar";
        alert("Mensaje enviado correctamente!");
        form.reset();

      },
        (err) => {
          btn.value = "Enviar";
          alert("Error al enviar el mensaje:\n" + JSON.stringify(err));

        });

  });


});
