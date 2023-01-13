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

window.onload = (event) => {
  $("#y").load("https://emreverevc.github.io/wizard-main/stage-questions.html");
};


function selection_clicked(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
    element.childNodes[1].style.visibility = "hidden";
    for (const div in document.querySelectorAll('.selection-item')) {
      if (document.querySelectorAll('.selection-item')[div].classList.contains('active')) {
        document.querySelector('.selection-svg').innerHTML = document.querySelectorAll('.selection-item')[div].textContent;
        document.querySelector('.selection-short-description').innerHTML = document.querySelectorAll('.selection-item')[div].textContent;
        break
      }
      document.querySelector('.selection-svg').innerHTML = 'Choose an option to learn more about it';
      document.querySelector('.selection-short-description').innerHTML = 'Choose an option to learn more about it';
    }
  } else {
    element.classList.add('active');
    element.childNodes[1].style.visibility = "visible";
    document.querySelector('.selection-svg').innerHTML = element.textContent;
    document.querySelector('.selection-short-description').innerHTML = element.textContent;
  }
}

function expand_more_info() {
  expandDiv = document.querySelector('.more-info-text');
  var wrapper = document.querySelector('.content-area');
  expandDiv.style.height = wrapper.clientHeight + "px";
  document.querySelectorAll('.learn-more')[0].style.visibility = "hidden";
}

function collapse_more_info() {
  collapseDiv = document.querySelector('.more-info-text');
  collapseDiv.style.height = "0px";
  setTimeout(function() {
    document.querySelectorAll('.learn-more')[0].style.visibility = "visible";
  }, 500); 
}

function next_page() {
  var selections = [];
  for (var item in document.querySelectorAll('.selection-item')) {
    try {
      if (document.querySelectorAll('.selection-item')[item].classList.contains('active')) {
        selections.push(document.querySelectorAll('.selection-item')[item].id);
      }
    } catch {}
  }
  $("#y").load("https://emreverevc.github.io/wizard-main/risk-return-questions.html");
}