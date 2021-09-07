import Electrodomestico from "./Electrodomestico.js";
import Nevera  from "./Nevera.js";
import Tv from "./tv.js";

  //document.open();
 //let electrodomestico = new Electrodomestico("Nacional", "A");
  // let nevera = new Nevera("Intenacional", "A", 200);
  //let tv = new Tv("Nacional", "A", 52, true);
  //console.log(tv);
  //document.write(nevera.PrecioNevera,"\n", electrodomestico.CalcularPrecio);
  //document.write(electrodomestico.CalcularPrecio);
  //document.close;

  $("#input1").click(function(){
   alertify.prompt( 'Prompt Title', 'Prompt Message', 'Prompt Value'
                 , function(evt, value) { 
                 alertify.success('You entered: ' + value) 
                 $("#input1").val(value) 
                 }
                 , function() { 
                 alertify.error('Cancel') 
                 });
  
  })


