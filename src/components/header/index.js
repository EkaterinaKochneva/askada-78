const mobileMenu = () => {
  
  const body = document.querySelector('body');
  const mainMenu = document.querySelector('.header__menu');
  const header = document.querySelector('.header');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    header.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    mainMenu.classList.toggle('is-active');
    body.classList.toggle('faded');
    
  });

  const activateScrollHeader = () => {
    const scrollVal = 100;
    const classBg = 'is-bg';
    let scrollOffset = window.scrollY;  
    if (scrollOffset > scrollVal && !header.classList.contains(classBg)) {
      header.classList.add(classBg);
    } else if (scrollOffset <= scrollVal && header.classList.contains(classBg)) {
      header.classList.remove(classBg);
    }
  }
  window.addEventListener('scroll', activateScrollHeader);
  
}