const navEl = document.querySelector('.nav')
const buttonEl = document.querySelector('.nav-toggle')
const headerEl = document.querySelector('.header')

buttonEl.addEventListener('click', function(){
    if(navEl.classList.contains('active')){
        navEl.classList.remove('active')
    }else{
        navEl.classList.add('active')
    }
})

window.addEventListener('scroll', function(event){
    if(window.scrollY >= 35){
        headerEl.classList.add('scrolled')
    }else{
        headerEl.classList.remove('scrolled')
    }
})

function showModal(selector){
    const modal = document.querySelector(selector)
    modal.style.display = 'block'
}

function closeModal(selector){
    const modal = document.querySelector(selector)
    modal.style.display = 'none'
}

const buttons = document.querySelectorAll('.toggle-modal')

for (let x = 0; x < buttons.length; x++) {
    const button = buttons[x];
    button.addEventListener('click', function(){
        showModal(button.dataset.target)
    })
}

const closeButtons = document.querySelectorAll('.modal .close')

for (let x = 0; x < closeButtons.length; x++) {
    const closeButton = closeButtons[x];
    closeButton.addEventListener('click', function(){
        const id = closeButton.parentElement.getAttribute('id')
        closeModal('#' + id)
    })
}