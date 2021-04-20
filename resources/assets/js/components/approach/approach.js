import data from './data.js';

export default function() {
  const buttons = document.querySelectorAll('.js-reveal-step');
  let buttonMap = [];
  const stepDescription = document.querySelector('.js-step-description');
  const stepTitle = document.querySelector('.js-step-title');
  const stepNumber = document.querySelector('.js-step-number');
  const stepIcon = document.querySelector('.js-step-icon');

  buttons.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (element.classList.contains('approach-steps__reveal-step-active'))
        element.classList.remove('approach-steps__reveal-step-active');

      let indexItem = buttonMap.indexOf(element);
      indexItem === -1 ? buttonMap.push(element) : buttonMap.splice(indexItem, 1);
      console.log(buttonMap);

      buttonMap.forEach((mapEl, i) => {
        mapEl.classList.add('approach-steps__reveal-step-active');
      });

      stepDescription.innerHTML = data.descriptions[index];
      stepNumber.innerHTML = `Stap ${index + 1}`;
      stepTitle.innerHTML = data.titles[index];
      stepIcon.src = data.icons[index];
    });
  });
}
