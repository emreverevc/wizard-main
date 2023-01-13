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
  // $("#question-content").load("https://emreverevc.github.io/wizard-main/stage-questions.html");
};

var page_number = 0;


function selection_clicked(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
    element.childNodes[1].style.visibility = "hidden";
    for (const div in document.querySelectorAll('.selection-item')) {
      if (document.querySelectorAll('.selection-item')[div].classList.contains('active')) {
        document.querySelector('.selection-short-description').innerHTML = document.querySelectorAll('.selection-item')[div].textContent;
        document.querySelector('.selection-svg').innerHTML = document.querySelectorAll('.selection-item')[div].textContent;
        break
      }
      document.querySelector('.selection-short-description').innerHTML = 'Choose an option to learn more about it';
      document.querySelector('.selection-svg').innerHTML = 'Choose an option to learn more about it';
    }
  } else {
    element.classList.add('active');
    element.childNodes[1].style.visibility = "visible";
    document.querySelector('.selection-short-description').innerHTML = element.textContent;
    document.querySelector('.selection-svg').innerHTML = early_svg;
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
  
  page_number++;

  switch (page_number) {
    
    case 0:
      break;
    case 1:
      document.getElementById("question-content").innerHTML = "";
      $("#question-content").load("https://emreverevc.github.io/wizard-main/stage-questions.html");
      break;
    case 2:
      document.getElementById("question-content").innerHTML = "";
      $("#question-content").load("https://emreverevc.github.io/wizard-main/risk-return-questions.html");
      break;
    case 3:
      break;
    case 4:
      break;
  }

  var selections = [];
  for (var item in document.querySelectorAll('.selection-item')) {
    try {
      if (document.querySelectorAll('.selection-item')[item].classList.contains('active')) {
        selections.push(document.querySelectorAll('.selection-item')[item].id);
      }
    } catch {}
  }
}

function previous_page() {
  
  page_number--;

  switch (page_number) {
    
    case 0:
      break;
    case 1:
      document.getElementById("question-content").innerHTML = "";
      $("#question-content").load("https://emreverevc.github.io/wizard-main/stage-questions.html");
      break;
    case 2:
      document.getElementById("question-content").innerHTML = "";
      $("#question-content").load("https://emreverevc.github.io/wizard-main/risk-return-questions.html");
      break;
    case 3:
      break;
    case 4:
      break;
  }
}

var early_svg = '<svg width="250" height="250" viewBox="0 0 250 250" fill="none"><g id="Frame 1"><g id="Vector 6"><path d="M96.0031 140C117.029 140.707 122.89 147.335 123.503 169.5C114.173 170.269 109.338 169.296 102.003 163C94.7097 155.218 93.9159 150.072 96.0031 140Z" fill="#D9D9D9"/><path d="M133.003 169C135.188 140.359 143.453 130.632 171.003 130C170.397 158.052 162.495 166.968 133.003 169Z" fill="#D9D9D9"/></g><path id="Vector 2" d="M85 213.5C83.9737 208.525 84.4738 206.257 87 203C90.1468 199.192 93.0951 198.59 99.5 199C104.481 186.665 109.396 184.018 121 185C125.216 185.575 126.429 186.576 127.5 189C135.814 188.806 138.141 191.843 141 199C148.825 198.777 152.898 198.905 156 202.5C159.023 206.325 159.539 208.769 159 213.5M81 213.5H167.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector 3" d="M124 185.5C124.799 168.12 130.455 161.315 142 150" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector 4" d="M125.5 174L109 156.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><g id="Vector 5"><path d="M91.5 137.5C112.526 138.207 118.387 144.835 119 167C109.669 167.769 104.835 166.796 97.5 160.5C90.2066 152.718 89.4128 147.572 91.5 137.5Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M128.5 166.5C130.685 137.859 138.95 128.132 166.5 127.5C165.894 155.552 157.992 164.468 128.5 166.5Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>';