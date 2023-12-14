'use strict';

const headerElements = Array.from(document.querySelectorAll('.header .md'));
const mainElements = Array.from(document.querySelectorAll('.main .md'));
const footerElements = Array.from(document.querySelectorAll('.footer .md'));

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

for (const el of mainElements) {
  observer.observe(el); // .observe method can observe only one element
}

for (const el of footerElements) {
  observer.observe(el);
}