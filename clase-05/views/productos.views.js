export function createPage(titulo, contenido) {
  let html = "";
  html +=
    '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
  html += "<title>" + titulo + "</title>";
  html += "</head>";
  html += `
    <style>     
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #2c3e50, #34495e);
          
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;      
        text-align: center;
      }

      h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
        color: #f39c12;
      }

      
      /* Estilo de la lista de detalles */
        ul {
            list-style: none;
            padding: 0;
            margin: 20px auto;
            max-width: 400px;
            border: 2px solid #2c3e50;
            border-radius: 5px;
            background: #FFFFFF;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        ul li {
            padding: 15px 20px;
            border-bottom: 1px solid #ccc;
        }
        
        ul li:last-child {
            border-bottom: none;
        }
        
        ul li strong {
            color: #2c3e50;
        }
        
        /* Botón de navegación */
        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            text-decoration: none;
            background: #2c3e50;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            transition: background 0.3s ease;
            margin: 0 20px;
        }
        
        a:hover {
            background: #34495e;
        }
        
        a:active {
            background: #1d3557;
            transform: scale(0.98);
        }
    </style>`
  html += `<body><h1>${titulo}</h1>`;
  html += contenido;
  html += "</body></html>";

  return html;
}

export function createProductosListPage(productos) {
  let html = "<ul>";
  productos.forEach((producto) => {
    html += `<li>${producto.modelo} <a href="/productos/${producto.id}">Ver</a></li>`;
  });
  html += "</ul>";

  return createPage("Productos", html);
}

export function createDetailPage(producto) {
  let html = "";
  html += "<ul>";
  html += `<li>Marca: ${producto.marca}</li>`;
  html += `<li>Modelo: ${producto.modelo}</li>`;
  html += `<li>Precio: ${producto.precio}</li>`;
  html += "</ul>";
  html += `<a href="/productos">Volver</a>`;
  return createPage(producto.modelo, html);
}

export function errorPage() {
  let html = "";
  html += "<h2>No se encontro el producto buscado</h2>";
  html += `<a href="/productos">Volver</a>`;
  return createPage("404", html);
}
