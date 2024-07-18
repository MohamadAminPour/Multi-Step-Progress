let NextBtn = document.querySelector('.personal-form__NextBtn')
let prevBtn = document.querySelector('.personal-form__prevBtn')
let multiStepBoxs = document.querySelector('.multiStep-boxs')
let step2Circle = document.querySelector('.multiStep-left__step2-circle')
let step3Circle = document.querySelector('.multiStep-left__step3-circle')
let step2Bar = document.querySelector('.multiStep-left__step2-bar')
let step3Bar = document.querySelector('.multiStep-left__step3-bar')
let img = document.querySelector('.multiStep-right__header-right__img')
let title = document.querySelector('.multiStep-right__header-left__title')
let subtitle = document.querySelector('.multiStep-right__header-left__subtitle')
let titleElems = document.querySelectorAll('.subtitle')

let step = 1
NextBtn.addEventListener('click', () => {
    if (step === 1) {
        step2()
    }
    else if (step === 2) {
        step3()
    }
})

prevBtn.addEventListener('click', () => {
    if (step === 2) {
        step1()
    }
    else if (step === 3) {
        step2()
    }
})

window.addEventListener('load', () => {
    img.src = './image/personal.gif'
})


function step1() {
    multiStepBoxs.className = 'multiStep-boxs step1'
    step2Circle.classList.add('active')
    step2Bar.classList.add('active')
    title.innerHTML = 'Personal Information'
    subtitle.innerHTML = 'Enter your Personal information correctly'
    img.src = './image/personal.gif'
    step = 1
}
function step2() {
    multiStepBoxs.className = 'multiStep-boxs step2'
    step2Circle.classList.add('active')
    step2Bar.classList.add('active')
    title.innerHTML = 'Contact Information'
    subtitle.innerHTML = 'Enter your Contact information correctly'
    img.src = './image/contact.gif'
    step = 2
}
function step3() {
    multiStepBoxs.className = 'multiStep-boxs step3'
    step3Circle.classList.add('active')
    step3Bar.classList.add('active')
    title.innerHTML = 'Security Information'
    subtitle.innerHTML = 'Enter your Security information correctly'
    img.src = './image/security.gif'
    step = 3
    NextBtn.innerHTML = 'Finish'
}