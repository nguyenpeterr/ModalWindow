'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// Function to show the modal window
const showModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Function to close the modal window
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Event listener for each button to show modal window
for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', showModal);
};
// Event listener to close the modal window
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);