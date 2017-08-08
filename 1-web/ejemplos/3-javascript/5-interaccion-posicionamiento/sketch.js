function setup() {
  noCanvas();
      //cuando el mouse sale del elemento con id "galaxy", haz lo que esta adentro de los {}
    select("#galaxy").mouseOver( function() {

      //cambiar el css para poner el elemento en la posicion 2, 100
      select("#galaxy").style('left', '2px');
      select("#galaxy").style('top', '100px');

      //cambiar el css para poner el elemento en una posicion aleatorio
      // select("#galaxy").style('left', random(1000)+ 'px');
      // select("#galaxy").style('top', random(600) + 'px');

    });
}
