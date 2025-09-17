import express from "express";
import {readFile} from "node:fs/promises";

const app = express();

app.get("/", async (req, res) => {
    readFile("data/productos.json", "utf-8")
        .then(data => JSON.parse(data))
        .catch(err => [])
        .then((productos) => {
            let html = "<ul>"
            productos.forEach(producto => {
                html += `<li>${producto.modelo}</li>`
            })
            html += "</ul>"
            res.send(html)
        }
)
})

app.listen(2025, () => console.log("funcionando"));
