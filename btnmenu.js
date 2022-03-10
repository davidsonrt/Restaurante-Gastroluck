const $menu = document.querySelector('.menu')
const $btnMenuopen = document.querySelector('.btnMenu_open')
const $btnMenuclose = document.querySelector('.btnMenu_close')
const $btnMenuitem = document.querySelector('.menu-item')
const $btnMenuitem1 = document.querySelector('.f1')
const $btnMenuitem2 = document.querySelector('.f2')




$btnMenuopen.addEventListener('click', function(){
    $menu.classList.add('menu_open')
})
$btnMenuclose.addEventListener('click', function(){
    $menu.classList.remove('menu_open')
})
$btnMenuitem.addEventListener('click', function(){
    $menu.classList.remove('menu_open')
})
$btnMenuitem1.addEventListener('click', function(){
    $menu.classList.remove('menu_open')
})
$btnMenuitem2.addEventListener('click', function(){
    $menu.classList.remove('menu_open')
})
