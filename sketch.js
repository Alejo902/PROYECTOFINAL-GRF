let bill, cinta, fuegoazul, fuegorosa, gnomo, portal, rosa, tienda, tiostan, 
winner, raton, pag_grande, muercie, mabel, hacha, gameO, dipper, diario_gran, alfombra,abuela,corazon,
abuelo,cuarto,escogerP,hombreTauro,bosque,paginas,inicial,tronco;

let enemigo = new Enemigos;
let arma = new ArmasE;

let vida = [];


function preload(){
bill=loadImage("/assets/0bill0.png");
cinta=loadImage("/assets/0cinta0.png");
fuegoazul=loadImage("/assets/0fuegoazul0.png");
fuegorosa=loadImage("/assets/0fuegorosa0.png");
gnomo=loadImage("/assets/0gnomo0.png");
portal=loadImage("/assets/0portal0.png");
rosa=loadImage("/assets/0rosa0.png");
tienda=loadImage("/assets/0tienda0.png");
tiostan=loadImage("/assets/0tiostan0.png");
winner=loadImage("/assets/winner.png");
raton=loadImage("/assets/raton.png");
pag_grande=loadImage("/assets/pag_grande.png");
muercie=loadImage("/assets/muercie.png");
mabel=loadImage("/assets/mabel.png");
hacha=loadImage("/assets/hacha.png");
gameO=loadImage("/assets/gameO.png");
dipper=loadImage("/assets/dipper.png");
diario_gran=loadImage("/assets/diario_gran.png");
alfombra=loadImage("/assets/alfombra.png");
abuela=loadImage("/assets/Abuela Fantasma.png");
corazon=loadImage("/assets/CorazónVida.png");
abuelo=loadImage("/assets/ABUELO FANTASMA.png");
cuarto=loadImage("/assets/Cuarto Dipper_1-8.png");
escogerP=loadImage("/assets/EscogerPersonaje-8.png");
hombreTauro=loadImage("/assets/HombreTauro.png");
bosque=loadImage("/assets/Mapa Bosque-8.png");
paginas=loadImage("/assets/PaginasDelLibro-8.png");
inicial=loadImage("/assets/Pantalla inicial-8.png");
tronco=loadImage("/assets/Tronco.png");
maya=loadImage("/assets/maya-8.png");



}
function setup() {
  createCanvas(1000, 500);

  for (let i = 0; i < 4; i++) {
    let x = (i*76)+40;
    let y = 40;
    vida.push(new Vidas(x,y));
  }
}

function draw() {

  for (let i = 0; i < vida.length; i++) {
     
    vida[i].mostrar();
  }
  
switch (1) {
  case 0:
    
    enemigo.mostrarRaton();

  
      break;


  case 1:
    enemigo.mostrarMurcie();
      break;

  case 2:
      this.x+=5;
      break;

  case 3:
      this.x+=5;
      break;

  case 4:
      this.y-=5;
      break;

  case 5:
      this.y-=5;
      break;

  case 6:
      this.y+=5;
      break;

  case 7:
      this.y+=5;
      break;
}
}

function validarTeclas() {
  if (keyIsDown(97) || keyIsDown (65)) {
     
  
  }
}