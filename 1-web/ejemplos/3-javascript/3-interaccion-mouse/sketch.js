function setup() {
  noCanvas();

  //cuando el mouse esta oprimido en el elemento con id "galaxy", haz lo que esta adentro de los {}

    select("#galaxy").mousePressed( function() {

      //agrega texto al elemento con id "galaxy"
      select("#galaxy").html(" mas texto ....  ", true);

      //cambiar el css del elemento con id "galaxy"
    //  select("#galaxy").style('color', '#F00');

      //cambiar el css del elemento con id "mi-titulo"
      //select("#mi-titulo").style('font-size', '100px');

    });

}
