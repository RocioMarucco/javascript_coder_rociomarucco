let carrito = []

const contenedorProductos = document.getElementById('contenedor-productos')

stockProductos.forEach((producto) => {
    const div = document.createElement ('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} class= "imgTarjeta" alt="">
    <h3>${producto.nombre}</h3>
    <p> Presentación: ${producto.presentacion} </p>
    <p class="precioProducto">Precio: $ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">AGREGAR AL CARRITO</button>
    `

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener ('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (productoId) => {
    const item = stockProductos.find ((producto) => producto.id === productoId)
    carrito.push (item)
    console.log (carrito)
}

