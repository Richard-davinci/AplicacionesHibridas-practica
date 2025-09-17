import express from "express";

const app = express()
app.use(express.urlencoded({ extended: true })) //middenware
app.use(express.json()) //postman

app.get('/', (req, res) => {
  console.log("Hola", req.query)
    res.send("Hola sr " + req.query.nombre);
});

app.post('/', (req, res) => {
  console.log("Hola", req.body)
  res.send("Hola" );
})

app.listen(2025, () => {
  console.log('Servidor corriendo en el puerto 2025');
});