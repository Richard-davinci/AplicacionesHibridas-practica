const http = require("http")

const cafes = require("./data/productos.js");
const pages = require( "./pages/utils.js" )

const server = http.createServer(function (request, response) {

    switch (request.url) {
        case "/":
            response.write(pages.createPage("home","Ricardo Garcia"))
            break
        case "/materia":
            response.write(pages.createPage("materia","Aplicaciones Hibridas"))
            break
        case "/profesor":
            response.write(pages.createPage("profesor","Victor Villafañe"))
            break
        case "/cafes":
         response.write(pages.createPage("Cafes", pages.createProductList(cafes)))
            break
        default:
            response.write(pages.createPage("404","No se encontro la ruta"))
            break
    }
    response.end()

})

server.listen(2025, () => {
    console.log("servidor corriendo")
})