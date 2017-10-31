
//lista de archivos de imagenes de cabeza
var cabezaFiles = [
  "head0.jpeg",
  "head1.jpeg",
  "head2.jpeg",
  "head4.jpeg",
  "head6.jpg",
]
//lista de archivos de imagenes de piernas
var piernaFiles = [
  "leg1.jpg",
  "leg2.jpg",
  "leg3.jpeg",
  "leg4.jpg"
]

//arrays (listas) para guardar las imagenes
var cabezaImagenes = []
var piernaImagenes = []

function preload(){
  //iteramos por la lista de nombres de archivos de imagenes de cabezas
  for(var i = 0; i < cabezaFiles.length; i++){
    //por cada archivo, cargamos el archivo correspondiente en
    //la lista de imagenes
    cabezaImagenes[i] = loadImage("./imagenes/"+cabezaFiles[i])
  }

  //iteramos por la lista de nombres de archivos de imagenes de piernas
  for(var i = 0; i < piernaFiles.length; i++){
    //por cada archivo, cargamos el archivo correspondiente en
    //la lista de imagenes
    piernaImagenes[i] = loadImage("./imagenes/"+piernaFiles[i])
  }
}

function setup() {
//crear un lienzo con tamaño 1000px por 800px
  createCanvas(600, 800);
  image(cabezaImagenes[0], 0, 0, width, height/2)
  image(piernaImagenes[0], 0, height/2, width, height/2)
}

//cuando se oprimi el mouse
function mousePressed(){
  //escoge un numero aleatorio entre 0 y el numero de imagenes de cabeza
  var randCabeza = int(random(cabezaImagenes.length))
  //dibujar la imagen que corresponde
  image(cabezaImagenes[randCabeza], 0, 0, width, height/2)

  //escoge un numero aleatorio entre 0 y el numero de imagenes de piernas
  var randPierna = int(random(piernaImagenes.length))
  //dibujar la imagen que corresponde
  image(piernaImagenes[randPierna], 0, height/2, width, height/2)
}
