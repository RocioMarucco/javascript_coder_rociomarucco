//El sitio es de un campo de lavanda que tiene venta de productos
//Creo una clase para crear objetos Producto
class Producto {
    nombre;
    presentacion;
    precio;
    stock;

    constructor (nombre, presentacion, precio, stock) {
        this.nombre = nombre
        this.presentacion = presentacion
        this.precio = precio
        this.stock = stock

    }

    calcularPrecioFinal = function () {
        return this.precio*1.21
    }

    vender = function () {
        this.stock -=1
        alert ("Quedan en stock "+ this.stock +" unidades de "+ this.nombre + " " + this.presentacion)
    }
}

const aceiteEsencialCien = new Producto ("Aceite Esencial", "100 ml", 1000, 30)
const velaAromaticaChica = new Producto ("Vela Aromática", "Chica", 700, 5)
const velaAromaticaGrande = new Producto ("Vela Aromática", "Grande", 1500, 10)
const aguaMicelar = new Producto ("Agua Micelar", "200 ml", 1800, 6)
const ramoFloresChico = new Producto ("Ramo de Flores Secas", "Chico", 400, 20)
const ramoFloresGrande = new Producto ("Ramo de Flores Secas", "Grande", 700, 5)


const carrito = []

// Menú
let productoElegido = parseInt (prompt ("BIENVENIDO A NUESTRA TIENDA ONLINE \n Ingrese el número de producto que desea adquirir \n1 - Aceite Esencial \n2 - Vela Aromática Chica \n3 - Vela Aromática Grande \n4 - Agua Micelar \n5 - Ramo de Flores Secas Chico \n6 - Ramo de Flores Secas Grande \n7 - Finalizar compra / Salir de la tienda"))

do {
    switch (productoElegido){
        case 1:
                carrito.push (aceiteEsencialCien)
                alert ("Haz agregado Aceite Esencial al carrito")
                aceiteEsencialCien.vender()
                break
        case 2:
                carrito.push (velaAromaticaChica)
                alert ("Haz agregado Vela Aromática Chica al carrito")
                velaAromaticaChica.vender()
                break
        case 3:
                carrito.push (velaAromaticaGrande)
                alert ("Haz agregado Vela Aromática Grande al carrito")
                velaAromaticaGrande.vender()
                break
        case 4:
                carrito.push (aguaMicelar)
                alert ("Haz agregado Agua Micelar al carrito")
                aguaMicelar.vender()
                break
        case 5:
                carrito.push (ramoFloresChico)
                alert ("Haz agregado Ramo de Flores Secas Chico al carrito")
                ramoFloresChico.vender()
                break
        case 6:
                carrito.push (ramoFloresGrande)
                alert ("Haz agregado Ramo de Flores Secas Grande al carrito")
                ramoFloresGrande.vender()
                break
        default:
                alert ("La opción ingresada no es correcta")
    }
    
    productoElegido = parseInt (prompt ("BIENVENIDO A NUESTRA TIENDA ONLINE \n Ingrese el número de producto que desea adquirir \n1 - Aceite Esencial \n2 - Vela Aromática Chica \n3 - Vela Aromática Grande \n4 - Agua Micelar \n5 - Ramo de Flores Secas Chico \n6 - Ramo de Flores Secas Grande \n7 - Finalizar compra / Salir de la tienda"))
} while (productoElegido !=7) {

    alert ("Gracias por visitar nuestra tienda. Esperamos que vuelvas pronto!")
}

//Muestro por consola el carrito
carrito.forEach ( (Producto) => {
    console.log ("En tu carrito: \n Producto: " + Producto.nombre +"\n"+" Presentación: "+ Producto.presentacion +"\n"+ " Precio $ "+ Producto.precio)

})

//Muestro por consola el precio con Iva del carrito
const precioTotal = carrito.reduce ((acumulador, Producto) => acumulador + Producto.calcularPrecioFinal(), 0)
console.log ("El precio total con IVA de tu carrito es: $" + precioTotal)