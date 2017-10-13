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

  socket.on('mouse',
    function(data) {
      fill(0, 255, 100, 40)
      ellipse(data.mouseX, data.mouseY, 40,80);
    }
  );
}

function draw() {
 //seleccionar el color


  //background(255, 0, 255)

  fill(255, 0, 200, 40)
  //dibujar un rectangulo
  rect(mouseX, mouseY, 80, 80);

  //crear un objeto para enviar la informacion del mouse
  var objetoMensaje = {
    mouseX: mouseX,
    mouseY: mouseY
  };

  // enviar la informacion del mouse al servidor
  socket.emit('mouse', objetoMensaje);
}

function keyPressed () {
    socket.emit('keyPressed', key)
}
