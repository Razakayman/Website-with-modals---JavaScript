'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  // Whenever we click on overlay or x, the modal will become hidden.
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden'); // This will remove the class hidden. Don't need period at beginning. We're just passing in name of class.
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // Here we loop through nodelist so we can do something to all of these buttons
  btnsOpenModal[i].addEventListener('click', openModal); // Whenever any of the buttons are clicked on, the modal will open.
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); // Adding the parenthesis like closeModal() would not work because it would immediately call a function as soon as JavaScript executes this line. We only want it executed when the button is clicked.

document.addEventListener('keydown', function (eForEvent) {
  // This works because we do not call this function ourselves. We just define it.
  // console.log(eForEvent.key); // Whatever button we press ends up becoming the value for the key.
  if (eForEvent.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // Here we need to call the function.
  } // if the modal does not contain the hidden class, then close the modal.
}); // This event will happen as soon as we hit any key on the keyboard.
