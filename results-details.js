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

window.onload = (event) => {

const expandableDiv = document.getElementById('parameters-container');
// Add a click event listener to the expandable div
expandableDiv.addEventListener("click", function() {
    document.getElementsByClassName('parameters-title')[0].classList.add("underlined");
    document.getElementsByClassName('parameters-options')[0].classList.add("show");
    expandableDiv.classList.add("expanded");
});

// Add a click event listener to the entire document
document.addEventListener("click", function(event) {
    // Check if the target of the click event is not the expandable div
    if (event.target !== expandableDiv && !event.target.classList.contains("parameter-item")){
        expandableDiv.classList.remove("expanded");
        document.getElementsByClassName('parameters-title')[0].classList.remove("underlined");
        document.getElementsByClassName('parameters-options')[0].classList.remove("show");
    }
});

};



function parameter_item_clicked(element) {
    element.classList.toggle("active");
}