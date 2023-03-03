const menuItems = document.querySelectorAll(".menu__item a")

menuItems.forEach((element, index) => {
    element.addEventListener("click", e => {
        e.preventDefault()

        const id = element.getAttribute('href')
        const elementToView = document.querySelector(id);

        elementToView.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
})


