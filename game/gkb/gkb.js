const text_hasil = document.querySelector(".hasil h1");
const bot_img = document.querySelector(".bot img");
const player_img = document.querySelector(".player img");

function opt(i) {
  let player = i;
  let hasil;
  // kertas gunting batu

  let bot = Math.floor(Math.random() * 3);
  if (player == bot) {
    hasil = "SERI";
  } else if (player == 0 && bot == 2) {
    hasil = "MENANG";
  } else if (player == 1 && bot == 0) {
    hasil = "MENANG";
  } else if (player == 2 && bot == 1) {
    hasil = "MENANG";
  } else {
    hasil = "KALAH";
  }
  switch(bot){
    case 0:
        bot_img.src = "../../img/gkb/kertas.png";
        break
    case 1:
        bot_img.src = "../../img/gkb/gunting.png";
        break
    case 2:
        bot_img.src = "../../img/gkb/batu.png";
        break
  }

  switch(player){
    case 0:
        player_img.src = "../../img/gkb/kertas.png";
        break
    case 1:
        player_img.src = "../../img/gkb/gunting.png";
        break
    case 2:
        player_img.src = "../../img/gkb/batu.png";
        break
  }
  text_hasil.innerHTML = hasil;
}
