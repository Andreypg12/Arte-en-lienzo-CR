// Elementos
const modal = document.getElementById('modalPoliticas');
const btn = document.getElementById('btnPoliticas');
const btnCerrar = document.getElementById('btnCerrarModal');
const spanClose = document.querySelector('.close');

// Forzar que el modal esté oculto al cargar
modal.style.display = 'none';



// Abrir modal
btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Cerrar con botón "Cerrar"
btnCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar con la X
spanClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar haciendo click fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
