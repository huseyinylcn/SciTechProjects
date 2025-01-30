let plus = document.getElementById("plus")
let plusList = document.getElementById("plusList")
let globalElement;

plusList.style.opacity = '0'
plus.addEventListener('click',()=>{

if (plusList.style.opacity == '0'){
    plusList.style.opacity = '1'
    plusList.style.display = 'block'


}else if(plusList.style.opacity == '1'){
plusList.style.opacity = '0'
plusList.style.display = 'none'
}
})


document.addEventListener('click',(event)=>{
    if(!plus.contains(event.target)){

    if (plusList.contains(event.target)) {
       
    } else {

       plusList.style.opacity  = '0'
       plusList.style.display = 'none'
    }
}
})



let bigtitleAddBtn = document.getElementById("bigtitleAddBtn")
let htmlBox = document.getElementById("htmlBox")

bigtitleAddBtn.addEventListener("click",()=>{

    let newH3 = document.createElement('h3')
    newH3.textContent = 'Başlık Üstününe tıklayrak Değiştirin'
    newH3.onclick = ElementClickEvent
    htmlBox.appendChild(newH3)
plusList.style.opacity = '0'
plusList.style.display = 'none'

})


let smalltitleAddBtn = document.getElementById("smalltitleAddBtn")

smalltitleAddBtn.addEventListener("click",()=>{

    let newH4 = document.createElement('h4')
    newH4.textContent = 'Küçük Başlık Üstününe tıklayrak Değiştirin'
    newH4.onclick = ElementClickEvent
    htmlBox.appendChild(newH4)
    
plusList.style.opacity = '0'
plusList.style.display = 'none'

})


let textAddBtn = document.getElementById("textAddBtn")

textAddBtn.addEventListener("click",()=>{

    let newP = document.createElement('p')
    newP.textContent = 'Paragraf Üstününe tıklayrak Değiştirin'
    newP.onclick = ElementClickEvent
    htmlBox.appendChild(newP)
plusList.style.opacity = '0'
plusList.style.display = 'none'

})



let listAddBtn = document.getElementById("listAddBtn")

listAddBtn.addEventListener("click",()=>{

    let newLi = document.createElement('li')
    newLi.textContent = 'Liste Üstününe tıklayrak Değiştirin'
    newLi.onclick = ElementClickEvent
    htmlBox.appendChild(newLi)
plusList.style.opacity = '0'
plusList.style.display = 'none'

})


let design = document.getElementById('design')
let inp = document.getElementById('inp')



function ElementClickEvent(event){
globalElement = event

design.style.opacity = '1'
design.style.transform = 'translateX(0px)'
inp.value = event.target.textContent

}



inp.addEventListener('input',()=>{
    globalElement.target.textContent = inp.value 


})


let notChange = document.getElementById('notChange')
notChange.addEventListener('click',()=>{
    design.style.opacity = '0'
    design.style.transform = 'translateX(-100000px)'
})





let colorBlackBtn = document.getElementById('colorBlackBtn')

colorBlackBtn.addEventListener('click',()=>{

    globalElement.target.classList.add('text-black')
    globalElement.target.classList.remove('text-primary')
    globalElement.target.classList.remove('text-danger')
    globalElement.target.classList.remove('text-warning')
    globalElement.target.classList.remove('text-success')
    globalElement.target.classList.remove('text-light')




})


let colorBlueBtn = document.getElementById('colorBlueBtn')

colorBlueBtn.addEventListener('click',()=>{
    globalElement.target.classList.remove('text-black')
    globalElement.target.classList.add('text-primary')
    globalElement.target.classList.remove('text-danger')
    globalElement.target.classList.remove('text-warning')
    globalElement.target.classList.remove('text-success')
    globalElement.target.classList.remove('text-light')

})



let colorRedBtn = document.getElementById('colorRedBtn')

colorRedBtn.addEventListener('click',()=>{
    globalElement.target.classList.remove('text-black')
    globalElement.target.classList.remove('text-primary')
    globalElement.target.classList.add('text-danger')
    globalElement.target.classList.remove('text-warning')
    globalElement.target.classList.remove('text-success')
    globalElement.target.classList.remove('text-light')

})




let colorYellowBtn = document.getElementById('colorYellowBtn')

colorYellowBtn.addEventListener('click',()=>{
    globalElement.target.classList.remove('text-black')
    globalElement.target.classList.remove('text-primary')
    globalElement.target.classList.remove('text-danger')
    globalElement.target.classList.add('text-warning')
    globalElement.target.classList.remove('text-success')
    globalElement.target.classList.remove('text-light')

})




let colorGreenBtn = document.getElementById('colorGreenBtn')

colorGreenBtn.addEventListener('click',()=>{
    globalElement.target.classList.remove('text-black')
    globalElement.target.classList.remove('text-primary')
    globalElement.target.classList.remove('text-danger')
    globalElement.target.classList.remove('text-warning')
    globalElement.target.classList.add('text-success')
    globalElement.target.classList.remove('text-light')

})


let colorWhiteBtn = document.getElementById('colorWhiteBtn')

colorWhiteBtn.addEventListener('click',()=>{
    globalElement.target.classList.remove('text-black')
    globalElement.target.classList.remove('text-primary')
    globalElement.target.classList.remove('text-danger')
    globalElement.target.classList.remove('text-warning')
    globalElement.target.classList.remove('text-success')
    globalElement.target.classList.add('text-light')

})


let textSize1 = document.getElementById('textSize1')

textSize1.addEventListener('click',()=>{
    globalElement.target.classList.add('fs-1')
    globalElement.target.classList.remove('fs-2')
    globalElement.target.classList.remove('fs-3')
    globalElement.target.classList.remove('fs-4')
    globalElement.target.classList.remove('fs-5')
    globalElement.target.classList.remove('fs-6')


})


let textSize2 = document.getElementById('textSize2')

textSize2.addEventListener('click',()=>{
    globalElement.target.classList.remove('fs-1')
    globalElement.target.classList.add('fs-2')
    globalElement.target.classList.remove('fs-3')
    globalElement.target.classList.remove('fs-4')
    globalElement.target.classList.remove('fs-5')
    globalElement.target.classList.remove('fs-6')


})



let textSize3 = document.getElementById('textSize3')

textSize3.addEventListener('click',()=>{
    globalElement.target.classList.remove('fs-1')
    globalElement.target.classList.remove('fs-2')
    globalElement.target.classList.add('fs-3')
    globalElement.target.classList.remove('fs-4')
    globalElement.target.classList.remove('fs-5')
    globalElement.target.classList.remove('fs-6')


})


let textSize4 = document.getElementById('textSize4')

textSize4.addEventListener('click',()=>{
    globalElement.target.classList.remove('fs-1')
    globalElement.target.classList.remove('fs-2')
    globalElement.target.classList.remove('fs-3')
    globalElement.target.classList.add('fs-4')
    globalElement.target.classList.remove('fs-5')
    globalElement.target.classList.remove('fs-6')


})

let textSize5 = document.getElementById('textSize5')

textSize5.addEventListener('click',()=>{
    globalElement.target.classList.remove('fs-1')
    globalElement.target.classList.remove('fs-2')
    globalElement.target.classList.remove('fs-3')
    globalElement.target.classList.remove('fs-4')
    globalElement.target.classList.add('fs-5')
    globalElement.target.classList.remove('fs-6')


})

let textSize6 = document.getElementById('textSize6')

textSize6.addEventListener('click',()=>{
    globalElement.target.classList.remove('fs-1')
    globalElement.target.classList.remove('fs-2')
    globalElement.target.classList.remove('fs-3')
    globalElement.target.classList.remove('fs-4')
    globalElement.target.classList.remove('fs-5')
    globalElement.target.classList.add('fs-6')


})


let yayinla = document.getElementById('yayinla')
let projeBaslik = document.getElementById('projeBaslik')
let projeAciklama = document.getElementById('projeAciklama')
let projeKategori = document.getElementById('projeKategori')
let projeSeviye = document.getElementById('projeSeviye')



yayinla.addEventListener('click',()=>{

    let data = {
        baslik:projeBaslik.value,
        html:htmlBox.innerHTML,
        aciklama:projeAciklama.value,
        kategori:projeKategori.value,
        seviye:projeSeviye.value
        


    }
    

      fetch('/add/project', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => {
        if(json == 200){
            location.reload("/project")
        }else{

            
            alert("Başarısız")

        }

      })
      .catch(err => console.log(err));
})