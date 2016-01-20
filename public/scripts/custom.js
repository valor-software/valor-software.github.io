// Fix menu

window.addEventListener('scroll', runOnScroll);

function runOnScroll() {
    var elm = document.getElementById('fixed-menu');

    var startFixedPosition = window.innerHeight;

    if (window.innerWidth <= 767) {
        startFixedPosition = document.getElementById('header').offsetHeight;
    }

    if (window.pageYOffset >= startFixedPosition) {
        elm.classList.add('fix');
    } else {
        elm.classList.remove('fix');
    }
}

// PopUp

function openPopUp() {
    document.getElementById('popup').classList.add('overlay');
}

function closePopUp() {
    document.getElementById('popup').classList.remove('overlay');
}

function closePopUpRes() {
    document.getElementById('popup-confirm').classList.remove('overlay');
}

// Link scroll animation

document.getElementById('top-menu-container').addEventListener('click', scrollAnimation);
document.getElementById('fixed-menu-container').addEventListener('click', scrollAnimation);

var animationPlay = true;

function scrollAnimation(e) {
    e.preventDefault();
    var currentElm = null;

    if (!animationPlay) {
        return;
    }

    if (e.target.tagName === 'A') {
        currentElm = e.target;
    }

    if (e.target.parentNode.tagName === 'A') {
        currentElm = e.target.parentNode;
    }

    if (!currentElm) {
        return;
    }

    var elmId = currentElm.getAttribute('href');

    if (elmId.indexOf('https') !== -1) {
        return;
    }

    animationPlay = false;

    elmId = elmId.replace('#', '');

    var elem = document.getElementById(elmId);
    var endScroll = elem.offsetTop;

    if (elmId !== 'about') {
        var fixedMenu = document.getElementById('fixed-menu');

        endScroll = endScroll - fixedMenu.offsetHeight;
    }

    scrollTo(document.body, endScroll, 1000, function () {
        if (history.pushState) {
            var urlPage = location.pathname + '#' + elmId;

            history.pushState(null, document.title, urlPage);
        } else {
            location.hash = '#' + elmId;
        }

        animationPlay = true;
    });
}

function scrollTo(element, to, duration, cb) {
    if (duration <= 0) {
        return cb();
    }

    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;

        if (element.scrollTop === to) {
            return cb();
        }

        scrollTo(element, to, duration - 10, cb);
    }, 10);
}