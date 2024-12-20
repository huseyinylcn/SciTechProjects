let filterBtn = document.getElementById('filterBtn')
let filterBox = document.getElementById('filterBox')
let filterBoxCloseBtn = document.getElementById('filterBoxCloseBtn')



filterBtn.addEventListener('click',()=>{



filterBox.classList.remove("d-none")
filterBox.classList.add("gel")



})


document.addEventListener('click',(event)=>{
    if(!filterBtn.contains(event.target)){

    if (filterBox.contains(event.target)) {
        console.log("Elementin içine tıkladınız.");
    } else {
        filterBox.classList.add("d-none")
        filterBox.classList.remove("gel")

    }
}
})



filterBoxCloseBtn.addEventListener('click',()=>{
    filterBox.classList.add("d-none")
        filterBox.classList.remove("gel")
})
