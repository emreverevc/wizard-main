var navbar_sticky = true;
window.addEventListener("scroll", function() {

    var lastAnalysisBox = document.getElementById("last-extraspace");
    var navigationBox = document.getElementsByClassName("navigation-box")[0];
    var lastAnalysisBoxTop = lastAnalysisBox.getBoundingClientRect().top;
    var lastAnalysisBoxBottom = lastAnalysisBox.getBoundingClientRect().bottom;
    var screenHeight = window.innerHeight;
    if (navbar_sticky) {
        if (lastAnalysisBoxTop < screenHeight && lastAnalysisBoxBottom > 0) {
            navigationBox.setAttribute('style', 'position: absolute;');
            navigationBox.style.top = navigationBox.offsetTop + (document.documentElement.scrollTop || document.body.scrollTop) + "px";
            navbar_sticky = false;
        }
    } else {
        if (lastAnalysisBoxTop < screenHeight && lastAnalysisBoxBottom > 0) {
        } else {
            navbar_sticky = true;
            navigationBox.setAttribute('style', 'position: sticky; top: 20%');
        }
    }   
});

var page_number = 1;

requestAnimationFrame(function() {
    // your code here
    $(".results-container").load("https://emreverevc.github.io/wizard-main/results-overview.html");
    document.querySelector(".results-container").style.opacity = '1';

// Add a click event listener to the expandable div
document.addEventListener("click", function(event) {
    if (event.target.classList.contains('left') || event.target.classList.contains('parameters-container') || event.target.classList.contains('parameters-content') 
    || event.target.classList.contains('parameters-title')) {
        document.getElementsByClassName('parameters-title')[0].classList.add("underlined");
        document.getElementsByClassName('parameters-options')[0].classList.add("show");
        document.getElementById('parameters-container').classList.add("expanded");
    }
});
// Add a click event listener to the entire document
document.addEventListener("click", function(event) {
    // Check if the target of the click event is not the expandable div
    if (!event.target.classList.contains('left') && !event.target.classList.contains('parameters-container') && !event.target.classList.contains('parameters-content') 
    && !event.target.classList.contains('parameters-title') && !event.target.classList.contains('parameters-options')  && !event.target.classList.contains('parameters-subtitle')
    && !event.target.classList.contains('parameters-row') && !event.target.classList.contains('parameter-item')){
        document.getElementById('parameters-container').classList.remove("expanded");
        document.getElementsByClassName('parameters-title')[0].classList.remove("underlined");
        document.getElementsByClassName('parameters-options')[0].classList.remove("show");
    }
});

});

function parameter_item_clicked(element) {
    element.classList.toggle("active");
}

function next_page() {
    page_number++;

    switch(page_number) {
        case 1:
            break;
        case 2:
            document.getElementById('results-container').innerHTML="";
            $(".results-container").load("https://emreverevc.github.io/wizard-main/results-details-details.html");
            break;
    }
}

function previous_page() {
    page_number--;

    switch(page_number) {
        case 1:
            $(".results-container").load("https://emreverevc.github.io/wizard-main/results-overview.html");
            break;
        case 2:
            document.getElementById('results-container').innerHTML="";
            $(".results-container").load("https://emreverevc.github.io/wizard-main/results-details-details.html");
            break;
        case 3:
            document.getElementById('results-container').innerHTML="";
            $(".results-container").load("https://emreverevc.github.io/wizard-main/results-funds.html");
            break;
            
    }
}

function expand_row(element) {
    element.classList.toggle("fund-selected");
    if (element.classList.contains("fund-selected")){
        element.lastElementChild.setAttribute('style', 'transform: rotate(180deg)')
        element.parentElement.nextElementSibling.firstElementChild.style.height = element.parentElement.nextElementSibling.firstElementChild.scrollHeight + "px";
        element.parentElement.nextElementSibling.firstElementChild.style.border = "1px solid black";
        element.parentElement.nextElementSibling.firstElementChild.style.borderTop = "0";
    } else {
        element.lastElementChild.setAttribute('style', 'transform: none')
        element.parentElement.nextElementSibling.firstElementChild.style.height = "0";
        // element.parentElement.nextElementSibling.firstElementChild.style.border = "0";
        // element.parentElement.nextElementSibling.firstElementChild.style.borderTop = "0";
    }
}