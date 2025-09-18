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
        .nav-link {
         border: 1px solid #ffff;
        }
        form {
            background: #ecf0f1;
            padding: 20px;
            margin: 20px auto;
            max-width: 400px;
            border: 1px solid #bdc3c7;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          
          form div {
            margin-bottom: 15px;
          }
          
          input[type="text"],
          input[type="number"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #bdc3c7;
            border-radius: 5px;
            font-size: 1em;
            box-sizing: border-box;
          }
          
          input[type="submit"] {
            width: 100%;      
             display: inline-block;         
            padding: 10px 20px;
            text-decoration: none;
            background: #2c3e50;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            transition: background 0.3s ease;          
          }
          
          input[type="submit"]:hover {
            background: #27ae60;
          }
    </style>`
  html += `<body>`
  html += '<a class="nav-link" href="/productos" >Inicio</a> | <a class="nav-link" href="/productos/nuevo" >Nuevo producto</a>'
  html += `<h1>${titulo}</h1>`
  html += contenido
  html += "</body></html>"
  return html;
}