
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



let loginOpenBtn = document.getElementById('loginOpenBtn')
let loginBox = document.getElementById('loginBox')
let loginBoxCloseBtn = document.getElementById('loginBoxCloseBtn')


let mobilloginOpenBtn = document.getElementById('mobilloginOpenBtn')







loginOpenBtn.addEventListener('click',()=>{
    loginBox.style.display = 'flex'

    loginInfo.innerHTML = 'Kullanıcı adı ve şifrenizi girin'
    
    loginInfo.classList.add("text-white-50")
})

mobilloginOpenBtn.addEventListener('click',()=>{
    loginBox.style.display = 'flex'

    loginInfo.innerHTML = 'Kullanıcı adı ve şifrenizi girin'
    
    loginInfo.classList.add("text-white-50")
})



loginBoxCloseBtn.addEventListener('click',()=>{
    loginBox.style.display = 'none'
})






let loginBtn = document.getElementById("loginBtn")
let typeEmailX = document.getElementById("typeEmailX")
let typePasswordX = document.getElementById("typePasswordX")



let loginInfo = document.getElementById('loginInfo')


loginBtn.addEventListener('click',()=>{



    let payload = {
        id: typeEmailX.value,
        pass: typePasswordX.value,
      }

      fetch('/login', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => {
        if(json.status == 200){
            location.reload()
        }else{

            
            loginInfo.innerHTML = 'Kullanıcı adı veya şifre hatalı'
            loginInfo.style.color = 'red'
            loginInfo.classList.remove("text-white-50")

        }

      })
      .catch(err => console.log(err));

})