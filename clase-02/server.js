const http = require("http")

const productos = [
    {id: 1, nombre: "Café Expreso", precio: 200},
    {id: 2, nombre: "Café Americano", precio: 250},
    {id: 3, nombre: "Café Cortado", precio: 200},
    {id: 4, nombre: "Café Doble", precio: 250},
    {id: 5, nombre: "Café Lagrima", precio: 200}
];

const server = http.createServer(function (request, response) {
    response.write(`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
  <body>`);

    console.log("Route que me envio el cliente: ", request.url)
    response.write("<h1>Mi espectacular pagina web!</h1>")
    switch (request.url) {
        case "/":
            response.write("Ricardo Garcia")
            break
        case "/materia":
            response.write("Aplicaciones Hibridas")
            break
        case "/profesor":
            response.write("Victor Villafañe")
            break
        case "/productos":
            response.write("<table>")
            response.write("<tr><th>ID</th><th>Nombre</th><th>Precio</th></tr>")
            productos.forEach(producto => {
                response.write(`<tr><td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.precio}</td></tr>`)
            })
            response.write("</table>")
            break
        default:
            response.write("No se encontro la ruta")
            break
    }

    response.end(`
            </body>
        </html>
    `);
})

server.listen(2025, () => {
    console.log("servidor corriendo")
})