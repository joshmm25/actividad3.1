//(parseInt(b1)*100+parseInt(b2)*10+parseInt(b3))*PeriodicWave(10,parseInt(b4))
function Colores(numColor){

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("");
    newDiv.appendChild(newContent); //añade texto al div creado.

    var nomC=nombreColor(numColor);

    var newP = document.createElement("p");
    var newColor = document.createTextNode( nomC );
    newP.appendChild(newColor);
    var colorB=defineColor(numColor);

    newP.style="border: 1px solid #999999; background-color:"+colorB+"; width: 100px ;height:30px";


// añade el elemento creado y su contenido al DOM


 document.body.appendChild(newDiv);
 document.body.appendChild(newP);
}

function Calcular(b0,b1,b2,b3,b4){
  
  var valResistencia=parseInt(b1)*parseInt(b3)+(parseInt(b2)*(parseInt(b3)/10)+(parseInt(b0)*parseInt(b3)));
  alert(valResistencia);
  var tolerancia=0;
  switch(parseInt(b4)){
    case 1:tolencia=1;break;
    case 2:tolerancia=2;break
    case 5:tolerancia=0.5;break;
    case 6:tolerancia=0.25;break;
    case 7:tolerancia=0.1;break;
    case 8:tolerancia=0.05;break;
    case 10:tolerancia=5;break;
    case 11:tolerancia=10;break;
  }
  
  //crear un div con texto VALOR RESISTENCIA
  var nDiv = document.createElement("div");
  var nContenido = document.createTextNode("VALOR RESISTENCIA");
  //añade texto al div creado.
  nDiv.appendChild(nContenido);
  document.body.appendChild(nDiv);

   //Agregar un parrafo que contenga el valor de la RESISTENCIA
  var nParrafo = document.createElement("p");
  
  var nTexto = document.createTextNode(valResistencia);
  nParrafo.appendChild(nTexto);
  
  //Agregar el div y el párrafo al doument
  
  document.body.appendChild(nParrafo);

  //***** */
  let nDiv2=document.createElement("div");
  let cDiv=document.createTextNode("TOLERANCIA");
  nDiv2.appendChild(cDiv);
  //Agregar un parrafo que contenga el valor de la RESISTENCIA
  var nParrafo2 = document.createElement("p");

  var nTexto2 = document.createTextNode(tolerancia+'%');
  nParrafo2.appendChild(nTexto2);
  
  //Agregar el div y el párrafo al doument
  document.body.appendChild(nDiv2);
  document.body.appendChild(nParrafo2);
}

function defineColor(n){

  switch(parseInt(n)){
    case 0:return "rgb(122, 128, 121)";
    case 1:return "rgb(128,0,0)";
    case 2:return "rgb(255,0,0)";
    case 3:return "rgb(255,128,0)";
    case 4:return "rgb(255,255,0)"
    case 5:return "rgb(0,255,0)";
    case 6: return "rgb(0,0,255)";
    case 7: return "rgb(128,0,128)";
    case 8: return "rgb(128,128,128)";
    case 9: return "rgb(255,255,255)";
    case 10: return "rgb(240,234,200)";
    case 11: return "rgb(192,192,192)";
  }
}

function nombreColor(n){

  switch(parseInt(n)){
    case 0:return "NEGRO";
    case 1:return "CAFE";
    case 2:return "ROJO";
    case 3:return "NARANJA";
    case 4:return "AMARILLO"
    case 5:return "VERDE";
    case 6: return "AZUL";
    case 7: return "VIOLETA";
    case 8: return "GRIS";
    case 9: return "BLANCO";
    case 10: return "ORO";
    case 11: return "PLATA";

  }
}