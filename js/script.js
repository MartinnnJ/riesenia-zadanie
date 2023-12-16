'use strict';

const headerElements = Array.from(document.querySelectorAll('.header .md'));
const mainElements = Array.from(document.querySelectorAll('.main .md'));
const footerElements = Array.from(document.querySelectorAll('.footer .md'));
const buttons = Array.from(document.querySelectorAll('.header .button, .main .button'));
const modalCloseButton = document.querySelector('.close-button');
const modal = document.querySelector('.modal');

for (const button of buttons) {
  button.addEventListener('click', () => {
    modal.showModal();
  })
}

modalCloseButton.addEventListener('click', () => {
  modal.close();
})

// header transitions animations
for (const el of headerElements) {
  el.classList.remove('md');
}

// observer init
const options = {
  root: null,
  rootMargin: '0px',
  treshold: 1.0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('md');
    }
  });
}, options);

// main transitions animations
for (const el of mainElements) {
  observer.observe(el); // .observe method can observe only one element
}

// footer transitions animations
for (const el of footerElements) {
  observer.observe(el);
}