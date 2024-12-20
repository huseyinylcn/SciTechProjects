
let mynav = document.getElementById("mynav")
let mobilnavOpenBtn = document.getElementById("mobilnavOpenBtn")
let mobilnavbox = document.getElementById('mobilnavbox')





let oncekiScroll = window.screenY

window.addEventListener('scroll',()=>{

    const mevcutScroll = window.scrollY; // Şu anki scroll pozisyonu

    if (mevcutScroll < oncekiScroll) {
        mynav.style.position = `fixed`
        mobilnavbox.style.transform  = 'translateX(-100%)'
        mynav.style.top = `0px`
      

    } else if (mevcutScroll > oncekiScroll) {
        mynav.style.position = `absolute`
        mobilnavbox.style.transform  = 'translateX(-100%)'
    }

    oncekiScroll = mevcutScroll;
  
})

mobilnavbox.style.transform  = 'translateX(-100%)'
mobilnavOpenBtn.addEventListener('click',()=>{
    console.log('tıklandı')
    if (mobilnavbox.style.transform == 'translateX(0%)'){
mobilnavbox.style.transform  = 'translateX(-100%)'
    }else{
        mobilnavbox.style.transform  = 'translateX(0%)'
    }
    
    console.log(mobilnavbox.style.transform)
})






document.addEventListener('click',(event)=>{
    if(!mobilnavOpenBtn.contains(event.target)){

    if (mobilnavbox.contains(event.target)) {
        console.log("Elementin içine tıkladınız.");
    } else {
       mobilnavbox.style.transform  = 'translateX(-100%)'
    }
}
})



