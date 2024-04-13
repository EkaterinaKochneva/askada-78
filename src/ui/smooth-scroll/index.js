const smoothScroll = (element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    let anchor = element.getAttribute('href');
    let targetElement = document.querySelector(anchor);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  });
};
const smoothScrollList = Array.from(document.querySelectorAll(".smooth-scroll"));
smoothScrollList.forEach(smoothScroll);