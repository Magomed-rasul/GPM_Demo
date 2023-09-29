
const blocks = document.querySelectorAll('.question');

blocks.forEach(block => {
  const .question__header = block.querySelector('.question__header');
  
  question__header.addEventListener('click', () => {
    block.classList.toggle('active');
  });
});
