


let filterBox = document.getElementById('filterBox')
let filterBoxCloseBtn = document.getElementById('filterBoxCloseBtn')









filterBoxCloseBtn.addEventListener('click',()=>{
    filterBox.classList.add("d-none")
        filterBox.classList.remove("gel")
})


let filtrelemeSearchbtnMobil = document.getElementById('filtrelemeSearchbtnMobil')
let filterSearchInputMobil = document.getElementById('filterSearchInputMobil')
let filterKategoriSelectMobil = document.getElementById('filterKategoriSelectMobil')
let filterSeviyeSelectMobil = document.getElementById('filterSeviyeSelectMobil')
let filterDateSelectMobil = document.getElementById('filterDateSelectMobil')

filterKategoriSelectMobil.addEventListener('change',()=> filtrelemeMobil())
filterSeviyeSelectMobil.addEventListener('change',()=> filtrelemeMobil())
filterDateSelectMobil.addEventListener('change',()=> filtrelemeMobil())




let filtreleme = document.getElementById('filtreleme')
let filtrelemeSearchbtn = document.getElementById('filtrelemeSearchbtn')
let filterSearchInput = document.getElementById('filterSearchInput')
let filterKategoriSelect = document.getElementById('filterKategoriSelect')
let filterSeviyeSelect = document.getElementById('filterSeviyeSelect')
let filterDateSelect = document.getElementById('filterDateSelect')


let pagenextBox = document.getElementById("pagenextBox")

filterSearchInput.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
        filtreleme.click()
    }
})

filterSearchInputMobil.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
        filtrelemeMobil()
    }
})

let result = new URL(window.location.href)
result = result.pathname.split('/').filter(x => x!== '')
result = result.map(x => decodeURIComponent(x))


filterKategoriSelect.value = result[2]
filterSeviyeSelect.value = result[3]
filterDateSelect.value = result[4]


if(result[1] == ' '){
    filterSearchInputMobil.value  = ''
    filterSearchInput.value  = ''

}
else {
filterSearchInput.value = result[1]
    filterSearchInputMobil.value = result[1]
}

filterKategoriSelectMobil.value = result[2]
filterSeviyeSelectMobil.value = result[3]
filterDateSelectMobil.value = result[4]


let pageBack = document.getElementById('pageBack')
pageBack.href = (result[5]) -1

let pageNext = document.getElementById('pageNext')
pageNext.href = Number(result[5]) + 1

let value = result[5]

for (let i = 0; i < pagenextBox.children.length ; i++){
 
    pagenextBox.children[i].children[0].innerHTML =  value
    pagenextBox.children[i].children[0].href =  value
    value++

  
}

filtrelemeSearchbtn.addEventListener('click' ,()=> filtreleme.click())
filtrelemeSearchbtnMobil.addEventListener('click' ,()=> {
    console.log(444)
    filtrelemeMobil()
})



var filtrelemeMobil = ()=>{
    console.log(333)
    let data = {
        search:filterSearchInputMobil.value,
        kategori:filterKategoriSelectMobil.value,
        seviye:filterSeviyeSelectMobil.value,
        tarih:filterDateSelectMobil.value
    }
    if (data.search == '') data.search = ' '
    window.location.href = `/project/${data.search}/${data.kategori}/${data.seviye}/${data.tarih}/1`
}

filtreleme.addEventListener('click',()=>{
    let data = {
        search:filterSearchInput.value,
        kategori:filterKategoriSelect.value,
        seviye:filterSeviyeSelect.value,
        tarih:filterDateSelect.value
    }
    if (data.search == '') data.search = ' '
    window.location.href = `/project/${data.search}/${data.kategori}/${data.seviye}/${data.tarih}/1`
    
})