let stockProductos = [
    {id: 1, nombre: "Aceite Esencial", cantidad: 30, precio: 1000, presentacion: "100 ml", img: './imagenes/aceiteLavanda.jpg'},
    {id: 2, nombre: "Vela Aromática", cantidad: 5, precio: 700, presentacion: "Chica", img: './imagenes/velaAromatica.jpg'},
    {id: 3, nombre: "Vela Aromática", cantidad: 10, precio: 1500, presentacion: "Grande", img: './imagenes/velaAromatica.jpg'},
    {id: 4, nombre: "Agua Micelar", cantidad: 6, precio: 1800, presentacion: "200 ml", img: './imagenes/aguaMicelar.jpg'},
    {id: 5, nombre: "Ramo de Flores Secas", cantidad: 20, precio: 400, presentacion: "Chica", img: './imagenes/ramoDeFloresSecas.jpg'},
    {id: 6, nombre: "Ramo de Flores Secas", cantidad: 5, precio: 700, presentacion: "Grande", img: './imagenes/ramoDeFloresSecas.jpg'},]


guardarLocal("stockProductos", JSON.stringify(stockProductos))

