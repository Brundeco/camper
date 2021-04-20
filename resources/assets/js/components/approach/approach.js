import data from './data.js';

export default function() {
  const buttons = document.querySelectorAll('.js-reveal-step');
  const stepDescription = document.querySelector('.js-step-description');
  const stepTitle = document.querySelector('.js-step-title');
  const stepNumber = document.querySelector('.js-step-number');
  const stepIcon = document.querySelector('.js-step-icon');

  buttons.forEach((element, index) => {
    element.addEventListener('click', () => {
      console.log(index);
      element.classList.add('active');
      stepDescription.innerHTML = data.descriptions[index];
      stepNumber.innerHTML = `Stap ${index + 1}`;
      stepTitle.innerHTML = data.titles[index];
      stepIcon.src = data.icons[index];
    });
  });
}
