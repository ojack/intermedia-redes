var socket; //variable para la conexión al servidor por websockets


function setup() {
//crear el lienzo
  createCanvas(1000, 800);
  noStroke()

   //definir el color de fondo
  background(random (0, 255), random (0, 255), random (0, 255))


 // iniciar conexión con el servidor de websockets
  //socket = io.connect(window.location.origin);
  socket = io.connect("https://sockets.glitch.me/");

  // cuando recibimos datos de las otras personas conectadas
  socket.on('keyPressed', function (){
    background(random (0, 255), random (0, 255), random (0, 255))
  })

}

function draw() {
 //seleccionar el color
  fill(255, 0, 200, 40)

  //dibujar un rectangulo
  rect(mouseX, mouseY, 80, 80);
}

function keyPressed () {
    socket.emit('keyPressed', key)
}
