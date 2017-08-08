
function setup() {
  noCanvas();

//seleccionar el elemento en el archivo html con id "galaxy"
  select("#galaxy");

  //reemplazar el contenido del elemento html con lo que está en parentesis
  select("#galaxy").html("texto creado con javascript");
}
