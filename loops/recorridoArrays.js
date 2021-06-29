var articulos = [
    {nombre: "Tv", costo: 3500},
    {nombre: "Celular", costo: 800},
    {nombre: "LapTop", costo: 5000},
    {nombre: "Reloj", costo: 70}
]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo < 2000;
});

console.log(articulosFiltrados);

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

console.log(nombreArticulos);

//Devuelve la primera coincidencia
var findArticulos = articulos.find(function(articulo){
    return articulo.nombre === "Celular";
});

console.log(findArticulos);

//No crea un nuevo vector sino recorre el mismo vector
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Hace una validacion de True or False
var articuloBaratos = articulos.some(function(articulo){
    return articulo.costo <= 800
});

console.log(articuloBaratos);