//template_9m4a2xr
//service_kv6pvg8
//weheoLbGun9jDgZY7
let isModelOpen = false 
let contrastToggle = false
const scaleFactor = 1 /20
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.cleintY * scaleFactor;

    for ( let i = 0; i < shapes.length; ++i) {
        const isodd = i % 2 !== 0
        const oddint = isodd ? -1 : 1;
        shapes[i].style.transform = `translate(${x}px, ${y}px)`
    }
}
function toggleContarst(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
    document.body.classList += " dark-theme"
}else{
    document.body.classList.remove("dark-theme")
}
}
function contact(event){
    event.preventDefault();
    const loading = document.querySelector(".model__overlay--loading")
  const success = document.querySelector('.model__overlay--suc')
  loading.classList +=" model__overlay--vis"
  emailjs
   .sendForm(
        'service_kv6pvg8',
        'template_3u6e686',
        event.target,
        'weheoLbGun9jDgZY7'
    ).then(() => {
        loading.classList.remove("model__overlay--vis")
        success.classList += " model__overlay--vis"
    }).catch(() => {
        loading.classList.remove("model__overlay--vis")
        alert(
            "the email service is temporarily unavailable. Please contact me directly on eyad236@gmail.com"
        )
    })
}

function toggleModel(){
    if(isModelOpen){
        isModelOpen = false
        return document.body.classList.remove("model--open")
    }
    isModelOpen = true
    document.body.classList +=" model--open"
}
