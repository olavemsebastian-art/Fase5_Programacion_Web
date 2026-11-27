document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const enlacePrincipal = dropdown.querySelector("a");

        // Cuando el enlace principal recibe foco con el teclado (Tecla Tab)
        enlacePrincipal.addEventListener("focus", () => {
            dropdown.classList.add("teclado-activo");
        });

        // Cuando el foco sale de todo el bloque del submenú
        dropdown.addEventListener("focusout", (event) => {
            // event.relatedTarget detecta hacia dónde se fue el foco
            if (!dropdown.contains(event.relatedTarget)) {
                dropdown.classList.remove("teclado-activo");
            }
        });
    });
});