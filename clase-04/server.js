import express from "express"
import {readFile} from "fs"

const app = express()
app.use(express.urlencoded({extended: true})) //middenware
app.use(express.json()) //mandar json

//importa el orden de los archivos estaticos
app.use("/home",express.static("public"))

//importa el orden de los archivos
app.get('/home', (req, res) => {
    readFile("public/index.html", (err, data) => {
        if (err) console.error("No se encontro el archivo")
        res.write(data)
        res.end()
    })
})

//mandar parametros por url
app.get('/:nombre', (req, res) => {
    console.log("Hola params", req.params)
    res.send("Hola!");
});
// mandar parametros por query
/*app.get('/', (req, res) => {
  console.log("Hola", req.query)
  res.send("Hola sr " + req.query.nombre);
});*/
//mandar formulario por post body
app.post('/', (req, res) => {
    console.log("Hola", req.body)
    res.send("Hola");
})


app.listen(2025, () => {
    console.log('Servidor corriendo en el puerto 2025');
});