let bill, cinta, fuegoazul, fuegorosa, gnomo, portal, rosa, tienda, tiostan,
  winner, raton, pag_grande, muercie, mabel, hacha, gameO, dipper, diario_gran, alfombra, abuela, corazon,
  abuelo, cuarto, escogerP, hombreTauro, bosque, paginas, inicial, tronco;

let arregloA = [];
let arregloB1 = [new Array(26)];
let arregloB2 = [new Array(52)];

let mapa = [];

let pantalla = 0;
let presionado = false;

function preload() {
  bill = loadImage("/assets/0bill0.png");
  cinta = loadImage("/assets/0cinta0.png");
  fuegoazul = loadImage("/assets/0fuegoazul0.png");
  fuegorosa = loadImage("/assets/0fuegorosa0.png");
  gnomo = loadImage("/assets/0gnomo0.png");
  portal = loadImage("/assets/0portal0.png");
  rosa = loadImage("/assets/0rosa0.png");
  tienda = loadImage("/assets/0tienda0.png");
  tiostan = loadImage("/assets/0tiostan0.png");
  winner = loadImage("/assets/winner.png");
  raton = loadImage("/assets/raton.png");
  pag_grande = loadImage("/assets/pag_grande.png");
  muercie = loadImage("/assets/muercie.png");
  mabel = loadImage("/assets/mabel.png");
  hacha = loadImage("/assets/hacha.png");
  gameO = loadImage("/assets/gameO.png");
  dipper = loadImage("/assets/dipper.png");
  diario_gran = loadImage("/assets/diario_gran.png");
  alfombra = loadImage("/assets/alfombra.png");
  abuela = loadImage("/assets/Abuela Fantasma.png");
  corazon = loadImage("/assets/CorazónVida.png");
  abuelo = loadImage("/assets/ABUELO FANTASMA.png");
  cuarto = loadImage("/assets/Cuarto Dipper_2-8.png");
  escogerP = loadImage("/assets/EscogerPersonaje-8.png");
  hombreTauro = loadImage("/assets/HombreTauro.png");
  bosque = loadImage("/assets/Mapa Bosque-8.png");
  paginas = loadImage("/assets/PaginasDelLibro-8.png");
  inicial = loadImage("/assets/Pantalla inicial-8.png");
  tronco = loadImage("/assets/Tronco.png");

}
function setup() {
  createCanvas(998, 500);

  for (let i = 0; i < 26; i++) {
    mapa.push(new Array(26));
    for (let j = 0; j < 52; j++) {
      mapa.push(new Array(52));
    }
  }

  for (let fil = 0; fil < 26; fil++) {
    for (let col = 0; col < 52; col++) {
      mapa[fil][col] = 0;
    }

    console.log(mapa)
  }
}


function draw() {
  background(220);

  for (let fil = 0; fil < 26; fil++) {
    for (let col = 0; col < 52; col++) {
      if (mapa[fil][col] === 0) {
        fill(255);
      } else if (mapa[fil][col] === 1) {
        fill(0);
      }
      stroke(0);
      rect(col * 22, fil * 22, 22, 22);
    }
  }

  switch (pantalla) {
    case (0):
      image(inicial, 0, 0);
      break;
    case (1):
      image(escogerP, 0, 0);
      stroke(100);
      fill(255);
      textSize(15);
      text("CON UN CLICK", 438, 142)
      break;
    case (2):
      image(cuarto, 0, 0);
      break;
    case (3):
      image(pag_grande, 0, 0);
      break;
    case (4):
      image(diario_gran, 0, 0);
      break;
    case (5):
      image(tienda, 0, 0);
      break;
    case (6):
      image(bosque, 0, 0);
      break;
    case (7):
      image(portal, 0, 0);
      break;
    case (8):
      image(gameO, 0, 0);
      break;
    case (9):
      image(winner, 0, 0);
      break;
  }

}

function mouseClicked() {
  if (mouseX > 402 && mouseX < 402 + 176 && mouseY > 440 && mouseY < 440 + 39) {
    if (pantalla === 0) {
      presionado = !presionado;
      pantalla += 1;
    }
  }
 

  console.log(mouseX, mouseY);
}