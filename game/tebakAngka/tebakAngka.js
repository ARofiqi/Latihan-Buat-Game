const opt_player = document.querySelector(".input-player");
const submit = document.querySelector(".submit");
const box_number = document.querySelector(".box-number h1")

submit.addEventListener("click",function(){
    box_number.innerHTML = opt_player.value
})