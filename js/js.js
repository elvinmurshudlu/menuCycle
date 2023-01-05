let menuCycle = document.querySelector(".menu_cycle")
let menuBtn = document.querySelector(".menuBtn")

function toggle(element,className){
    if(element.classList.contains(className)){
        element.classList.remove(className)
    }else{
        element.classList.add(className)
    }
}

menuBtn.addEventListener("click",()=>{
    toggle(menuCycle,"menu_hidden")
})
