let lado;
let espacio;

function setup() {
  fullscreen();
  createCanvas(windowWidth, windowHeight,P2D);
  let calcularancho;
  if(windowWidth >= windowHeight){
    let porcentaje = windowHeight * 0.3 ;
    lado = windowHeight - porcentaje ; 
  }else{
    let porcentaje = windowWidth * 0.3 ;
    lado = windowWidth - porcentaje ;
  }
  espacio = lado/40;
}

function draw() {
  background(0);
  translate(width/2,height/2);
  noStroke();
  for(let i=0;i <= lado/espacio;i++){

    if(i%2 == 0){
      fill(240,30,90);
    }else{
      fill(0);
    }

    rotate(radians(sin(frameCount*1e-3)*89));
    rect(-lado/2+(espacio/2)*i,-lado/2+(espacio/2)*i,lado-espacio*i,lado-espacio*i);
  }
}
