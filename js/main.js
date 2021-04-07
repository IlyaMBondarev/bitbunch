
document.querySelector('.page').classList.add('loaded');

let mainScreenAnimationBlock = document.querySelector('.main-screen__anim');
let svgAnimation = mainScreenAnimationBlock.querySelector('svg');
let groups = svgAnimation.querySelectorAll('g');

setTimeout(() => {
    groups.forEach((g, i) => {
        setTimeout(() => {
            g.classList.add('animated');
        }, i * 100)
    })
}, 500)

let popupOpeners = document.querySelectorAll('.popup-opener');
let popupClosers = document.querySelectorAll('.popup-closer');
let popupsParent = document.querySelector('.popup');
let popupTicket = popupsParent.querySelector('.popup-ticket');
let popupThanks = popupsParent.querySelector('.popup-thanks');

popupOpeners.forEach(opener => {
    opener.addEventListener('click', () => {
        popupsParent.classList.add('popup-opened');
        popupTicket.classList.add('popup-opened');
    })
});

popupClosers.forEach(closer => {
    closer.addEventListener('click', () => {
        popupsParent.classList.remove('popup-opened');
        popupTicket.classList.remove('popup-opened');
        popupThanks.classList.remove('popup-opened');
    })
});

let popupTicketForm = popupTicket.querySelector('form');
let popupTicketInputs = popupTicketForm.querySelectorAll('.popup__form_block > input, .popup__form_block > textarea');

popupTicketInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value !== '') {
            input.classList.add('not-empty');
        } else {
            input.classList.remove('not-empty');
        }
    })
})

popupTicketForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let errors = 0;

    //всякая проверка

    if (!errors) {
        popupTicketInputs.forEach(input => {
            input.value = '';
            input.classList.remove('not-empty');
        })
        popupThanks.classList.add('popup-opened');
    }
})
