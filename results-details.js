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

window.onload = (event) => {

    $(".results-container").load("https://emreverevc.github.io/wizard-main/results-overview.html");

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

};

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