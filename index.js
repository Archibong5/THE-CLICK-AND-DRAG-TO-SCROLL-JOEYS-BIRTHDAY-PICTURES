const slider = document.querySelector('.chips');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
})

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
})


slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
})

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return // stop the function if it's not mousedown
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 15;
  slider.scrollLeft = scrollLeft - walk
  console.log({startX, x, walk})
})
