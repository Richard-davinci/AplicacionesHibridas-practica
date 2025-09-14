import http from "http"
import cafes from "./data/productos.js"
import {createPage, createProductList} from "./pages/utils.js"
import {readFile} from "fs"

const server = http.createServer(function (request, response) {


    switch (request.url) {
        case "/":
            response.write(createPage("home", "Ricardo Garcia"))
            break
        case "/materia":
            response.write(createPage("materia", "Aplicaciones Hibridas"))
            break
        case "/profesor":
            response.write(createPage("profesor", "Victor Villafañe"))
            break
        case "/cafes":
            response.write(createPage("Cafes", createProductList(cafes)))
            break
        case "/contacto.html":
            readFile("public/contacto.html", (err, data) => {
                if (err) console.error("No se encontro el archivo")
                response.write(data)
                response.end()

            })
            break
        case "/style.css":
            readFile("public/style.css", (err, data) => {
                if (err) console.error("No se encontro el archivo")
                response.write(data)
                response.end()

            })
            break
        default:
            response.write(createPage("404", "No se encontro la ruta"))
            break
    }

})

server.listen(2025, () => {
    console.log("servidor corriendo")
})