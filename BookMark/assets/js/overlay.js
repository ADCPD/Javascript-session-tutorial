'use strict';
/* TODO:  Declarer les constantes*/
const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

/** @Method:  qui ouvre un input pop-up */
function showFloater() {
    body.classList.add('show-floater');
}

/** @Method:  qui ferme le pop-up apres ouverture*/
function closeFloater() {
    if (body.classList.contains('show-floater')){
        body.classList.remove('show-floater');
    }

}

input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click',closeFloater);
//console.log(overlay);
/*   Declarer Methodes & Fonctions & EventListener */