const hey = document.querySelector('#hey');
const CLICKED_CLASS = 'clicked';

function handleClicked() {
    hey.classList.toggle(CLICKED_CLASS);
}
function init() {
    hey.addEventListener('click', handleClicked);
}

init();

