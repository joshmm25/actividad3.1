
function Colores(numColor){

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("");
    newDiv.appendChild(newContent); 
    var nomC=nombreColor(numColor);

    var newP = document.createElement("p");
    var newColor = document.createTextNode( nomC );
    newP.appendChild(newColor);
    var colorB=defineColor(numColor);

    newP.style="border: 1px solid #999999; background-color:"+colorB+"; width: 100px ;height:100px";


 document.body.appendChild(newDiv);
 document.body.appendChild(newP);
}

function Calcular(b1,b2,b3,b4,b5,b6){
  
  var valResistencia = (((parseInt(b1)*100+parseInt(b2)*10+parseInt(b3)))*Math.pow(10,parseInt(b4)));
  alert(valResistencia);
  tolerancia=0;
  switch(parseInt(b5)){
    case 1:tolencia=1; break;
    case 2:tolerancia=2; break;
    case 5:tolerancia=0.5; break;
    case 6:tolerancia=0.25; break;
    case 7:tolerancia=0.1; break;
    case 8:tolerancia=0.05; break;
    case 10:tolerancia=5; break;
    case 11:tolerancia=10; break;
  }
  ppm=0;
  switch(parseInt(b6))
  {
    case 1:ppm=100;break;
    case 2:ppm=50;break
    case 3:ppm=15;break;
    case 4:ppm=25;break;
    case 6:ppm=10;break;
    case 7:ppm=5;break;
    case 9:ppm=1;break;
    
  }
  
  

  var nDiv = document.createElement("div");
  var nContenido = document.createTextNode("VALOR RESISTENCIA");
  nDiv.appendChild(nContenido);
  document.body.appendChild(nDiv);

  var nParrafo = document.createElement("p");
  
  var nTexto = document.createTextNode(valResistencia);
  nParrafo.appendChild(nTexto);
  
  document.body.appendChild(nParrafo);

 
  let nDiv2=document.createElement("div");
  let cDiv=document.createTextNode("TOLERANCIA");
  nDiv2.appendChild(cDiv);
  
  var nParrafo2 = document.createElement("p");

  var nTexto2 = document.createTextNode(tolerancia+'%');
  nParrafo2.appendChild(nTexto2);
  
  document.body.appendChild(nDiv2);
  document.body.appendChild(nParrafo2);


  let nDiv3=document.createElement("div");
  let cDiv3=document.createTextNode("PPM");
  nDiv3.appendChild(cDiv3);
  var nParrafo3 = document.createElement("p")
  var nTexto3 = document.createTextNode(ppm+'ppm');
  nParrafo3.appendChild(nTexto3)

  document.body.appendChild(nDiv3);
  document.body.appendChild(nParrafo3);

}

function defineColor(n){

  switch(parseInt(n)){
    case 0:return "rgb(0, 0, 0)";
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

