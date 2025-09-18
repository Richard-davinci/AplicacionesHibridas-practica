export function createPage(titulo, contenido) {
    let html = ""
    html += '<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">'
    html += '<title>'+titulo+'</title>'
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

      table {
        border-collapse: collapse;
        width: 50%;
        margin: 20px auto;
        background: #34495e;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      }

      th,
      td {
        padding: 12px;
        border: 1px solid #2c3e50;
        text-align: center;
        color: #ecf0f1;
      }

      th {
        background: #f39c12;
        color: #2c3e50;
        font-weight: bold;
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

    </style>
  </head>
  <body>
  <h1>${titulo}</h1>
    `
    html += contenido
    html += '</body></html>'
    return html
}

export function createProductList(productos){
    let html = "<table>"
    html += "<tr><th>ID</th><th>Nombre</th><th>Precio</th></tr>"
    productos.forEach(cafe => {
        html += `<tr><td>${cafe.id}</td><td>${cafe.nombre}</td><td>${cafe.precio}</td></tr>`
    })
    html += "</table>"
    return html
}

/*
export {createPage, createProductList}*/
