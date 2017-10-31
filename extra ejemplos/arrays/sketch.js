
// crea un 'array', o lista de elementos.
var palabras = ["hola", "risa", "banano", "elefante", "estas", "mar"]

function setup() {
  createCanvas(1000, 800) //crear un lienzo con tamaño 1000px por 800px

  background(255, 0, 80) //definir el color de fondo

  textSize(100)   //definir el tamaño de texto
  textAlign(CENTER)
// Se puede aceder cada elemento en el array usando su indice en la lista.
// Por ejemplo, palabraArray[0] corresponde al primer elemento en el array,
// palabraArray[1] corresponde al segundo.
  text(palabras[0], 500, 400) // "hola"
}


function mousePressed(){
  background(random(255), random(255), random(255)) //definir el color de fondo

  //escoge un indice aleatorio entre 0 y el numero de palabras
  var indicePalabra = int(random(0, palabras.length))

  //escribe la palabra
  text(palabras[indicePalabra], 500, 400)
}
