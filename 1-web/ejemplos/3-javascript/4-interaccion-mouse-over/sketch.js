function setup() {
  noCanvas();

  //cuando el mouse pasa encima del elemento con id "galaxy", haz lo que esta adentro de los {}
    select("#galaxy").mouseOver( function() {
      //cambia el texto del elemento con id "galaxy"
      select("#galaxy").html(" HOLA ");


    });


      //cuando el mouse sale del elemento con id "galaxy", haz lo que esta adentro de los {}
    select("#galaxy").mouseOut( function() {
        //cambia el texto del elemento con id "galaxy"
      select("#galaxy").html(" ADIOS ");

    });
}
