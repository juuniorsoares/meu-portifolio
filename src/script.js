let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abir-menu')
})