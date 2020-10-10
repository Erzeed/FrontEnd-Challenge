const switchToggle = document.querySelector('.checkbox')
const bigCard = document.querySelectorAll('.large-card')
const litleCard = document.querySelectorAll('.card')
const text = document.querySelector('.title h1')
const text1 = document.querySelector('.title p')
const text2 = document.querySelector('.title-2')
const text3 = document.querySelector('.theme-mode p')

function darkMode() {
    document.body.classList.toggle('dark')
    bigCard.forEach(e => e.classList.toggle('dark'))
    litleCard.forEach(e => e.classList.toggle('dark'))
    text.classList.toggle('dark')
    text1.classList.toggle('dark')
    text2.classList.toggle('dark')
    text3.classList.toggle('dark')
}

switchToggle.addEventListener('change',darkMode)