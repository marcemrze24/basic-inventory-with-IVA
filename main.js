//-------------------Inventario----------------//

//Necesitamos que se pidan los objetos (productos) por medio de inputs y vayan todos a un array:


//Creamos el objeto Producto//
class Producto {
   constructor(nombre, marca, precio, cantidad) {
      this.id = parseInt(id);
      this.nombre = nombre;
      this.marca = marca;
      this.precio = parseInt(precio);
      this.cantidad = parseInt(cantidad);
   }
}

//Inicializamos las variables donde iran los productos (un array) y otra donde estableceremos la cantidad de inputs de productos que hara el usuario
let listaProductos = [];
let cantidadDeInputs = 0;


//Funcion: define la cantidad de inputs.
function definirLosInputs() {
   do {
      cantidadDeInputs = parseInt(prompt("Cuantos productos distintos va a ingresar?: "))
   } while (isNaN(cantidadDeInputs) == true)
}

//Funcion: agrega la cantidad de objetos (Producto) igual a la cantidadDeInputs, al array.
function agregarProductos() {
   while(listaProductos.length != cantidadDeInputs) {
      id = listaProductos.length + 1;
      nombre = prompt("Ingrese el nombre del producto: ");
      marca = prompt("Ingrese la marca: ");
      precio = prompt("Ingrese el precio: ");
      cantidad = prompt("Ingrese la cantidad disponible: ");
      const producto = new Producto(nombre, marca, precio, cantidad);
      listaProductos.push(producto)
   }
}

definirLosInputs();
agregarProductos();


//En esta constante, podremos actualizar el precio de los productos en base al IVA (21%) y tener un nuevo array con estos productos actualizados
const listaProductosIva = listaProductos.map((el) => {
   return {
      id: el.id,
      nombre: el.nombre,
      marca: el.marca,
      precio: el.precio * 1.21,
      cantidad: el.cantidad,
   }
})

//En esta constante, podremos obtener la suma de cantidad de todos los productos existentes en el array
const sumaProductos = listaProductos.reduce((acc, el) => {
   return acc += el.cantidad
}, 0)


listaProductosIva.forEach((el) => {
   console.log(`ID: ${el.id} \n Nombre: ${el.nombre} \n Marca: ${el.marca} \n Precio: ${el.precio} \n Cantidad: ${el.cantidad} \n\n\n`)
});
console.log(`Total stock de productos: ${sumaProductos}`)




