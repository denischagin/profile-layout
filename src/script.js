// const menuItems = document.querySelectorAll(".menu__item a")
const menuBurger = document.getElementById("menu-burger")
const header = document.getElementById('header')
const menuItems = document.querySelectorAll('.menu__item a')
const pullOutMenu = document.getElementById('pull-out-menu')
const buttonCloseMenu = document.getElementById('close-menu')
const menuPullOutItems = document.querySelectorAll(".menu__item")

menuItems.forEach((element, index) => {
    element.addEventListener("click", e => {
        e.preventDefault()
        if (element.parentElement.classList.contains('active')) 
            pullOutMenu.classList.remove('active')
        const id = element.getAttribute('href')
        const elementToView = document.querySelector(id);

        elementToView.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
})

menuBurger.addEventListener('click', e => {
    e.preventDefault()
    pullOutMenu.classList.toggle('active')
})

buttonCloseMenu.addEventListener('click', e => {
    pullOutMenu.classList.remove('active')
})


