export default function() {
  const header = document.querySelector('.page-header');

  const myScrollFunc = () => {
    const y = window.scrollY;
    y >= 5
      ? header.classList.add('page-header--scale')
      : header.classList.remove('page-header--scale');
  };
  window.addEventListener('scroll', myScrollFunc);
}
