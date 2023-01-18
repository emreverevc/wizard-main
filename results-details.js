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

    var selection_indexes = window.location.href.split("?")[1];
    console.log(selection_indexes);
    checkNumbers(selection_indexes);

    $(".results-container").load("https://emreverevc.github.io/wizard-main/results-overview.html");
    document.querySelector(".results-container").style.opacity = '1';

// Add a click event listener to the expandable div
document.addEventListener("click", function(event) {
    if (event.target.classList.contains('left') || event.target.classList.contains('parameters-container') || event.target.classList.contains('parameters-content') 
    || event.target.classList.contains('parameters-title')) {
        document.getElementsByClassName('parameters-title')[0].classList.add("underlined");
        document.getElementsByClassName('parameters-options')[0].classList.add("show");
        document.getElementById('parameters-container').classList.add("expanded");
        document.getElementById('expand-parameters').style.visibility = "hidden";
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
        document.getElementById('expand-parameters').style.visibility = "visible";
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
        case 3:
            document.getElementById('results-container').innerHTML="";
            $(".results-container").load("https://emreverevc.github.io/wizard-main/results-funds.html");
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

function remove_fund(element) {
    element.parentElement.classList.add('off');
    element.parentElement.nextElementSibling.classList.add('off');

    setTimeout(function() {
        element.parentElement.parentElement.remove()
    }, 250); 

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

function checkIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            throw new Error(`Value at index ${i} is not an integer.`);
        }
    }
}


function findSimilarItems(newEntry, dataset) {

    let similarityScores = [];
    
    for (let i = 0; i < dataset.length; i++) {
    
      let item = dataset[i];
      
      let sumOfLeastSquares = 0.0;
      
      for (let j = 0; j < item.length; j++) {
              if (j == 1) {
            //compare sector
          for (let k = 0; k < newEntry[j].length; k++) {
              //console.log(newEntry[j][k])
            if (newEntry[j][k] == item[j]) {
                sumOfLeastSquares -= 200;
            }
          } 
        } else if (j == 3) {
            //compare attribute
            for (let w = 0; w < newEntry[j].length; w++) {
              if (newEntry[j][w] == item[j][0] || newEntry[j][w] == item[j][1]) {
                sumOfLeastSquares -= 100;
              }
          }
        } else {
            //compare other sftuff 
          sumOfLeastSquares += Math.pow(item[j] - newEntry[j], 2);
        }
      }
      similarityScores.push([i,sumOfLeastSquares]);
    }
    var sortedArray = similarityScores.sort(function(a, b) {
    return a[1] - b[1];
  });
  
    top_five_array = sortedArray.slice(0, 5).map(sortedArray => sortedArray[0]);
  
    return top_five_array;
  }
  
  let fund_characteristics_indexes = [[1,3,2,[10,10]],[1,1,2,[5,2]],[3,8,1,[3,5]],[3,2,1,[2,3]],[1,2,3,[4,2]],[1,4,3,[3,4]],[2,3,1,[1,3]],[1,7,3,[10,10]],[2,6,2,[2,4]],[2,1,2,[3,4]],[1,6,2,[3,3]],[1,2,1,[1,3]],[1,2,3,[10,10]],[2,5,3,[1,1]],[1,3,1,[5,4]],[1,2,3,[4,2]],[2,3,3,[2,2]],[1,4,3,[2,2]],[1,1,1,[3,4]],[1,2,3,[3,3]],[1,3,3,[3,4]],[1,8,2,[4,2]],[1,4,2,[3,2]],[1,3,3,[10,10]],[2,4,2,[2,2]],[2,3,3,[1,1]],[1,3,3,[5,2]],[1,5,1,[2,2]],[1,2,2,[2,3]],[1,1,2,[2,3]],[2,5,2,[5,3]],[1,1,2,[3,4]],[1,3,3,[4,2]],[1,3,3,[1,2]],[3,2,2,[2,5]],[1,8,3,[10,10]],[1,6,3,[10,10]],[2,5,3,[1,2]],[1,8,2,[2,2]],[1,7,2,[5,1]],[3,6,3,[1,2]],[1,5,3,[10,10]],[2,2,2,[2,1]],[1,8,3,[10,10]],[2,8,2,[2,5]],[1,3,3,[10,10]],[1,2,1,[4,3]],[1,6,3,[10,10]],[1,3,3,[10,10]],[1,8,3,[10,10]],[2,2,1,[1,2]],[2,5,3,[1,3]],[1,4,3,[10,10]],[1,2,2,[2,1]],[1,2,3,[10,10]],[1,5,3,[10,10]]];
  
  
  function getDictionaryEntry(dictionary, index) {
    let keys = Object.keys(dictionary);
    return dictionary[keys[index]].Sector;
  }

function checkNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i]) || !Number.isDecimal(arr[i])) {
            throw new Error(`Value at index ${i} is not an integer.`);
        }
    }
}