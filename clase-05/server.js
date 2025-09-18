import express from "express"
import { readFile } from "node:fs/promises"
import { createPage } from "./pages/utils.js"
const app = express()

app.get("/", async (req, res) => {
  readFile("./data/productos.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => [])
    .then((productos) => {
      let html = "<ul>"
      productos.forEach((producto) => {
        html += `<li>${producto.modelo} <a href="${producto.id}">Ver</a></li>`;
      });
      html += "</ul>"
      res.send(createPage("Listado de productos", html));
    });
});
//lista de detalles
app.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  readFile("./data/productos.json", "utf-8")
    .then((data) => JSON.parse(data))
    .catch((err) => [])
    .then((productos) => {
      let producto
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
          producto = productos[i]
        }
      }
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
      }else {
          html += "<h2>Producto no encontrado</h2>"
          html += "<a href='/'>Volver</a>"
          res.send(createPage("404", html))

      }
    })
})

app.listen(2025, () => console.log("funcionando"));
