import express from "express"
import {readFile} from "node:fs/promises"
import {createPage} from "./pages/utils.js"

const app = express()

async function getProductos() {
  return readFile("./data/productos.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => [])
}

function createProductosListPage(productos) {
  let html = "<ul>"
  productos.forEach((producto) => {
    html += `<li>${producto.modelo} <a href="${producto.id}">Ver</a></li>`;
  });
  html += "</ul>"
  return html
}

async function getProductoById(id) {
  return getProductos()
    .then((productos) => {
      let producto
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
          producto = productos[i]
        }
      }
      return producto
    })
}

app.get("/", async (req, res) => {
  getProductos()
    .then((productos) => {
      res.send(createPage("Listado de productos", createProductosListPage(productos)));
    });
});
//lista de detalles
app.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  getProductoById(id)
    .then(producto => {
      let html = ""
      if (producto) {
        html += "<ul>"
        html += `<li>Marca: ${producto.marca}</li>`
        html += `<li>Modelo: ${producto.modelo}</li>`
        html += `<li>Precio: ${producto.precio}</li>`
        html += "</ul>"
        html += "<a href='/'>Volver</a>"
        html += "</ul>"
        res.send(createPage("Detalles del producto", html))
      } else {
        html += "<h2>Producto no encontrado</h2>"
        html += "<a href='/'>Volver</a>"
        res.send(createPage("404", html))

      }
    })
})
app.listen(2025, () => console.log("funcionando"));
