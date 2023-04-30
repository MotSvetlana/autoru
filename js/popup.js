// Popup
const popupLinks = document.querySelectorAll('.info__btn');
const body = document.querySelector('body');
// если есть фиксированный объект (например шапка и в ней класс lock-padding )
// const lockPadding = document.querySelectorAll('.lock-padding');


let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault()
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.popup__close');

if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    currentPopup.classList.add('open');
    // body.classList.add('lock');
    bodyLock();
    currentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__window')) {
            popupClose(e.target.closest('.popup'));
        }
    })
}

function popupClose(currentPopup) {
    currentPopup.classList.remove('open');
    // body.classList.remove('lock');
    bodyUnlock();
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    // if(lockPadding.length>0){
    //     for(let index=0; lockPadding.length>0; index++){
    //         const el = lockPadding[index];
    //         el.style.paddingRight = lockPaddingValue;
    //     }
    // }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    console.log(lockPaddingValue);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        // if (lockPadding.length > 0) {
        //     for (let index = 0; lockPadding.length > 0; index++) {
        //         const el = lockPadding[index];
        //         el.style.paddingRight = "0px";
        //     }
        // }
        body.style.paddingRight = "0px";
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}






// Gallery in modal window

let galleries = document.querySelectorAll('.gallery');

galleries.forEach(function (gallery) {
    let mainImage = gallery.querySelector('.gallery__photo');
    let previews = gallery.querySelectorAll('.gallery__item a');

    for (let activeImage of previews) {
        activeImage.onclick = function (evt) {
            evt.preventDefault();
            mainImage.src = activeImage.href;

            let currentActive = gallery.querySelector('.gallery__item.active');
            currentActive.classList.remove('active');
            activeImage.classList.add('active');
        };
    }
});
