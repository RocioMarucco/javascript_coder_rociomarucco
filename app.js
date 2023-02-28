let carrito = []

const contenedorProductos = document.getElementById('contenedor-productos')
const numerito = document.getElementById ('numerito')

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
        agregarAlCarrito (producto.id)
    })
})

const agregarAlCarrito = (productoId) => {
        const item = stockProductos.find ((producto) => producto.id === productoId)
        if (carrito.some (producto => producto.id === productoId)) {
            const index = carrito.findIndex (producto => producto.id === productoId)
            carrito[index].cantidad++
        }else {
            item.cantidad = 1
            carrito.push (item)
        }
        
        console.log (carrito)
        actualizarNumerito ()
        localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
}

function actualizarNumerito() {
    let nuevoNumerito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}