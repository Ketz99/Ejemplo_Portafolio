const persona = {
    nombre: "Julian",
    apellido: "Gomez",
    edad: 30,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}

const frutas = ["Manzana", "Banana", "Cereza"];

persona.saludar();
console.log("Frutas disponibles:", frutas);
frutas.forEach(fruta => console.log(fruta));

//Método map
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobles = numeros.map(num => num * 2);
console.log("Números dobles:", dobles);

//Método filter
const mayoresDeCinco = numeros.filter(num => num > 5);
console.log("Números mayores de cinco:", mayoresDeCinco);

//Método reduce
const precios = [100, 200, 300, 400, 500];
const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);
console.log("Total de precios:", total);

//ejemplo avanzado con map, filter, reduce y objetos
const productos = [
    { nombre: "Laptop", precio: 1000, enStock: true },
    { nombre: "Mouse", precio: 50, enStock: true },
    { nombre: "Teclado", precio: 80, enStock: false },
    { nombre: "Monitor", precio: 300, enStock: true },
    { nombre: "Impresora", precio: 150, enStock: false }

];

//Filtrar los productos que están en stock
const productosEnStock = productos.filter(producto => producto.enStock);
console.log("Productos en stock:", productosEnStock);

//Calcular el precio total de los productos en stock
const preciosEnStock = productosEnStock.map(productos => productos.precio);
console.log("Precios de productos en stock:", preciosEnStock);

//Calcular el total de precios en stock
const totalEnStock = preciosEnStock.reduce((acumulador, precio) => acumulador + precio, 0);
console.log("Total de precios en stock:", totalEnStock);



//promesas fetch .then y .catch
const url = "https://web.dragonball-api.com/api/character";

// Función para obtener los personajes usando Promesas
function obtenerPersonajes() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la respuesta");
            }
            return response.json();
        })
        .then(data => {
            console.log("Personajes obtenidos:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Llamamos a la función
obtenerPersonajes();
