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
  // $(".wizard-container").load("https://emreverevc.github.io/wizard-main/stage-questions.html");

  document.querySelector('#next-button').style.visibility = "hidden";
  // document.querySelector('#previous-button').style.visibility = "hidden";
  document.querySelector('.progress-bar').style.visibility = "hidden";

  document.getElementById("small-circle").setAttribute('style', 'transform: translateY(-2000px); transition: none;');
  document.getElementById("big-circle").setAttribute('style', 'transform: translateY(-2500px); transition: none;');
  document.querySelector(".welcome-screen").setAttribute('style', 'transform: scale(.5); opacity: 0; transition: none')

  setTimeout(function() {
    document.querySelector(".welcome-screen").setAttribute('style', 'transform: scale(1); opacity: 1; transition: transform 750ms ease-out, opacity 500ms ease-out; transition-delay:1000ms')
    document.getElementById("small-circle").setAttribute('style', 'transform: none;');
    document.getElementById("big-circle").setAttribute('style', 'transform: none;');
  }, 500); 

  
  
};

var page_number = 0;
var stage_selections = [];
var sector_selections = [];
var risk_return_selections = [];
var fund_attributes_selections = [];

var fund_attributes_rank = [];

function get_started() {
  document.querySelector('.welcome-screen').remove();
  next_page();
}



function selection_clicked(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
    element.childNodes[1].style.visibility = "hidden";
    for (const div in document.querySelectorAll('.selection-item')) {
      if (document.querySelectorAll('.selection-item')[div].classList.contains('active')) {
        [selection_description, selection_svg] = change_selection(document.querySelectorAll('.selection-item')[div].id);
        document.querySelector('.selection-short-description').innerHTML = selection_description;
        document.querySelector('.selection-svg').innerHTML = selection_svg;
        break
      }
      document.querySelector('.selection-short-description').innerHTML = 'Choose an option to learn more about it';
      document.querySelector('.selection-svg').innerHTML = 'Choose an option to learn more about it';
    }
  } else {
    element.classList.add('active');
    element.childNodes[1].style.visibility = "visible";
    
    [selection_description, selection_svg] = change_selection(element.id);
    
    
    document.querySelector('.selection-short-description').innerHTML = selection_description;
    document.querySelector('.selection-svg').innerHTML = selection_svg;
  }
}

function selection_clicked_attributes(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active');
    element.childNodes[1].style.visibility = "hidden";
    for (const div in document.querySelectorAll('.selection-item')) {
      if (document.querySelectorAll('.selection-item')[div].classList.contains('active')) {
        [selection_description, selection_svg] = change_selection(document.querySelectorAll('.selection-item')[div].id);
        document.querySelector('.selection-short-description').innerHTML = selection_description;
        document.querySelector('.selection-svg').innerHTML = selection_svg;
        break
      }
      document.querySelector('.selection-short-description').innerHTML = 'Choose an option to learn more about it';
      document.querySelector('.selection-svg').innerHTML = 'Choose an option to learn more about it';
    }
  } else {
    element.classList.add('active');
    element.childNodes[1].style.innerHTML = "";
    element.childNodes[1].style.innerHTML = one_svg;
    element.childNodes[1].style.visibility = "visible";
    
    
    [selection_description, selection_svg] = change_selection(element.id);
    
    
    document.querySelector('.selection-short-description').innerHTML = selection_description;
    document.querySelector('.selection-svg').innerHTML = selection_svg;
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
  
  document.getElementById("question-content").setAttribute('style', 'transform: scale(.5); opacity: 0;')
  
  var big_circle = document.getElementById("big-circle");
  big_circle.setAttribute('style', 'transform: translateX(-2500px); transition-delay:200ms;');

  var small_circle = document.getElementById("small-circle");
  small_circle.setAttribute('style', 'transform: translateX(-2500px); transition-delay: 300ms');
  


  switch (page_number) {
    
    case 0:
      break;
    case 1:
      setTimeout(function() {
        document.getElementById("question-content").innerHTML = "";
        $("#question-content").load("https://emreverevc.github.io/wizard-main/stage-questions.html");
        small_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
        big_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
      }, 800); 
      setTimeout(function() {
        document.getElementById("question-content").setAttribute('style', 'transform: none; transition-delay:1000ms')
        small_circle.setAttribute('style', 'transform: none;');
        big_circle.setAttribute('style', 'transform: none;');
        document.querySelector('#next-button').style.visibility = "visible";
        document.querySelector('.progress-bar').style.visibility = "visible";
      }, 1100); 
      break;
    case 2:

      document.querySelector('#previous-button').style.visibility = "visible";
      for (var item in document.querySelectorAll('.selection-item')) {
        try {
          if (document.querySelectorAll('.selection-item')[item].classList.contains('active')) {
            stage_selections.push(document.querySelectorAll('.selection-item')[item].id);
          }
        } catch {}
      }

      document.getElementById("sector-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("gold-bar").style.width = "320";

      
      setTimeout(function() {
        document.getElementById("question-content").innerHTML = "";
        $("#question-content").load("https://emreverevc.github.io/wizard-main/sector-questions.html");
        small_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
        big_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
      }, 800); 
      setTimeout(function() {
        document.getElementById("question-content").setAttribute('style', 'transform: none; transition-delay:1000ms')
        small_circle.setAttribute('style', 'transform: none;');
        big_circle.setAttribute('style', 'transform: none;');
      }, 1100); 

      break;
    case 3:

      for (var item in document.querySelectorAll('.selection-item')) {
        try {
          if (document.querySelectorAll('.selection-item')[item].classList.contains('active')) {
            sector_selections.push(document.querySelectorAll('.selection-item')[item].id);
          }
        } catch {}
      }

      document.getElementById("risk-return-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("gold-bar").style.width = "520";

      setTimeout(function() {
        document.getElementById("question-content").innerHTML = "";
        $("#question-content").load("https://emreverevc.github.io/wizard-main/risk-return-questions.html");
        small_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
        big_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
      }, 800); 
      setTimeout(function() {
        document.getElementById("question-content").setAttribute('style', 'transform: none; transition-delay:1000ms')
        small_circle.setAttribute('style', 'transform: none;');
        big_circle.setAttribute('style', 'transform: none;');
      }, 1100); 

      break;
    case 4:

      for (var item in document.querySelectorAll('.selection-item')) {
        try {
          if (document.querySelectorAll('.selection-item')[item].classList.contains('active')) {
            risk_return_selections.push(document.querySelectorAll('.selection-item')[item].id);
          }
        } catch {}
      }

      document.getElementById("r-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("gold-bar").style.width = "650";

      setTimeout(function() {
        document.getElementById("question-content").innerHTML = "";
        $("#question-content").load("https://emreverevc.github.io/wizard-main/fund-attributes-questions.html");
        small_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
        big_circle.setAttribute('style', 'transform: translateX(2000px); transition: none;');
      }, 800); 
      setTimeout(function() {
        document.getElementById("question-content").setAttribute('style', 'transform: none; transition-delay:1000ms')
        small_circle.setAttribute('style', 'transform: none;');
        big_circle.setAttribute('style', 'transform: none;');
      }, 1100); 
      break;

      break;
  }

  console.log(stage_selections);
  console.log(sector_selections);
  console.log(risk_return_selections);
  
}

function previous_page() {
  
  page_number--;

  switch (page_number) {
    case 0:
      break;
    case 1:
      document.querySelector('#previous-button').style.visibility = "hidden";
      document.getElementById("stage-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("sector-progress-bar").style.fill = "#D9D9D9";
      document.getElementById("risk-return-progress-bar").style.fill = "#D9D9D9";
      document.getElementById("r-progress-bar").style.fill = "#D9D9D9";
      document.getElementById("gold-bar").style.width = "137";

      document.getElementById("question-content").innerHTML = "";
      $("#question-content").load("https://emreverevc.github.io/wizard-main/stage-questions.html");
      break;
    case 2:

      document.getElementById("stage-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("sector-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("risk-return-progress-bar").style.fill = "#D9D9D9";
      document.getElementById("r-progress-bar").style.fill = "#D9D9D9";
      document.getElementById("gold-bar").style.width = "320";

      document.getElementById("question-content").innerHTML = "";
      $("#question-content").load("https://emreverevc.github.io/wizard-main/sector-questions.html");
      break;
      
    case 3:

      document.getElementById("stage-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("sector-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("risk-return-progress-bar").style.fill = "#E1BD7D";
      document.getElementById("r-progress-bar").style.fill = "#D9D9D9";
      document.getElementById("gold-bar").style.width = "520";

      document.getElementById("question-content").innerHTML = "";
      $("#question-content").load("https://emreverevc.github.io/wizard-main/risk-return-questions.html");
      break;
    case 4:
      break;
  }
}

function change_selection(selection) {
  var description = "";
  var svg = "";
  switch (selection) {
    case "Idea":
      description = "Companies that are just starting out";
      svg = idea_svg;
      break;
    case "Early":
      description = "Companies that are a little further along";
      svg = early_svg;
      break;
    case "Growth":
      description = "Comapnies that are bigger";
      svg = growth_svg;
      break;

    case "Low":
      description = "Companies that are just starting out";
      svg = early_svg;
      break;
    case "Moderate":
      description = "Companies that are just starting out";
      svg = idea_svg;
      break;
    case "High":
      description = "Companies that are just starting out";
      svg = idea_svg;
      break;

    case "Consumer":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    case "Enterprise":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    case "Deep-Tech":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    case "FinTech":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    case "Impact":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    case "Life-Sciences":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    case "Web3":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    case "Generalist":
      description = "Companies that are just starting out";
      svg = sector_svg;
      break;
    
      
  }

  return [description, svg];

}

var idea_svg = '<svg width="200" height="200" viewBox="0 0 200 200" fill="none"><g id="Frame 1"><g id="Vector 6"><path d="M96.0031 140C117.029 140.707 122.89 147.335 123.503 169.5C114.173 170.269 109.338 169.296 102.003 163C94.7097 155.218 93.9159 150.072 96.0031 140Z" fill="#D9D9D9"/><path d="M133.003 169C135.188 140.359 143.453 130.632 171.003 130C170.397 158.052 162.495 166.968 133.003 169Z" fill="#D9D9D9"/></g><path id="Vector 2" d="M85 213.5C83.9737 208.525 84.4738 206.257 87 203C90.1468 199.192 93.0951 198.59 99.5 199C104.481 186.665 109.396 184.018 121 185C125.216 185.575 126.429 186.576 127.5 189C135.814 188.806 138.141 191.843 141 199C148.825 198.777 152.898 198.905 156 202.5C159.023 206.325 159.539 208.769 159 213.5M81 213.5H167.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector 3" d="M124 185.5C124.799 168.12 130.455 161.315 142 150" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector 4" d="M125.5 174L109 156.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><g id="Vector 5"><path d="M91.5 137.5C112.526 138.207 118.387 144.835 119 167C109.669 167.769 104.835 166.796 97.5 160.5C90.2066 152.718 89.4128 147.572 91.5 137.5Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M128.5 166.5C130.685 137.859 138.95 128.132 166.5 127.5C165.894 155.552 157.992 164.468 128.5 166.5Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>';
var early_svg ='<svg width="200" height="200" viewBox="0 0 200 200" fill="none"></svg>';
var growth_svg ='<svg width="200" height="200" viewBox="0 0 200 200" fill="none"></svg>';

var low_svg ='<svg width="200" height="200" viewBox="0 0 200 200" fill="none"></svg>';
var moderate_svg ='<svg width="200" height="200" viewBox="0 0 200 200" fill="none"></svg>';
var high_svg ='<svg width="200" height="200" viewBox="0 0 200 200" fill="none"></svg>';

var sector_svg ='<svg width="130" height="130" viewBox="0 0 130 130" fill="none"></svg>';

var one_svg = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.45252V19.8113H1.4225V1.55879H18.61L20.0325 0.142548H0V21.2275H21.1781V6.03629L19.755 7.45252Z" fill="white"/><path d="M7.2041 14.9258H9.72656V7.19141L6.97559 8.95801L5.92969 7.04199L10.21 4.30859H12.5127V14.9258H14.9473V17H7.2041V14.9258Z" fill="white"/></svg>';
var two_svg = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M5.75391 14.6602C7.30078 13.4121 8.47266 12.4336 9.26953 11.7246C10.0664 11.0157 10.6904 10.3506 11.1416 9.72952C11.5928 9.10257 11.8184 8.50784 11.8184 7.94534C11.8184 7.39456 11.625 6.95804 11.2383 6.63577C10.8574 6.30765 10.3477 6.14359 9.70898 6.14359C9.42188 6.14359 9.15527 6.16995 8.90918 6.22269C8.66309 6.26956 8.46387 6.31937 8.31152 6.3721C8.16504 6.42484 8.07422 6.45706 8.03906 6.46878L7.86328 7.99808H5.96484L5.87695 4.67581C5.98242 4.64066 6.23438 4.56448 6.63281 4.4473C7.03125 4.33011 7.52051 4.21878 8.10059 4.11331C8.68652 4.00784 9.2666 3.95511 9.84082 3.95511C11.3994 3.95511 12.6064 4.22757 13.4619 4.77249C14.3232 5.31741 14.7539 6.22562 14.7539 7.4971C14.7539 8.29984 14.5576 9.07034 14.165 9.80862C13.7783 10.5469 13.2334 11.2793 12.5303 12.0059C11.8271 12.7325 10.8691 13.6172 9.65625 14.6602H15.0615V16.8575H5.75391V14.6602Z" fill="white"/></svg>';
var three_svg = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M14.4814 7.18948C14.4814 7.95706 14.2881 8.61038 13.9014 9.14944C13.5205 9.68265 12.9639 10.043 12.2314 10.2305C12.9873 10.4004 13.5967 10.7461 14.0596 11.2676C14.5225 11.7891 14.7539 12.3926 14.7539 13.0782C14.7539 14.0039 14.5107 14.7657 14.0244 15.3633C13.5381 15.961 12.9023 16.3975 12.1172 16.6729C11.3379 16.9424 10.4941 17.0772 9.58594 17.0772C8.90039 17.0772 8.26172 17.0039 7.66992 16.8575C7.08398 16.711 6.59473 16.5557 6.20215 16.3916C5.81543 16.2217 5.62207 16.125 5.62207 16.1016L6.37793 14.1241C6.45996 14.1592 6.65918 14.2383 6.97559 14.3614C7.29785 14.4785 7.69629 14.5957 8.1709 14.7129C8.64551 14.8242 9.11719 14.8799 9.58594 14.8799C10.3184 14.8799 10.8809 14.7246 11.2734 14.4141C11.6719 14.0977 11.8711 13.6407 11.8711 13.043C11.8711 12.4922 11.6484 12.0616 11.2031 11.751C10.7578 11.4346 10.1279 11.2764 9.31348 11.2764H7.90723V9.38675H9.40137C10.1455 9.38675 10.7227 9.24026 11.1328 8.9473C11.543 8.65433 11.748 8.2178 11.748 7.63773C11.748 7.18069 11.5723 6.81741 11.2207 6.54788C10.875 6.27835 10.3887 6.14359 9.76172 6.14359C9.49805 6.14359 9.23438 6.16702 8.9707 6.2139C8.70703 6.25491 8.49023 6.29593 8.32031 6.33694C8.15625 6.37796 8.05078 6.40433 8.00391 6.41605L7.81934 7.85745H5.92969L5.8418 4.71097C5.95898 4.67581 6.22559 4.59671 6.6416 4.47366C7.05762 4.35062 7.56445 4.23343 8.16211 4.1221C8.75977 4.01077 9.32227 3.95511 9.84961 3.95511C12.9316 3.95511 14.4756 5.03323 14.4814 7.18948Z" fill="white"/></svg>';
var four_svg = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M13.7695 16.8575H10.9922V14.2998H5.39355L5.12988 12.1817L6.74707 9.79984C8.16504 7.70218 9.50391 5.73343 10.7637 3.89359L13.7695 4.16605V12.085H15.5713V14.2998H13.7695V16.8575ZM7.82812 12.085H11.0273V7.3389L7.82812 12.085Z" fill="white"/></svg>';
var five_svg = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M6.54492 14.1241C6.62695 14.1592 6.82617 14.2383 7.14258 14.3614C7.46484 14.4785 7.86035 14.5957 8.3291 14.7129C8.79785 14.8242 9.26367 14.8799 9.72656 14.8799C10.3242 14.8799 10.8164 14.7217 11.2031 14.4053C11.5898 14.083 11.7832 13.6407 11.7832 13.0782C11.7832 12.4043 11.502 11.9151 10.9395 11.6104C10.3828 11.3057 9.54785 11.1534 8.43457 11.1534H6.49219L6.7998 4.16605H14.1738L14.1211 6.38089H9.34863L9.22559 9.07913C10.9658 9.07913 12.3252 9.40726 13.3037 10.0635C14.2822 10.7139 14.7715 11.628 14.7715 12.8057C14.7715 13.6963 14.5518 14.4639 14.1123 15.1084C13.6729 15.7471 13.0928 16.2364 12.3721 16.5762C11.6572 16.9102 10.8721 17.0772 10.0166 17.0772C9.2959 17.0772 8.61914 17.0039 7.98633 16.8575C7.35938 16.711 6.83203 16.5557 6.4043 16.3916C5.98242 16.2217 5.77148 16.125 5.77148 16.1016L6.54492 14.1241Z" fill="white"/></svg>'