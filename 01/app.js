document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(() => console.log('finish'));
}

function setBorderColorAsync(element, color) {
    return new Promise((resolve) => {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            resolve();
            }, Math.random() * 3000)
    });
};