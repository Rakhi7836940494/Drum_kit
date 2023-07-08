const button=document.querySelector(".container");
console.log(button);
button.addEventListener("click",(e)=>{
    let Target= e.target.innerHTML;
    console.log(e);
    console.log(Target)

    Sound(Target);
})

function Sound(value){
    let voice=new Audio(`${value}.mp3`);
    voice.play();
}
