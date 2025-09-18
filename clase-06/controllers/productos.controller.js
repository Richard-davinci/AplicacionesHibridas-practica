import * as service from "../services/productos.services.js";
import * as views from "../views/productos.views.js";

export function getProductos(req, res) {
  service.getProductos().then((productos) => {
    res.send(views.createProductosListPage(productos));
  });
}

export function getProductoById(req, res) {
  const id = req.params.id;
  service.getProductoById(id).then((producto) => {
    if (producto) {
      res.send(views.createDetailPage(producto));
    } else {
      res.send(views.errorPage());
    }
  });
}

export function formularioNuevoProducto(req, res){
  res.send( views.formularioNuevoProducto() )
}

export function guardarProducto(req, res){
  const producto = {
    marca: req.body.marca,
    modelo: req.body.modelo,
    precio: req.body.precio
  }
  service.guardarProducto(producto)
    .then( productoGuardado => res.send( views.createDetailPage(productoGuardado) ) )
}