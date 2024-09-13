
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(() => {
        starter.style.display="none";
    }, 3900);
})
const scaleFactor = 1 /20
function moveBackground(event){
    const shapes = document.querySelectorAll(".shapey");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * 1/11;
    for ( let i = 0; i < shapes.length; ++i) {
        shapes[i].style.transform = `translate(${x}px, ${y}px)`;
    }
}
 let contrastToggle = false
function toggleContarst(){
    let section = document.getElementsByClassName("container")
    console.log("hi")
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList.add("dark-theme")
}else{
document.body.classList.remove("dark-theme")
}
}
