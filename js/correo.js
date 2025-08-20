document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const btn = document.getElementById("button");

  // Recuperar los datos del local storage
  const datosGuardados = JSON.parse(localStorage.getItem("formData"));
  if (datosGuardados) {
    document.getElementById("email").value = datosGuardados.email || "";
    document.getElementById("nombre").value = datosGuardados.nombre || "";
    document.getElementById("FechaNacimiento").value = datosGuardados.fechaNacimiento || "";
    document.getElementById("edad").value = datosGuardados.edad || "";
    document.getElementById("ingreso").value = datosGuardados.ingreso || "";
    if (datosGuardados.genero) {
      const generoInput = document.querySelector(`input[name="genero"][value="${datosGuardados.genero}"]`);
      if (generoInput) generoInput.checked = true;
    }
    if (datosGuardados.grado) {
      const gradoSelect = document.getElementById("grado");
      Array.from(gradoSelect.options).forEach(opt => {
        opt.selected = datosGuardados.grado.includes(opt.value);
      });
    }


    document.getElementById("mensaje").value = "";
  }

  // Guardar datos y enviar email
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Calcular edad
    const fechaNacimiento = new Date(document.getElementById("FechaNacimiento").value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    document.getElementById("edad").value = edad;

    // Capturar valores
    const datos = {
      email: document.getElementById("email").value,
      nombre: document.getElementById("nombre").value,
      fechaNacimiento: document.getElementById("FechaNacimiento").value,
      edad: edad,
      ingreso: document.getElementById("ingreso").value,
      genero: document.querySelector('input[name="genero"]:checked')?.value,
      grado: Array.from(document.getElementById("grado").selectedOptions).map(opt => opt.value),
      mensaje: document.getElementById("mensaje").value
    };

    // Guardar en localStorage
    localStorage.setItem("formData", JSON.stringify(datos));
    console.log("Guardado en LocalStorage ✅", datos);

    // Enviar con EmailJS
    btn.value = "Enviando...";
    const serviceID = "default_service";
    const templateID = "template_xhqmv1r";

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.value = "Enviar";
        alert("Mensaje enviado correctamente!");
        document.getElementById("mensaje").value = ""; // limpiar solo mensaje
      })
      .catch((err) => {
        btn.value = "Enviar";
        alert("Error al enviar el mensaje:\n" + JSON.stringify(err));
      });
  });
});