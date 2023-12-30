

const topMenu = document.getElementById('ht-top-menu')
const topMenuClick = document.getElementById('ht-top-menu-click')

document.addEventListener('click', (e) => {
    if (topMenuClick.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ht-top-menu-expended')
    }
    else {
        if (topMenu.classList.contains('ht-top-menu-expended')) {
            topMenu.classList.remove('ht-top-menu-expended')
            topMenu.classList.add('hidden')
        }
    }
})