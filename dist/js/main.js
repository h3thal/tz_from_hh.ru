const menuButton = document.getElementsByClassName("menu-btn")[0];
const menuElem = document.querySelector('.header__links-menu');
const rocketButton = document.getElementsByClassName('rocket-button')[0];
const heartButton = document.getElementsByClassName('heart-button');
const messageElem = document.getElementsByClassName('message')[0];
const messageBlockElem = document.getElementsByClassName('message__block');

Array.prototype.last = function () {
    return this[this.length - 1];
}

menuButton.addEventListener('click', function () {
    menuElem.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (this.scrollY >= 200 && !rocketButton.classList.contains('active')) {
        rocketButton.classList.add('active');
    } else if (this.scrollY < 200 && rocketButton.classList.contains('active')) {
        rocketButton.classList.remove('active');
    }    
});
rocketButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

function createMessage(text) {
    var msg = '';
    document.getElementsByClassName('message__block-title');
    msg = document.createElement('div');
    msg.classList.add('message__block');
    msg.innerHTML += '<div class="message__block-title">Добавление в избранное</div><div class=".message__block-text">' + text + '</div><img src="./img/icon/close.svg" alt=""/>';
    messageElem.append(msg);
    Array.from(messageBlockElem).last().addEventListener('click', function () {
        removeMessage(this);
    });
    setTimeout(removeMessage, 5000, Array.from(messageBlockElem).last());
}
function removeMessage(elem) {
    elem.removeEventListener('click', function (){});
    elem.remove();
}

Array.from(heartButton).forEach((item, i) => {
    item.addEventListener('click', function () {
        createMessage("Вы добвила в избранное: " + item.parentElement.parentElement.getElementsByClassName('name')[0].innerText + ", за: " + item.parentElement.parentElement.getElementsByClassName('price')[0].innerText)
    });
    
});