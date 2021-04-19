export default function() {

    console.log('i am here!!')
  const accordions = document.querySelectorAll('.js-accordion');

  accordions.forEach(element => {
    const panel = element.querySelector('.js-accordion-panel');
    const button = element.querySelector('.js-accordion-trigger');
    const panelState = element.querySelector('.js-accordion-panel-state');

    button.addEventListener('click', () => {
      console.log(panelState);
      if (panel.classList.contains('accordion--show')) {
        panel.classList.remove('accordion--show');
        panelState.textContent = '+';
      } else {
        panel.classList.add('accordion--show');
        panelState.textContent = '-';
      }
    });
  });
}
