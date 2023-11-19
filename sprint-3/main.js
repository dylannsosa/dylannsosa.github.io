// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    
    // Selecciona los elementos relevantes del DOM
    const form = document.querySelector('form[role="search"]');
    const input = form.querySelector('input[type="search"]');
    const items = document.querySelectorAll('.item');

    // Agrega un evento al formulario de búsqueda
    form.addEventListener('submit', function (event) {
        // Evita la recarga de la página al enviar el formulario
        event.preventDefault();

        // Obtiene el término de búsqueda, elimina espacios en blanco y convierte a minúsculas
        const searchTerm = input.value.trim().toLowerCase();

        // Itera sobre todos los elementos con la clase 'item'
        items.forEach(item => {
            // Obtiene el nombre del producto y lo convierte a minúsculas
            const productName = item.querySelector('h2').textContent.toLowerCase();
            
            // Verifica si el término de búsqueda está incluido en el nombre del producto
            const shouldShow = productName.includes(searchTerm);
            
            // Establece la visibilidad del elemento según la coincidencia con el término de búsqueda
            item.style.display = shouldShow ? 'block' : 'none';
        });
    });
});

