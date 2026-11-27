const traducciones = {
    es: {
        "titulo-principal": "Sabores de Colombia",
        "menu-inicio": "Inicio",
        "menu-platos": "Platos Típicos",
        "menu-regiones": "Regiones y Sabores",
        
        // Submenús
        "sub-bandeja": "Bandeja Paisa",
        "sub-ajiaco": "Ajiaco",
        "sub-sancocho": "Sancocho",
        "sub-andina": "Región Andina",
        "sub-caribe": "Región Caribe",
        "sub-pacifica": "Región Pacífica",
        "pie-pagina": "© 2026 Sabores de Colombia - Proyecto Académico",
        
        // Inicio
        "titulo-bienvenida": "Bienvenido a Sabores de Colombia",
        "descripcion": "Descubre la riqueza gastronómica de Colombia a través de sus platos típicos y de las regiones donde nacen sus sabores más representativos.",
        "boton-platos": "Conocer Platos Típicos",
        "btn-anterior": "Anterior",
        "btn-siguiente": "Siguiente",

        // Platos
        "titulo-platos": "Platos Típicos de Colombia",
        "descripcion-platos": "La gastronomía colombiana es reconocida por su diversidad de sabores, ingredientes y tradiciones culinarias. A continuación, se presentan algunos de los platos más representativos del país.",
        "titulo-bandeja": "Bandeja Paisa",
        "descripcion-bandeja": "Plato típico de Antioquia compuesto por arroz, fríjoles, carne molida, chicharrón, huevo frito, aguacate, arepa y chorizo.",
        "titulo-ajiaco": "Ajiaco",
        "descripcion-ajiaco": "Sopa tradicional de Bogotá preparada con pollo, diferentes tipos de papa, mazorca y guascas.",
        "titulo-sancocho": "Sancocho",
        "descripcion-sancocho": "Plato tradicional preparado con carne, pollo o pescado, acompañado de yuca, plátano, papa y mazorca.",

        // Regiones
        "titulo-regiones": "Regiones y Sabores de Colombia",
        "descripcion-regiones": "Colombia cuenta con una gran diversidad gastronómica. Cada región posee ingredientes, tradiciones y preparaciones que reflejan su identidad cultural.",
        "titulo-andina": "Región Andina",
        "descripcion-andina": "Se caracteriza por platos como la bandeja paisa, el ajiaco y diferentes preparaciones a base de maíz, papa y productos agrícolas de clima frío.",
        "titulo-caribe": "Región Caribe",
        "descripcion-caribe": "Destaca por el uso de pescados, mariscos, coco, yuca y preparaciones tradicionales como la arepa de huevo.",
        "titulo-pacifica": "Región Pacífica",
        "descripcion-pacifica": "Su gastronomía se caracteriza por los productos del mar, el plátano, el coco y recetas tradicionales de gran riqueza cultural."
    },
    en: {
        "titulo-principal": "Flavors of Colombia",
        "menu-inicio": "Home",
        "menu-platos": "Typical Dishes",
        "menu-regiones": "Regions and Flavors",
        
        // Submenús
        "sub-bandeja": "Bandeja Paisa",
        "sub-ajiaco": "Ajiaco",
        "sub-sancocho": "Sancocho",
        "sub-andina": "Andean Region",
        "sub-caribe": "Caribbean Region",
        "sub-pacifica": "Pacific Region",
        "pie-pagina": "© 2026 Flavors of Colombia - Academic Project",
        
        // Inicio
        "titulo-bienvenida": "Welcome to Flavors of Colombia",
        "descripcion": "Discover the gastronomic wealth of Colombia through its typical dishes and the regions where its most representative flavors are born.",
        "boton-platos": "Discover Typical Dishes",
        "btn-anterior": "Previous",
        "btn-siguiente": "Next",

        // Platos
        "titulo-platos": "Typical Dishes of Colombia",
        "descripcion-platos": "Colombian gastronomy is renowned for its diversity of flavors, ingredients, and culinary traditions. Below are some of the country's most representative dishes.",
        "titulo-bandeja": "Bandeja Paisa",
        "descripcion-bandeja": "Typical dish from Antioquia consisting of rice, beans, ground beef, pork rinds, fried egg, avocado, arepa, and chorizo.",
        "titulo-ajiaco": "Ajiaco",
        "descripcion-ajiaco": "Traditional soup from Bogotá made with chicken, different types of potatoes, corn on the cob, and guascas.",
        "titulo-sancocho": "Sancocho",
        "descripcion-sancocho": "Traditional dish prepared with meat, chicken, or fish, accompanied by cassava, plantain, potato, and corn on the cob.",

        // Regiones
        "titulo-regiones": "Regions and Flavors of Colombia",
        "descripcion-regiones": "Colombia has a great gastronomic diversity. Each region has ingredients, traditions, and preparations that reflect its cultural identity.",
        "titulo-andina": "Andean Region",
        "descripcion-andina": "It is characterized by dishes such as bandeja paisa, ajiaco, and different preparations based on corn, potatoes, and cold-climate agricultural products.",
        "titulo-caribe": "Caribbean Region",
        "descripcion-caribe": "It stands out for the use of fish, seafood, coconut, cassava, and traditional preparations such as the egg arepa.",
        "titulo-pacifica": "Pacific Region",
        "descripcion-pacifica": "Its gastronomy is characterized by seafood, plantains, coconuts, and traditional recipes of great cultural wealth."
    }
};

function cambiarIdioma(idioma) {
    document.documentElement.lang = idioma;
    for (const id in traducciones[idioma]) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.textContent = traducciones[idioma][id];
        }
    }
}