export function createPage(titulo, contenido) {
    let html = ""
    html += '<!doctype html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">'
    html += '<title>'+titulo+'</title>'
    html += `
    <style>     
      body {
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #2c3e50, #34495e);
        color: #fff;              
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
    </style>
  </head>
  <body>
  <h1>Mi espectacular pagina web!</h1>
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
