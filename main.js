// document.addEventListener('DOMContentLoaded', () => {
//   const buttons = document.querySelectorAll('.selection-item');
//   buttons.forEach((button) => {
//     button.style.opacity = '0';
//     button.style.transform = 'translateY(-100px)';
//   });
//   let delay = 0;
//   buttons.forEach((button) => {
//     setTimeout(() => {
//       button.style.transition = 'all 0.5s ease-out';
//       button.style.opacity = '1';
//       button.style.transform = 'translateY(0)';
//     }, delay);
//     delay += 250;
//   });
// });

function selection_clicked(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
    element.childNodes[1].style.visibility = "hidden";
  } else {
    element.classList.add('active');
    element.childNodes[1].style.visibility = "visible";
  }
}

function expand_more_info() {
  growDiv = document.querySelector('.more-info-text')
  var wrapper = document.querySelector('.content-area');
  growDiv.style.height = wrapper.clientHeight + "px";
}