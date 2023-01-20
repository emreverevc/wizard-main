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
var selection_indexes = '';

requestAnimationFrame(function() {
    // your code here

    selection_indexes = JSON.parse(window.location.href.split("?")[1]);
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
            setTimeout(function() {
                generatedFundsList(selection_indexes)
              }, 250); 
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
            setTimeout(function() {
                generatedFundsList(selection_indexes)
              }, 250); 
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

function generatedFundsList(selection_array) {
    var funds_list_html = document.getElementById('funds-list-container');
    let fund_characteristics_indexes = [[1,3,2,[10,10]],[1,1,2,[5,2]],[3,8,1,[3,5]],[3,2,1,[2,3]],[1,2,3,[4,2]],[1,4,3,[3,4]],[2,3,1,[1,3]],[1,7,3,[10,10]],[2,6,2,[2,4]],[2,1,2,[3,4]],[1,6,2,[3,3]],[1,2,1,[1,3]],[1,2,3,[10,10]],[2,5,3,[1,1]],[1,3,1,[5,4]],[1,2,3,[4,2]],[2,3,3,[2,2]],[1,4,3,[2,2]],[1,1,1,[3,4]],[1,2,3,[3,3]],[1,3,3,[3,4]],[1,8,2,[4,2]],[1,4,2,[3,2]],[1,3,3,[10,10]],[2,4,2,[2,2]],[2,3,3,[1,1]],[1,3,3,[5,2]],[1,5,1,[2,2]],[1,2,2,[2,3]],[1,1,2,[2,3]],[2,5,2,[5,3]],[1,1,2,[3,4]],[1,3,3,[4,2]],[1,3,3,[1,2]],[3,2,2,[2,5]],[1,8,3,[10,10]],[1,6,3,[10,10]],[2,5,3,[1,2]],[1,8,2,[2,2]],[1,7,2,[5,1]],[3,6,3,[1,2]],[1,5,3,[10,10]],[2,2,2,[2,1]],[1,8,3,[10,10]],[2,8,2,[2,5]],[1,3,3,[10,10]],[1,2,1,[4,3]],[1,6,3,[10,10]],[1,3,3,[10,10]],[1,8,3,[10,10]],[2,2,1,[1,2]],[2,5,3,[1,3]],[1,4,3,[10,10]],[1,2,2,[2,1]],[1,2,3,[10,10]],[1,5,3,[10,10]]];
    var funds_index_list = findSimilarItems(selection_array, fund_characteristics_indexes);
    let funds_array = [{FundName: "541 Cornerstone Fund I" ,Sector : "Deep Tech"},{FundName: "Coyote Ventures Fund I" ,Sector : "Consumer"},{FundName: "Blitzscaling Ventures Fund I" ,Sector : "Agnostic"},{FundName: "B37 Ventures Fund II" ,Sector : "Enterprise"},{FundName: "Preface Ventures Fund III" ,Sector : "Enterprise"},{FundName: "Flex Capital Fund I" ,Sector : "FinTech"},{FundName: "Benhamou Global Ventures Opportunity Fund II" ,Sector : "Deep Tech"},{FundName: "Chainforest Fund I" ,Sector : "Web3"},{FundName: "Plum Alley Ventures Fund I" ,Sector : "Life Sciences"},{FundName: "Recharge Thematic Ventures Fund I" ,Sector : "Consumer"},{FundName: "Cortado Ventures II" ,Sector : "Life Sciences"},{FundName: "Illuminate Ventures III" ,Sector : "Enterprise"},{FundName: "Ganas Ventures Fund I" ,Sector : "Enterprise"},{FundName: "First Bight Fund I" ,Sector : "Impact"},{FundName: "Recursive Ventures Fund III" ,Sector : "Deep Tech"},{FundName: "Incisive Ventures Fund I" ,Sector : "Enterprise"},{FundName: "Sancus Ventures" ,Sector : "Deep Tech"},{FundName: "Feld Ventures Fund I" ,Sector : "FinTech"},{FundName: "Maven Ventures Fund IV" ,Sector : "Consumer"},{FundName: "Designer Fund III" ,Sector : "Enterprise"},{FundName: "GFT Ventures I" ,Sector : "Deep Tech"},{FundName: "Wayfinder Ventures II" ,Sector : "Agnostic"},{FundName: "Fiat Ventures Fund I" ,Sector : "FinTech"},{FundName: "Silicon Roundabout Ventures Fund I" ,Sector : "Deep Tech"},{FundName: "AFG Partners I" ,Sector : "FinTech"},{FundName: "Impact X Capital Fund" ,Sector : "Deep Tech"},{FundName: "Supernode Global Fund II" ,Sector : "Deep Tech"},{FundName: "Better Ventures Fund IV" ,Sector : "Impact"},{FundName: "REFASHIOND Fund I" ,Sector : "Enterprise"},{FundName: "Alpine VC Fund I" ,Sector : "Consumer"},{FundName: "Beyond Capital Ventures Fund II" ,Sector : "Impact"},{FundName: "Looking Glass Capital Fund II" ,Sector : "Consumer"},{FundName: "Starship Ventures Fund II" ,Sector : "Deep Tech"},{FundName: "ICI Fund II" ,Sector : "Deep Tech"},{FundName: "Capital Midwest IV" ,Sector : "Enterprise"},{FundName: "Geek Ventures Fund I" ,Sector : "Agnostic"},{FundName: "Linchpin Health Ventures Fund I" ,Sector : "Life Sciences"},{FundName: "SNØCAP" ,Sector : "Impact"},{FundName: "Unshackled Fund III" ,Sector : "Agnostic"},{FundName: "Progression Fund II" ,Sector : "Web3"},{FundName: "7G BioVentures Fund I" ,Sector : "Life Sciences"},{FundName: "Nomadic VP Fund I LP" ,Sector : "Impact"},{FundName: "Grayscale Ventures Fund III" ,Sector : "Enterprise"},{FundName: "Supply Change Capital Fund I" ,Sector : "Agnostic"},{FundName: "Fortius Ventures I" ,Sector : "Agnostic"},{FundName: "Coalition Fund I" ,Sector : "Deep Tech"},{FundName: "AmplifyLA Fund V" ,Sector : "Enterprise"},{FundName: "Climate Capital Bio Fund I" ,Sector : "Life Sciences"},{FundName: "91 Ventures" ,Sector : "Deep Tech"},{FundName: "Palumni VC" ,Sector : "Agnostic"},{FundName: "Brex Technology Opportunities Fund I" ,Sector : "Enterprise"},{FundName: "Overture Climate Fund I" ,Sector : "Impact"},{FundName: "Funnder VC Fund I" ,Sector : "FinTech"},{FundName: "VITALIZE VC Fund II" ,Sector : "Enterprise"},{FundName: "Atman Capital Fund I" ,Sector : "Enterprise"},{FundName: "Mission One Capital Fund I" ,Sector : "Impact"}];
    
    for (i = 0; i < funds_index_list.length; i++) {
        var fund_info = getDictionaryEntry(funds_array, funds_index_list[i]);
        var heatmap_svg = generate_heatmap(fund_info);
        var whole_fund_container = document.createElement('div');
        whole_fund_container.className = "whole-fund-container";
        whole_fund_container.innerHTML = `<div class="fund-whole-row">
                                            <div class="fund-row" onclick="expand_row(this)">
                                            <div class="fund-logo-container">
                                                <div class="fund-logo" style="background: url(https://images.squarespace-cdn.com/content/v1/62b5eda255f9940094bf5de2/b3c81f34-7419-479a-ac53-5b89c18d5571/No+background.png); background-size: cover;"></div>
                                            </div>
                                            <div class="fund-name">${fund_info.FundName}</div>
                                            <div class="expand-collapse">
                                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7701 3.70127L13.8983 14.9126C13.2312 15.6006 12.1495 15.6006 11.4824 14.9126L0.610531 3.70127C-0.0566196 3.01329 -0.0566196 1.89785 0.610531 1.20986C1.27768 0.521883 2.35934 0.521883 3.02649 1.20986L12.6903 11.1755L22.3542 1.20986C23.0213 0.521883 24.103 0.521883 24.7701 1.20986C25.4373 1.89785 25.4373 3.01329 24.7701 3.70127Z" fill="black" />
                                                </svg>
                                            </div>
                                            </div>
                                            <div class="remove-fund" onclick="remove_fund(this)">
                                                <svg width="30" height="30" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <ellipse cx="19.3203" cy="19.6123" rx="18.6797" ry="19" fill="#B90000" />
                                                    <path d="M13.4085 26.9183L17.7885 19.8383L13.3485 12.9183H16.2885L19.4285 17.7983L22.3085 12.9183H25.1885L20.8085 19.9583L25.2885 26.9183H22.3485L19.1685 21.9783L16.2885 26.9183H13.4085Z" fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="fund-whole-row">
                                            <div class="fund-more-info-container">
                                            <div class="pill-row">
                                                <div class="location">Location:&emsp;<span class="pill">Washington, DC</span></div>
                                                <div class="Stages">Stages:&emsp;
                                                <span class="pill">Pre-Seed</span>&emsp;
                                                </div>
                                                <div class="Sector">Sector:&emsp;<span class="pill">${fund_info.Sector}</span></div>
                                            </div>
                                            <div class="pill-row">
                                                <div class="keywords">
                                                Keywords:&emsp;
                                                <span class="pill">BioTech</span>&emsp;
                                                <span class="pill">ClimateTech</span>&emsp;
                                                <span class="pill">Sustainability</span>&emsp;
                                                </div>
                                            </div>
                                            <div class="rating-info-row">
                                                <div class="rating-grid" style="height: 250px;">
                                                    ${heatmap_svg}                                    
                                                </div>
                                                <div class="attributes-container">                                   
                                                    <div class="attributes-title">
                                                        Top Attributes
                                                    </div>
                                                    <div class="attributes-card">
                                                        <div class="attribute-name">Community</div>
                                                        <div class="attribute-text">&bull; Climate Capital is a community of 40+ leading and emerging climate investors &bull; The firm also has 2,200+ LPs across the Climate Capital Collective syndicate who are empowered as scouts and help fulfill founder requests.</div>
                                                    </div>
                                                    <div class="attributes-toggle">
                                                    <svg width="101" height="30" viewBox="0 0 101 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="87.5" cy="15" r="10.5" fill="#182C50"/>
                                                        <path d="M94.0799 15.7806C94.4704 15.3901 94.4704 14.7569 94.0799 14.3664L87.7159 8.00242C87.3254 7.61189 86.6923 7.61189 86.3017 8.00242C85.9112 8.39294 85.9112 9.02611 86.3017 9.41663L91.9586 15.0735L86.3017 20.7303C85.9112 21.1209 85.9112 21.754 86.3017 22.1446C86.6923 22.5351 87.3254 22.5351 87.7159 22.1446L94.0799 15.7806ZM81.1853 16.0735H93.3728V14.0735H81.1853V16.0735Z" fill="white"/>
                                                        <circle cx="13.5" cy="15" r="10.5" fill="#182C50"/>
                                                        <path d="M6.4782 15.7805C6.08767 15.3899 6.08767 14.7568 6.4782 14.3663L12.8422 8.0023C13.2327 7.61177 13.8658 7.61177 14.2564 8.0023C14.6469 8.39282 14.6469 9.02599 14.2564 9.41651L8.59952 15.0734L14.2564 20.7302C14.6469 21.1207 14.6469 21.7539 14.2564 22.1444C13.8658 22.535 13.2327 22.535 12.8422 22.1444L6.4782 15.7805ZM19.3728 16.0734H7.1853V14.0734H19.3728V16.0734Z" fill="white"/>
                                                        <circle cx="64.8043" cy="15.4613" r="4.46133" fill="#182C50" fill-opacity="0.48"/>
                                                        <circle cx="50.633" cy="15.4613" r="4.46133" fill="#919AAB"/>
                                                        <circle cx="36.4613" cy="15.4613" r="4.46133" fill="#182C50"/>
                                                    </svg>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="fund-whole-row">
                                                <div class="full-report" onclick="window.open('https://ratings.reverevc.com/view/672687553/', '_blank');">
                                                    Read the full Report
                                                </div>
                                            </div>
                                            </div>
                                        </div>`;
        funds_list_html.appendChild(whole_fund_container);
    }
}


// brainz 

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
  
  
  function getDictionaryEntry(dictionary, index) {
    let keys = Object.keys(dictionary);
    return dictionary[keys[index]];
  }

  function checkNumbers(listOfArrays) {
    for (let i = 0; i < listOfArrays.length; i++) {
      let array = listOfArrays[i];
      for (let j = 0; j < array.length; j++) {
        if (typeof array[j] !== 'number') {
          throw new Error(`Value at index [${i}, ${j}] is not a number.`);
        } else {
          console.log("all good")
        }
      }
    }
  }

//   ugh
function generate_heatmap(fund_info) {
    var heatmap_svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" zoomAndPan="magnify" viewBox="0 0 187.5 187.499992" height="250" preserveAspectRatio="xMidYMid meet" version="1.0">
                <defs>
                    <g />
                    <clipPath id="9072db4d9f">
                    <path d="M 66.382812 22.660156 L 95.363281 22.660156 L 95.363281 51.636719 L 66.382812 51.636719 Z M 66.382812 22.660156 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="8de3f6cbc7">
                    <path d="M 94.882812 22.660156 L 123.859375 22.660156 L 123.859375 51.636719 L 94.882812 51.636719 Z M 94.882812 22.660156 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="f7b27f59cc">
                    <path d="M 122.976562 22.660156 L 151.953125 22.660156 L 151.953125 51.636719 L 122.976562 51.636719 Z M 122.976562 22.660156 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="63c4d533ae">
                    <path d="M 151.59375 22.660156 L 180.570312 22.660156 L 180.570312 51.636719 L 151.59375 51.636719 Z M 151.59375 22.660156 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="bbbdd2b21d">
                    <path d="M 66.382812 50.886719 L 95.363281 50.886719 L 95.363281 79.863281 L 66.382812 79.863281 Z M 66.382812 50.886719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="f89af6767c">
                    <path d="M 94.882812 50.886719 L 123.859375 50.886719 L 123.859375 79.863281 L 94.882812 79.863281 Z M 94.882812 50.886719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="5c47508ff6">
                    <path d="M 122.976562 50.886719 L 151.953125 50.886719 L 151.953125 79.863281 L 122.976562 79.863281 Z M 122.976562 50.886719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="329f4cb1fa">
                    <path d="M 151.59375 50.886719 L 180.570312 50.886719 L 180.570312 79.863281 L 151.59375 79.863281 Z M 151.59375 50.886719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="cf999a3e42">
                    <path d="M 66.382812 79.40625 L 95.363281 79.40625 L 95.363281 108.386719 L 66.382812 108.386719 Z M 66.382812 79.40625 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="bba5af3304">
                    <path d="M 94.882812 79.40625 L 123.859375 79.40625 L 123.859375 108.386719 L 94.882812 108.386719 Z M 94.882812 79.40625 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="dd11fb5f7b">
                    <path d="M 122.976562 79.40625 L 151.953125 79.40625 L 151.953125 108.386719 L 122.976562 108.386719 Z M 122.976562 79.40625 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="25184594ab">
                    <path d="M 151.59375 79.40625 L 180.570312 79.40625 L 180.570312 108.386719 L 151.59375 108.386719 Z M 151.59375 79.40625 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="84b9e97185">
                    <path d="M 66.382812 107.636719 L 95.363281 107.636719 L 95.363281 136.613281 L 66.382812 136.613281 Z M 66.382812 107.636719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="e9a3d3f0e2">
                    <path d="M 94.882812 107.636719 L 123.859375 107.636719 L 123.859375 136.613281 L 94.882812 136.613281 Z M 94.882812 107.636719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="99f0205bf3">
                    <path d="M 122.976562 107.636719 L 151.953125 107.636719 L 151.953125 136.613281 L 122.976562 136.613281 Z M 122.976562 107.636719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="488addd6fd">
                    <path d="M 151.59375 107.636719 L 180.570312 107.636719 L 180.570312 136.613281 L 151.59375 136.613281 Z M 151.59375 107.636719 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="039eb87dc2">
                    <path d="M 66.382812 135.863281 L 95.363281 135.863281 L 95.363281 164.839844 L 66.382812 164.839844 Z M 66.382812 135.863281 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="5f882745c3">
                    <path d="M 94.882812 135.863281 L 123.859375 135.863281 L 123.859375 164.839844 L 94.882812 164.839844 Z M 94.882812 135.863281 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="afee98528c">
                    <path d="M 122.976562 135.863281 L 151.953125 135.863281 L 151.953125 164.839844 L 122.976562 164.839844 Z M 122.976562 135.863281 " clip-rule="nonzero" />
                    </clipPath>
                    <clipPath id="6f763ee56e">
                    <path d="M 151.59375 135.863281 L 180.570312 135.863281 L 180.570312 164.839844 L 151.59375 164.839844 Z M 151.59375 135.863281 " clip-rule="nonzero" />
                    </clipPath>
                </defs>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(23.156185, 35.8043)">
                    <g>
                        <path d="M 2.40625 0.09375 C 2 0.09375 1.640625 0.0234375 1.328125 -0.109375 C 1.023438 -0.253906 0.785156 -0.453125 0.609375 -0.703125 C 0.429688 -0.960938 0.34375 -1.28125 0.34375 -1.65625 L 1.390625 -1.65625 C 1.398438 -1.394531 1.492188 -1.175781 1.671875 -1 C 1.847656 -0.832031 2.09375 -0.75 2.40625 -0.75 C 2.664062 -0.75 2.875 -0.8125 3.03125 -0.9375 C 3.1875 -1.0625 3.265625 -1.234375 3.265625 -1.453125 C 3.265625 -1.671875 3.195312 -1.84375 3.0625 -1.96875 C 2.925781 -2.101562 2.742188 -2.207031 2.515625 -2.28125 C 2.285156 -2.363281 2.035156 -2.445312 1.765625 -2.53125 C 1.347656 -2.675781 1.023438 -2.863281 0.796875 -3.09375 C 0.578125 -3.320312 0.46875 -3.628906 0.46875 -4.015625 C 0.46875 -4.335938 0.546875 -4.613281 0.703125 -4.84375 C 0.859375 -5.082031 1.070312 -5.265625 1.34375 -5.390625 C 1.625 -5.515625 1.945312 -5.578125 2.3125 -5.578125 C 2.675781 -5.578125 3 -5.507812 3.28125 -5.375 C 3.5625 -5.25 3.78125 -5.066406 3.9375 -4.828125 C 4.101562 -4.597656 4.191406 -4.320312 4.203125 -4 L 3.125 -4 C 3.113281 -4.195312 3.035156 -4.367188 2.890625 -4.515625 C 2.753906 -4.660156 2.554688 -4.734375 2.296875 -4.734375 C 2.078125 -4.742188 1.890625 -4.691406 1.734375 -4.578125 C 1.585938 -4.460938 1.515625 -4.300781 1.515625 -4.09375 C 1.515625 -3.90625 1.570312 -3.753906 1.6875 -3.640625 C 1.800781 -3.535156 1.957031 -3.445312 2.15625 -3.375 C 2.363281 -3.300781 2.59375 -3.222656 2.84375 -3.140625 C 3.113281 -3.046875 3.363281 -2.9375 3.59375 -2.8125 C 3.820312 -2.6875 4.003906 -2.519531 4.140625 -2.3125 C 4.273438 -2.113281 4.34375 -1.847656 4.34375 -1.515625 C 4.34375 -1.234375 4.265625 -0.96875 4.109375 -0.71875 C 3.960938 -0.476562 3.742188 -0.28125 3.453125 -0.125 C 3.171875 0.0195312 2.820312 0.09375 2.40625 0.09375 Z M 2.40625 0.09375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(27.841272, 35.8043)">
                    <g>
                        <path d="M 2.375 0.09375 C 2 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.332031 0.816406 -0.570312 0.640625 -0.875 C 0.472656 -1.1875 0.390625 -1.539062 0.390625 -1.9375 C 0.390625 -2.34375 0.476562 -2.695312 0.65625 -3 C 0.832031 -3.3125 1.066406 -3.550781 1.359375 -3.71875 C 1.660156 -3.894531 2.003906 -3.984375 2.390625 -3.984375 C 2.753906 -3.984375 3.085938 -3.894531 3.390625 -3.71875 C 3.691406 -3.550781 3.929688 -3.3125 4.109375 -3 C 4.285156 -2.695312 4.375 -2.34375 4.375 -1.9375 C 4.375 -1.539062 4.285156 -1.1875 4.109375 -0.875 C 3.929688 -0.570312 3.691406 -0.332031 3.390625 -0.15625 C 3.085938 0.0078125 2.75 0.09375 2.375 0.09375 Z M 2.375 -0.78125 C 2.632812 -0.78125 2.859375 -0.875 3.046875 -1.0625 C 3.242188 -1.257812 3.34375 -1.550781 3.34375 -1.9375 C 3.34375 -2.332031 3.242188 -2.625 3.046875 -2.8125 C 2.859375 -3.007812 2.640625 -3.109375 2.390625 -3.109375 C 2.117188 -3.109375 1.882812 -3.007812 1.6875 -2.8125 C 1.5 -2.625 1.40625 -2.332031 1.40625 -1.9375 C 1.40625 -1.550781 1.5 -1.257812 1.6875 -1.0625 C 1.882812 -0.875 2.113281 -0.78125 2.375 -0.78125 Z M 2.375 -0.78125 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(32.596989, 35.8043)">
                    <g>
                        <path d="M 1.96875 0.09375 C 1.476562 0.09375 1.101562 -0.0546875 0.84375 -0.359375 C 0.582031 -0.660156 0.453125 -1.101562 0.453125 -1.6875 L 0.453125 -3.890625 L 1.4375 -3.890625 L 1.4375 -1.78125 C 1.4375 -1.445312 1.503906 -1.191406 1.640625 -1.015625 C 1.773438 -0.835938 1.992188 -0.75 2.296875 -0.75 C 2.566406 -0.75 2.789062 -0.847656 2.96875 -1.046875 C 3.15625 -1.242188 3.25 -1.519531 3.25 -1.875 L 3.25 -3.890625 L 4.25 -3.890625 L 4.25 0 L 3.359375 0 L 3.28125 -0.65625 C 3.164062 -0.425781 2.992188 -0.242188 2.765625 -0.109375 C 2.535156 0.0234375 2.269531 0.09375 1.96875 0.09375 Z M 1.96875 0.09375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(37.368403, 35.8043)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.40625 -3.890625 L 1.5 -3.15625 C 1.632812 -3.40625 1.820312 -3.601562 2.0625 -3.75 C 2.3125 -3.90625 2.601562 -3.984375 2.9375 -3.984375 L 2.9375 -2.921875 L 2.65625 -2.921875 C 2.4375 -2.921875 2.238281 -2.882812 2.0625 -2.8125 C 1.882812 -2.75 1.75 -2.632812 1.65625 -2.46875 C 1.5625 -2.300781 1.515625 -2.066406 1.515625 -1.765625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(40.476098, 35.8043)">
                    <g>
                        <path d="M 2.421875 0.09375 C 2.015625 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.332031 0.816406 -0.570312 0.640625 -0.875 C 0.472656 -1.1875 0.390625 -1.539062 0.390625 -1.9375 C 0.390625 -2.34375 0.472656 -2.695312 0.640625 -3 C 0.816406 -3.3125 1.054688 -3.550781 1.359375 -3.71875 C 1.660156 -3.894531 2.015625 -3.984375 2.421875 -3.984375 C 2.910156 -3.984375 3.328125 -3.851562 3.671875 -3.59375 C 4.015625 -3.332031 4.234375 -2.976562 4.328125 -2.53125 L 3.265625 -2.53125 C 3.210938 -2.71875 3.109375 -2.863281 2.953125 -2.96875 C 2.796875 -3.070312 2.613281 -3.125 2.40625 -3.125 C 2.132812 -3.125 1.898438 -3.019531 1.703125 -2.8125 C 1.503906 -2.601562 1.40625 -2.3125 1.40625 -1.9375 C 1.40625 -1.570312 1.503906 -1.285156 1.703125 -1.078125 C 1.898438 -0.867188 2.132812 -0.765625 2.40625 -0.765625 C 2.613281 -0.765625 2.796875 -0.816406 2.953125 -0.921875 C 3.109375 -1.023438 3.210938 -1.171875 3.265625 -1.359375 L 4.328125 -1.359375 C 4.234375 -0.921875 4.015625 -0.566406 3.671875 -0.296875 C 3.328125 -0.0351562 2.910156 0.09375 2.421875 0.09375 Z M 2.421875 0.09375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(45.184726, 35.8043)">
                    <g>
                        <path d="M 1.046875 -4.5 C 0.867188 -4.5 0.71875 -4.550781 0.59375 -4.65625 C 0.476562 -4.769531 0.421875 -4.910156 0.421875 -5.078125 C 0.421875 -5.242188 0.476562 -5.378906 0.59375 -5.484375 C 0.71875 -5.585938 0.867188 -5.640625 1.046875 -5.640625 C 1.234375 -5.640625 1.382812 -5.585938 1.5 -5.484375 C 1.613281 -5.378906 1.671875 -5.242188 1.671875 -5.078125 C 1.671875 -4.910156 1.613281 -4.769531 1.5 -4.65625 C 1.382812 -4.550781 1.234375 -4.5 1.046875 -4.5 Z M 0.546875 0 L 0.546875 -3.890625 L 1.546875 -3.890625 L 1.546875 0 Z M 0.546875 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(47.280069, 35.8043)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.390625 -3.890625 L 1.46875 -3.234375 C 1.59375 -3.460938 1.769531 -3.644531 2 -3.78125 C 2.226562 -3.914062 2.492188 -3.984375 2.796875 -3.984375 C 3.273438 -3.984375 3.648438 -3.832031 3.921875 -3.53125 C 4.191406 -3.226562 4.328125 -2.785156 4.328125 -2.203125 L 4.328125 0 L 3.3125 0 L 3.3125 -2.109375 C 3.3125 -2.441406 3.242188 -2.695312 3.109375 -2.875 C 2.972656 -3.050781 2.765625 -3.140625 2.484375 -3.140625 C 2.203125 -3.140625 1.96875 -3.039062 1.78125 -2.84375 C 1.601562 -2.644531 1.515625 -2.367188 1.515625 -2.015625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(52.051483, 35.8043)">
                    <g>
                        <path d="M 2.15625 -1.15625 C 1.96875 -1.15625 1.789062 -1.175781 1.625 -1.21875 L 1.34375 -0.9375 C 1.425781 -0.882812 1.539062 -0.84375 1.6875 -0.8125 C 1.84375 -0.78125 2.09375 -0.75 2.4375 -0.71875 C 2.957031 -0.675781 3.332031 -0.554688 3.5625 -0.359375 C 3.800781 -0.160156 3.921875 0.113281 3.921875 0.46875 C 3.921875 0.695312 3.859375 0.914062 3.734375 1.125 C 3.609375 1.332031 3.414062 1.5 3.15625 1.625 C 2.894531 1.75 2.5625 1.8125 2.15625 1.8125 C 1.59375 1.8125 1.140625 1.707031 0.796875 1.5 C 0.460938 1.300781 0.296875 0.992188 0.296875 0.578125 C 0.296875 0.234375 0.46875 -0.0664062 0.8125 -0.328125 C 0.707031 -0.378906 0.613281 -0.429688 0.53125 -0.484375 C 0.457031 -0.535156 0.394531 -0.585938 0.34375 -0.640625 L 0.34375 -0.828125 L 1.015625 -1.546875 C 0.710938 -1.804688 0.5625 -2.148438 0.5625 -2.578125 C 0.5625 -2.835938 0.625 -3.070312 0.75 -3.28125 C 0.882812 -3.5 1.066406 -3.671875 1.296875 -3.796875 C 1.535156 -3.921875 1.820312 -3.984375 2.15625 -3.984375 C 2.375 -3.984375 2.578125 -3.953125 2.765625 -3.890625 L 4.25 -3.890625 L 4.25 -3.28125 L 3.578125 -3.234375 C 3.679688 -3.035156 3.734375 -2.816406 3.734375 -2.578125 C 3.734375 -2.316406 3.671875 -2.078125 3.546875 -1.859375 C 3.421875 -1.640625 3.238281 -1.46875 3 -1.34375 C 2.757812 -1.21875 2.476562 -1.15625 2.15625 -1.15625 Z M 2.15625 -1.921875 C 2.363281 -1.921875 2.53125 -1.976562 2.65625 -2.09375 C 2.789062 -2.207031 2.859375 -2.363281 2.859375 -2.5625 C 2.859375 -2.769531 2.789062 -2.925781 2.65625 -3.03125 C 2.53125 -3.144531 2.363281 -3.203125 2.15625 -3.203125 C 1.9375 -3.203125 1.757812 -3.144531 1.625 -3.03125 C 1.5 -2.925781 1.4375 -2.769531 1.4375 -2.5625 C 1.4375 -2.363281 1.5 -2.207031 1.625 -2.09375 C 1.757812 -1.976562 1.9375 -1.921875 2.15625 -1.921875 Z M 1.21875 0.484375 C 1.21875 0.671875 1.304688 0.8125 1.484375 0.90625 C 1.660156 1.007812 1.882812 1.0625 2.15625 1.0625 C 2.40625 1.0625 2.609375 1.007812 2.765625 0.90625 C 2.921875 0.800781 3 0.664062 3 0.5 C 3 0.351562 2.945312 0.234375 2.84375 0.140625 C 2.738281 0.046875 2.535156 -0.0078125 2.234375 -0.03125 C 2.015625 -0.0507812 1.816406 -0.078125 1.640625 -0.109375 C 1.484375 -0.015625 1.375 0.078125 1.3125 0.171875 C 1.25 0.273438 1.21875 0.378906 1.21875 0.484375 Z M 1.21875 0.484375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(35.310534, 64.45235)">
                    <g>
                        <path d="M 1.8125 0 L 1.8125 -4.6875 L 0.21875 -4.6875 L 0.21875 -5.484375 L 4.421875 -5.484375 L 4.421875 -4.6875 L 2.8125 -4.6875 L 2.8125 0 Z M 1.8125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(39.948531, 64.45235)">
                    <g>
                        <path d="M 2.40625 0.09375 C 2.007812 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.320312 0.816406 -0.554688 0.640625 -0.859375 C 0.472656 -1.160156 0.390625 -1.507812 0.390625 -1.90625 C 0.390625 -2.3125 0.472656 -2.671875 0.640625 -2.984375 C 0.804688 -3.296875 1.039062 -3.539062 1.34375 -3.71875 C 1.644531 -3.894531 2 -3.984375 2.40625 -3.984375 C 2.789062 -3.984375 3.128906 -3.898438 3.421875 -3.734375 C 3.710938 -3.566406 3.941406 -3.335938 4.109375 -3.046875 C 4.273438 -2.753906 4.359375 -2.429688 4.359375 -2.078125 C 4.359375 -2.023438 4.351562 -1.960938 4.34375 -1.890625 C 4.34375 -1.828125 4.34375 -1.765625 4.34375 -1.703125 L 1.375 -1.703125 C 1.394531 -1.398438 1.5 -1.160156 1.6875 -0.984375 C 1.882812 -0.816406 2.117188 -0.734375 2.390625 -0.734375 C 2.597656 -0.734375 2.769531 -0.773438 2.90625 -0.859375 C 3.039062 -0.953125 3.144531 -1.070312 3.21875 -1.21875 L 4.234375 -1.21875 C 4.160156 -0.976562 4.035156 -0.753906 3.859375 -0.546875 C 3.691406 -0.347656 3.484375 -0.191406 3.234375 -0.078125 C 2.992188 0.0351562 2.71875 0.09375 2.40625 0.09375 Z M 2.40625 -3.171875 C 2.164062 -3.171875 1.945312 -3.097656 1.75 -2.953125 C 1.5625 -2.816406 1.441406 -2.609375 1.390625 -2.328125 L 3.328125 -2.328125 C 3.316406 -2.585938 3.222656 -2.789062 3.046875 -2.9375 C 2.878906 -3.09375 2.664062 -3.171875 2.40625 -3.171875 Z M 2.40625 -3.171875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(44.641463, 64.45235)">
                    <g>
                        <path d="M 1.84375 0.09375 C 1.507812 0.09375 1.234375 0.0390625 1.015625 -0.0625 C 0.804688 -0.175781 0.648438 -0.320312 0.546875 -0.5 C 0.441406 -0.675781 0.390625 -0.867188 0.390625 -1.078125 C 0.390625 -1.441406 0.53125 -1.734375 0.8125 -1.953125 C 1.09375 -2.179688 1.519531 -2.296875 2.09375 -2.296875 L 3.078125 -2.296875 L 3.078125 -2.390625 C 3.078125 -2.660156 3 -2.859375 2.84375 -2.984375 C 2.695312 -3.109375 2.507812 -3.171875 2.28125 -3.171875 C 2.082031 -3.171875 1.90625 -3.117188 1.75 -3.015625 C 1.59375 -2.921875 1.5 -2.78125 1.46875 -2.59375 L 0.484375 -2.59375 C 0.515625 -2.875 0.609375 -3.117188 0.765625 -3.328125 C 0.929688 -3.535156 1.144531 -3.695312 1.40625 -3.8125 C 1.664062 -3.925781 1.960938 -3.984375 2.296875 -3.984375 C 2.847656 -3.984375 3.28125 -3.84375 3.59375 -3.5625 C 3.914062 -3.289062 4.078125 -2.898438 4.078125 -2.390625 L 4.078125 0 L 3.21875 0 L 3.125 -0.625 C 3.007812 -0.414062 2.847656 -0.242188 2.640625 -0.109375 C 2.441406 0.0234375 2.175781 0.09375 1.84375 0.09375 Z M 2.078125 -0.6875 C 2.367188 -0.6875 2.59375 -0.78125 2.75 -0.96875 C 2.90625 -1.15625 3.003906 -1.390625 3.046875 -1.671875 L 2.203125 -1.671875 C 1.929688 -1.671875 1.738281 -1.617188 1.625 -1.515625 C 1.507812 -1.421875 1.453125 -1.304688 1.453125 -1.171875 C 1.453125 -1.015625 1.507812 -0.894531 1.625 -0.8125 C 1.738281 -0.726562 1.890625 -0.6875 2.078125 -0.6875 Z M 2.078125 -0.6875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(49.169592, 64.45235)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.390625 -3.890625 L 1.484375 -3.359375 C 1.609375 -3.546875 1.773438 -3.695312 1.984375 -3.8125 C 2.191406 -3.925781 2.429688 -3.984375 2.703125 -3.984375 C 3.296875 -3.984375 3.722656 -3.75 3.984375 -3.28125 C 4.117188 -3.5 4.304688 -3.671875 4.546875 -3.796875 C 4.785156 -3.921875 5.046875 -3.984375 5.328125 -3.984375 C 5.835938 -3.984375 6.226562 -3.832031 6.5 -3.53125 C 6.769531 -3.226562 6.90625 -2.785156 6.90625 -2.203125 L 6.90625 0 L 5.90625 0 L 5.90625 -2.109375 C 5.90625 -2.441406 5.835938 -2.695312 5.703125 -2.875 C 5.578125 -3.050781 5.378906 -3.140625 5.109375 -3.140625 C 4.835938 -3.140625 4.617188 -3.039062 4.453125 -2.84375 C 4.296875 -2.644531 4.21875 -2.367188 4.21875 -2.015625 L 4.21875 0 L 3.203125 0 L 3.203125 -2.109375 C 3.203125 -2.441406 3.132812 -2.695312 3 -2.875 C 2.875 -3.050781 2.675781 -3.140625 2.40625 -3.140625 C 2.144531 -3.140625 1.929688 -3.039062 1.765625 -2.84375 C 1.597656 -2.644531 1.515625 -2.367188 1.515625 -2.015625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(17.402989, 94.015043)">
                    <g>
                        <path d="M 2.125 0 L 0.125 -5.484375 L 1.1875 -5.484375 L 2.75 -1.03125 L 4.3125 -5.484375 L 5.359375 -5.484375 L 3.359375 0 Z M 2.125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(22.888543, 94.015043)">
                    <g>
                        <path d="M 1.84375 0.09375 C 1.507812 0.09375 1.234375 0.0390625 1.015625 -0.0625 C 0.804688 -0.175781 0.648438 -0.320312 0.546875 -0.5 C 0.441406 -0.675781 0.390625 -0.867188 0.390625 -1.078125 C 0.390625 -1.441406 0.53125 -1.734375 0.8125 -1.953125 C 1.09375 -2.179688 1.519531 -2.296875 2.09375 -2.296875 L 3.078125 -2.296875 L 3.078125 -2.390625 C 3.078125 -2.660156 3 -2.859375 2.84375 -2.984375 C 2.695312 -3.109375 2.507812 -3.171875 2.28125 -3.171875 C 2.082031 -3.171875 1.90625 -3.117188 1.75 -3.015625 C 1.59375 -2.921875 1.5 -2.78125 1.46875 -2.59375 L 0.484375 -2.59375 C 0.515625 -2.875 0.609375 -3.117188 0.765625 -3.328125 C 0.929688 -3.535156 1.144531 -3.695312 1.40625 -3.8125 C 1.664062 -3.925781 1.960938 -3.984375 2.296875 -3.984375 C 2.847656 -3.984375 3.28125 -3.84375 3.59375 -3.5625 C 3.914062 -3.289062 4.078125 -2.898438 4.078125 -2.390625 L 4.078125 0 L 3.21875 0 L 3.125 -0.625 C 3.007812 -0.414062 2.847656 -0.242188 2.640625 -0.109375 C 2.441406 0.0234375 2.175781 0.09375 1.84375 0.09375 Z M 2.078125 -0.6875 C 2.367188 -0.6875 2.59375 -0.78125 2.75 -0.96875 C 2.90625 -1.15625 3.003906 -1.390625 3.046875 -1.671875 L 2.203125 -1.671875 C 1.929688 -1.671875 1.738281 -1.617188 1.625 -1.515625 C 1.507812 -1.421875 1.453125 -1.304688 1.453125 -1.171875 C 1.453125 -1.015625 1.507812 -0.894531 1.625 -0.8125 C 1.738281 -0.726562 1.890625 -0.6875 2.078125 -0.6875 Z M 2.078125 -0.6875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(27.416672, 94.015043)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -5.640625 L 1.515625 -5.640625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(29.449228, 94.015043)">
                    <g>
                        <path d="M 1.96875 0.09375 C 1.476562 0.09375 1.101562 -0.0546875 0.84375 -0.359375 C 0.582031 -0.660156 0.453125 -1.101562 0.453125 -1.6875 L 0.453125 -3.890625 L 1.4375 -3.890625 L 1.4375 -1.78125 C 1.4375 -1.445312 1.503906 -1.191406 1.640625 -1.015625 C 1.773438 -0.835938 1.992188 -0.75 2.296875 -0.75 C 2.566406 -0.75 2.789062 -0.847656 2.96875 -1.046875 C 3.15625 -1.242188 3.25 -1.519531 3.25 -1.875 L 3.25 -3.890625 L 4.25 -3.890625 L 4.25 0 L 3.359375 0 L 3.28125 -0.65625 C 3.164062 -0.425781 2.992188 -0.242188 2.765625 -0.109375 C 2.535156 0.0234375 2.269531 0.09375 1.96875 0.09375 Z M 1.96875 0.09375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(34.220642, 94.015043)">
                    <g>
                        <path d="M 2.40625 0.09375 C 2.007812 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.320312 0.816406 -0.554688 0.640625 -0.859375 C 0.472656 -1.160156 0.390625 -1.507812 0.390625 -1.90625 C 0.390625 -2.3125 0.472656 -2.671875 0.640625 -2.984375 C 0.804688 -3.296875 1.039062 -3.539062 1.34375 -3.71875 C 1.644531 -3.894531 2 -3.984375 2.40625 -3.984375 C 2.789062 -3.984375 3.128906 -3.898438 3.421875 -3.734375 C 3.710938 -3.566406 3.941406 -3.335938 4.109375 -3.046875 C 4.273438 -2.753906 4.359375 -2.429688 4.359375 -2.078125 C 4.359375 -2.023438 4.351562 -1.960938 4.34375 -1.890625 C 4.34375 -1.828125 4.34375 -1.765625 4.34375 -1.703125 L 1.375 -1.703125 C 1.394531 -1.398438 1.5 -1.160156 1.6875 -0.984375 C 1.882812 -0.816406 2.117188 -0.734375 2.390625 -0.734375 C 2.597656 -0.734375 2.769531 -0.773438 2.90625 -0.859375 C 3.039062 -0.953125 3.144531 -1.070312 3.21875 -1.21875 L 4.234375 -1.21875 C 4.160156 -0.976562 4.035156 -0.753906 3.859375 -0.546875 C 3.691406 -0.347656 3.484375 -0.191406 3.234375 -0.078125 C 2.992188 0.0351562 2.71875 0.09375 2.40625 0.09375 Z M 2.40625 -3.171875 C 2.164062 -3.171875 1.945312 -3.097656 1.75 -2.953125 C 1.5625 -2.816406 1.441406 -2.609375 1.390625 -2.328125 L 3.328125 -2.328125 C 3.316406 -2.585938 3.222656 -2.789062 3.046875 -2.9375 C 2.878906 -3.09375 2.664062 -3.171875 2.40625 -3.171875 Z M 2.40625 -3.171875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(38.913574, 94.015043)">
                    <g />
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(40.781328, 94.015043)">
                    <g>
                        <path d="M 0.1875 0 L 2.1875 -5.484375 L 3.3125 -5.484375 L 5.328125 0 L 4.265625 0 L 3.8125 -1.265625 L 1.671875 -1.265625 L 1.234375 0 Z M 1.953125 -2.0625 L 3.546875 -2.0625 L 2.75 -4.34375 Z M 1.953125 -2.0625 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(46.282578, 94.015043)">
                    <g>
                        <path d="M 2.296875 0.09375 C 1.929688 0.09375 1.601562 0.00390625 1.3125 -0.171875 C 1.03125 -0.347656 0.804688 -0.585938 0.640625 -0.890625 C 0.472656 -1.203125 0.390625 -1.554688 0.390625 -1.953125 C 0.390625 -2.347656 0.472656 -2.695312 0.640625 -3 C 0.804688 -3.300781 1.03125 -3.539062 1.3125 -3.71875 C 1.601562 -3.894531 1.929688 -3.984375 2.296875 -3.984375 C 2.585938 -3.984375 2.84375 -3.925781 3.0625 -3.8125 C 3.28125 -3.707031 3.457031 -3.554688 3.59375 -3.359375 L 3.59375 -5.640625 L 4.609375 -5.640625 L 4.609375 0 L 3.703125 0 L 3.59375 -0.5625 C 3.46875 -0.382812 3.300781 -0.226562 3.09375 -0.09375 C 2.894531 0.03125 2.628906 0.09375 2.296875 0.09375 Z M 2.515625 -0.78125 C 2.835938 -0.78125 3.097656 -0.890625 3.296875 -1.109375 C 3.503906 -1.328125 3.609375 -1.601562 3.609375 -1.9375 C 3.609375 -2.28125 3.503906 -2.5625 3.296875 -2.78125 C 3.097656 -3 2.835938 -3.109375 2.515625 -3.109375 C 2.191406 -3.109375 1.925781 -3 1.71875 -2.78125 C 1.507812 -2.570312 1.40625 -2.296875 1.40625 -1.953125 C 1.40625 -1.609375 1.507812 -1.328125 1.71875 -1.109375 C 1.925781 -0.890625 2.191406 -0.78125 2.515625 -0.78125 Z M 2.515625 -0.78125 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(51.399287, 94.015043)">
                    <g>
                        <path d="M 2.296875 0.09375 C 1.929688 0.09375 1.601562 0.00390625 1.3125 -0.171875 C 1.03125 -0.347656 0.804688 -0.585938 0.640625 -0.890625 C 0.472656 -1.203125 0.390625 -1.554688 0.390625 -1.953125 C 0.390625 -2.347656 0.472656 -2.695312 0.640625 -3 C 0.804688 -3.300781 1.03125 -3.539062 1.3125 -3.71875 C 1.601562 -3.894531 1.929688 -3.984375 2.296875 -3.984375 C 2.585938 -3.984375 2.84375 -3.925781 3.0625 -3.8125 C 3.28125 -3.707031 3.457031 -3.554688 3.59375 -3.359375 L 3.59375 -5.640625 L 4.609375 -5.640625 L 4.609375 0 L 3.703125 0 L 3.59375 -0.5625 C 3.46875 -0.382812 3.300781 -0.226562 3.09375 -0.09375 C 2.894531 0.03125 2.628906 0.09375 2.296875 0.09375 Z M 2.515625 -0.78125 C 2.835938 -0.78125 3.097656 -0.890625 3.296875 -1.109375 C 3.503906 -1.328125 3.609375 -1.601562 3.609375 -1.9375 C 3.609375 -2.28125 3.503906 -2.5625 3.296875 -2.78125 C 3.097656 -3 2.835938 -3.109375 2.515625 -3.109375 C 2.191406 -3.109375 1.925781 -3 1.71875 -2.78125 C 1.507812 -2.570312 1.40625 -2.296875 1.40625 -1.953125 C 1.40625 -1.609375 1.507812 -1.328125 1.71875 -1.109375 C 1.925781 -0.890625 2.191406 -0.78125 2.515625 -0.78125 Z M 2.515625 -0.78125 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(5.942995, 122.663103)">
                    <g>
                        <path d="M 1.8125 0 L 1.8125 -4.6875 L 0.21875 -4.6875 L 0.21875 -5.484375 L 4.421875 -5.484375 L 4.421875 -4.6875 L 2.8125 -4.6875 L 2.8125 0 Z M 1.8125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(10.580992, 122.663103)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.40625 -3.890625 L 1.5 -3.15625 C 1.632812 -3.40625 1.820312 -3.601562 2.0625 -3.75 C 2.3125 -3.90625 2.601562 -3.984375 2.9375 -3.984375 L 2.9375 -2.921875 L 2.65625 -2.921875 C 2.4375 -2.921875 2.238281 -2.882812 2.0625 -2.8125 C 1.882812 -2.75 1.75 -2.632812 1.65625 -2.46875 C 1.5625 -2.300781 1.515625 -2.066406 1.515625 -1.765625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(13.688687, 122.663103)">
                    <g>
                        <path d="M 1.84375 0.09375 C 1.507812 0.09375 1.234375 0.0390625 1.015625 -0.0625 C 0.804688 -0.175781 0.648438 -0.320312 0.546875 -0.5 C 0.441406 -0.675781 0.390625 -0.867188 0.390625 -1.078125 C 0.390625 -1.441406 0.53125 -1.734375 0.8125 -1.953125 C 1.09375 -2.179688 1.519531 -2.296875 2.09375 -2.296875 L 3.078125 -2.296875 L 3.078125 -2.390625 C 3.078125 -2.660156 3 -2.859375 2.84375 -2.984375 C 2.695312 -3.109375 2.507812 -3.171875 2.28125 -3.171875 C 2.082031 -3.171875 1.90625 -3.117188 1.75 -3.015625 C 1.59375 -2.921875 1.5 -2.78125 1.46875 -2.59375 L 0.484375 -2.59375 C 0.515625 -2.875 0.609375 -3.117188 0.765625 -3.328125 C 0.929688 -3.535156 1.144531 -3.695312 1.40625 -3.8125 C 1.664062 -3.925781 1.960938 -3.984375 2.296875 -3.984375 C 2.847656 -3.984375 3.28125 -3.84375 3.59375 -3.5625 C 3.914062 -3.289062 4.078125 -2.898438 4.078125 -2.390625 L 4.078125 0 L 3.21875 0 L 3.125 -0.625 C 3.007812 -0.414062 2.847656 -0.242188 2.640625 -0.109375 C 2.441406 0.0234375 2.175781 0.09375 1.84375 0.09375 Z M 2.078125 -0.6875 C 2.367188 -0.6875 2.59375 -0.78125 2.75 -0.96875 C 2.90625 -1.15625 3.003906 -1.390625 3.046875 -1.671875 L 2.203125 -1.671875 C 1.929688 -1.671875 1.738281 -1.617188 1.625 -1.515625 C 1.507812 -1.421875 1.453125 -1.304688 1.453125 -1.171875 C 1.453125 -1.015625 1.507812 -0.894531 1.625 -0.8125 C 1.738281 -0.726562 1.890625 -0.6875 2.078125 -0.6875 Z M 2.078125 -0.6875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(18.216816, 122.663103)">
                    <g>
                        <path d="M 2.421875 0.09375 C 2.015625 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.332031 0.816406 -0.570312 0.640625 -0.875 C 0.472656 -1.1875 0.390625 -1.539062 0.390625 -1.9375 C 0.390625 -2.34375 0.472656 -2.695312 0.640625 -3 C 0.816406 -3.3125 1.054688 -3.550781 1.359375 -3.71875 C 1.660156 -3.894531 2.015625 -3.984375 2.421875 -3.984375 C 2.910156 -3.984375 3.328125 -3.851562 3.671875 -3.59375 C 4.015625 -3.332031 4.234375 -2.976562 4.328125 -2.53125 L 3.265625 -2.53125 C 3.210938 -2.71875 3.109375 -2.863281 2.953125 -2.96875 C 2.796875 -3.070312 2.613281 -3.125 2.40625 -3.125 C 2.132812 -3.125 1.898438 -3.019531 1.703125 -2.8125 C 1.503906 -2.601562 1.40625 -2.3125 1.40625 -1.9375 C 1.40625 -1.570312 1.503906 -1.285156 1.703125 -1.078125 C 1.898438 -0.867188 2.132812 -0.765625 2.40625 -0.765625 C 2.613281 -0.765625 2.796875 -0.816406 2.953125 -0.921875 C 3.109375 -1.023438 3.210938 -1.171875 3.265625 -1.359375 L 4.328125 -1.359375 C 4.234375 -0.921875 4.015625 -0.566406 3.671875 -0.296875 C 3.328125 -0.0351562 2.910156 0.09375 2.421875 0.09375 Z M 2.421875 0.09375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(22.925444, 122.663103)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -5.640625 L 1.515625 -5.640625 L 1.515625 -2.3125 L 2.890625 -3.890625 L 4.09375 -3.890625 L 2.5 -2.125 L 4.34375 0 L 3.09375 0 L 1.515625 -1.953125 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(27.382949, 122.663103)">
                    <g />
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(29.250702, 122.663103)">
                    <g>
                        <path d="M 0.53125 0 L 0.53125 -5.484375 L 2.546875 -5.484375 C 2.984375 -5.484375 3.34375 -5.410156 3.625 -5.265625 C 3.914062 -5.117188 4.128906 -4.914062 4.265625 -4.65625 C 4.410156 -4.40625 4.484375 -4.125 4.484375 -3.8125 C 4.484375 -3.476562 4.394531 -3.171875 4.21875 -2.890625 C 4.050781 -2.617188 3.78125 -2.421875 3.40625 -2.296875 L 4.546875 0 L 3.390625 0 L 2.375 -2.171875 L 1.53125 -2.171875 L 1.53125 0 Z M 1.53125 -2.90625 L 2.484375 -2.90625 C 2.816406 -2.90625 3.0625 -2.984375 3.21875 -3.140625 C 3.375 -3.304688 3.453125 -3.519531 3.453125 -3.78125 C 3.453125 -4.050781 3.375 -4.265625 3.21875 -4.421875 C 3.070312 -4.578125 2.828125 -4.65625 2.484375 -4.65625 L 1.53125 -4.65625 Z M 1.53125 -2.90625 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(34.13983, 122.663103)">
                    <g>
                        <path d="M 2.40625 0.09375 C 2.007812 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.320312 0.816406 -0.554688 0.640625 -0.859375 C 0.472656 -1.160156 0.390625 -1.507812 0.390625 -1.90625 C 0.390625 -2.3125 0.472656 -2.671875 0.640625 -2.984375 C 0.804688 -3.296875 1.039062 -3.539062 1.34375 -3.71875 C 1.644531 -3.894531 2 -3.984375 2.40625 -3.984375 C 2.789062 -3.984375 3.128906 -3.898438 3.421875 -3.734375 C 3.710938 -3.566406 3.941406 -3.335938 4.109375 -3.046875 C 4.273438 -2.753906 4.359375 -2.429688 4.359375 -2.078125 C 4.359375 -2.023438 4.351562 -1.960938 4.34375 -1.890625 C 4.34375 -1.828125 4.34375 -1.765625 4.34375 -1.703125 L 1.375 -1.703125 C 1.394531 -1.398438 1.5 -1.160156 1.6875 -0.984375 C 1.882812 -0.816406 2.117188 -0.734375 2.390625 -0.734375 C 2.597656 -0.734375 2.769531 -0.773438 2.90625 -0.859375 C 3.039062 -0.953125 3.144531 -1.070312 3.21875 -1.21875 L 4.234375 -1.21875 C 4.160156 -0.976562 4.035156 -0.753906 3.859375 -0.546875 C 3.691406 -0.347656 3.484375 -0.191406 3.234375 -0.078125 C 2.992188 0.0351562 2.71875 0.09375 2.40625 0.09375 Z M 2.40625 -3.171875 C 2.164062 -3.171875 1.945312 -3.097656 1.75 -2.953125 C 1.5625 -2.816406 1.441406 -2.609375 1.390625 -2.328125 L 3.328125 -2.328125 C 3.316406 -2.585938 3.222656 -2.789062 3.046875 -2.9375 C 2.878906 -3.09375 2.664062 -3.171875 2.40625 -3.171875 Z M 2.40625 -3.171875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(38.832762, 122.663103)">
                    <g>
                        <path d="M 2.421875 0.09375 C 2.015625 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.332031 0.816406 -0.570312 0.640625 -0.875 C 0.472656 -1.1875 0.390625 -1.539062 0.390625 -1.9375 C 0.390625 -2.34375 0.472656 -2.695312 0.640625 -3 C 0.816406 -3.3125 1.054688 -3.550781 1.359375 -3.71875 C 1.660156 -3.894531 2.015625 -3.984375 2.421875 -3.984375 C 2.910156 -3.984375 3.328125 -3.851562 3.671875 -3.59375 C 4.015625 -3.332031 4.234375 -2.976562 4.328125 -2.53125 L 3.265625 -2.53125 C 3.210938 -2.71875 3.109375 -2.863281 2.953125 -2.96875 C 2.796875 -3.070312 2.613281 -3.125 2.40625 -3.125 C 2.132812 -3.125 1.898438 -3.019531 1.703125 -2.8125 C 1.503906 -2.601562 1.40625 -2.3125 1.40625 -1.9375 C 1.40625 -1.570312 1.503906 -1.285156 1.703125 -1.078125 C 1.898438 -0.867188 2.132812 -0.765625 2.40625 -0.765625 C 2.613281 -0.765625 2.796875 -0.816406 2.953125 -0.921875 C 3.109375 -1.023438 3.210938 -1.171875 3.265625 -1.359375 L 4.328125 -1.359375 C 4.234375 -0.921875 4.015625 -0.566406 3.671875 -0.296875 C 3.328125 -0.0351562 2.910156 0.09375 2.421875 0.09375 Z M 2.421875 0.09375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(43.54139, 122.663103)">
                    <g>
                        <path d="M 2.375 0.09375 C 2 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.332031 0.816406 -0.570312 0.640625 -0.875 C 0.472656 -1.1875 0.390625 -1.539062 0.390625 -1.9375 C 0.390625 -2.34375 0.476562 -2.695312 0.65625 -3 C 0.832031 -3.3125 1.066406 -3.550781 1.359375 -3.71875 C 1.660156 -3.894531 2.003906 -3.984375 2.390625 -3.984375 C 2.753906 -3.984375 3.085938 -3.894531 3.390625 -3.71875 C 3.691406 -3.550781 3.929688 -3.3125 4.109375 -3 C 4.285156 -2.695312 4.375 -2.34375 4.375 -1.9375 C 4.375 -1.539062 4.285156 -1.1875 4.109375 -0.875 C 3.929688 -0.570312 3.691406 -0.332031 3.390625 -0.15625 C 3.085938 0.0078125 2.75 0.09375 2.375 0.09375 Z M 2.375 -0.78125 C 2.632812 -0.78125 2.859375 -0.875 3.046875 -1.0625 C 3.242188 -1.257812 3.34375 -1.550781 3.34375 -1.9375 C 3.34375 -2.332031 3.242188 -2.625 3.046875 -2.8125 C 2.859375 -3.007812 2.640625 -3.109375 2.390625 -3.109375 C 2.117188 -3.109375 1.882812 -3.007812 1.6875 -2.8125 C 1.5 -2.625 1.40625 -2.332031 1.40625 -1.9375 C 1.40625 -1.550781 1.5 -1.257812 1.6875 -1.0625 C 1.882812 -0.875 2.113281 -0.78125 2.375 -0.78125 Z M 2.375 -0.78125 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(48.297108, 122.663103)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.40625 -3.890625 L 1.5 -3.15625 C 1.632812 -3.40625 1.820312 -3.601562 2.0625 -3.75 C 2.3125 -3.90625 2.601562 -3.984375 2.9375 -3.984375 L 2.9375 -2.921875 L 2.65625 -2.921875 C 2.4375 -2.921875 2.238281 -2.882812 2.0625 -2.8125 C 1.882812 -2.75 1.75 -2.632812 1.65625 -2.46875 C 1.5625 -2.300781 1.515625 -2.066406 1.515625 -1.765625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(51.404802, 122.663103)">
                    <g>
                        <path d="M 2.296875 0.09375 C 1.929688 0.09375 1.601562 0.00390625 1.3125 -0.171875 C 1.03125 -0.347656 0.804688 -0.585938 0.640625 -0.890625 C 0.472656 -1.203125 0.390625 -1.554688 0.390625 -1.953125 C 0.390625 -2.347656 0.472656 -2.695312 0.640625 -3 C 0.804688 -3.300781 1.03125 -3.539062 1.3125 -3.71875 C 1.601562 -3.894531 1.929688 -3.984375 2.296875 -3.984375 C 2.585938 -3.984375 2.84375 -3.925781 3.0625 -3.8125 C 3.28125 -3.707031 3.457031 -3.554688 3.59375 -3.359375 L 3.59375 -5.640625 L 4.609375 -5.640625 L 4.609375 0 L 3.703125 0 L 3.59375 -0.5625 C 3.46875 -0.382812 3.300781 -0.226562 3.09375 -0.09375 C 2.894531 0.03125 2.628906 0.09375 2.296875 0.09375 Z M 2.515625 -0.78125 C 2.835938 -0.78125 3.097656 -0.890625 3.296875 -1.109375 C 3.503906 -1.328125 3.609375 -1.601562 3.609375 -1.9375 C 3.609375 -2.28125 3.503906 -2.5625 3.296875 -2.78125 C 3.097656 -3 2.835938 -3.109375 2.515625 -3.109375 C 2.191406 -3.109375 1.925781 -3 1.71875 -2.78125 C 1.507812 -2.570312 1.40625 -2.296875 1.40625 -1.953125 C 1.40625 -1.609375 1.507812 -1.328125 1.71875 -1.109375 C 1.925781 -0.890625 2.191406 -0.78125 2.515625 -0.78125 Z M 2.515625 -0.78125 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(39.009017, 146.996838)">
                    <g>
                        <path d="M 0.53125 0 L 0.53125 -5.484375 L 4.078125 -5.484375 L 4.078125 -4.6875 L 1.53125 -4.6875 L 1.53125 -3.140625 L 3.59375 -3.140625 L 3.59375 -2.359375 L 1.53125 -2.359375 L 1.53125 0 Z M 0.53125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(43.333105, 146.996838)">
                    <g>
                        <path d="M 1.046875 -4.5 C 0.867188 -4.5 0.71875 -4.550781 0.59375 -4.65625 C 0.476562 -4.769531 0.421875 -4.910156 0.421875 -5.078125 C 0.421875 -5.242188 0.476562 -5.378906 0.59375 -5.484375 C 0.71875 -5.585938 0.867188 -5.640625 1.046875 -5.640625 C 1.234375 -5.640625 1.382812 -5.585938 1.5 -5.484375 C 1.613281 -5.378906 1.671875 -5.242188 1.671875 -5.078125 C 1.671875 -4.910156 1.613281 -4.769531 1.5 -4.65625 C 1.382812 -4.550781 1.234375 -4.5 1.046875 -4.5 Z M 0.546875 0 L 0.546875 -3.890625 L 1.546875 -3.890625 L 1.546875 0 Z M 0.546875 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(45.428447, 146.996838)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.40625 -3.890625 L 1.5 -3.15625 C 1.632812 -3.40625 1.820312 -3.601562 2.0625 -3.75 C 2.3125 -3.90625 2.601562 -3.984375 2.9375 -3.984375 L 2.9375 -2.921875 L 2.65625 -2.921875 C 2.4375 -2.921875 2.238281 -2.882812 2.0625 -2.8125 C 1.882812 -2.75 1.75 -2.632812 1.65625 -2.46875 C 1.5625 -2.300781 1.515625 -2.066406 1.515625 -1.765625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(48.536142, 146.996838)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.390625 -3.890625 L 1.484375 -3.359375 C 1.609375 -3.546875 1.773438 -3.695312 1.984375 -3.8125 C 2.191406 -3.925781 2.429688 -3.984375 2.703125 -3.984375 C 3.296875 -3.984375 3.722656 -3.75 3.984375 -3.28125 C 4.117188 -3.5 4.304688 -3.671875 4.546875 -3.796875 C 4.785156 -3.921875 5.046875 -3.984375 5.328125 -3.984375 C 5.835938 -3.984375 6.226562 -3.832031 6.5 -3.53125 C 6.769531 -3.226562 6.90625 -2.785156 6.90625 -2.203125 L 6.90625 0 L 5.90625 0 L 5.90625 -2.109375 C 5.90625 -2.441406 5.835938 -2.695312 5.703125 -2.875 C 5.578125 -3.050781 5.378906 -3.140625 5.109375 -3.140625 C 4.835938 -3.140625 4.617188 -3.039062 4.453125 -2.84375 C 4.296875 -2.644531 4.21875 -2.367188 4.21875 -2.015625 L 4.21875 0 L 3.203125 0 L 3.203125 -2.109375 C 3.203125 -2.441406 3.132812 -2.695312 3 -2.875 C 2.875 -3.050781 2.675781 -3.140625 2.40625 -3.140625 C 2.144531 -3.140625 1.929688 -3.039062 1.765625 -2.84375 C 1.597656 -2.644531 1.515625 -2.367188 1.515625 -2.015625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(55.884173, 146.996838)">
                    <g />
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(7.711102, 155.905012)">
                    <g>
                        <path d="M 0.53125 0 L 0.53125 -5.484375 L 1.71875 -5.484375 L 3.46875 -2.015625 L 5.203125 -5.484375 L 6.390625 -5.484375 L 6.390625 0 L 5.390625 0 L 5.390625 -3.78125 L 3.859375 -0.78125 L 3.0625 -0.78125 L 1.53125 -3.78125 L 1.53125 0 Z M 0.53125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(14.640637, 155.905012)">
                    <g>
                        <path d="M 1.84375 0.09375 C 1.507812 0.09375 1.234375 0.0390625 1.015625 -0.0625 C 0.804688 -0.175781 0.648438 -0.320312 0.546875 -0.5 C 0.441406 -0.675781 0.390625 -0.867188 0.390625 -1.078125 C 0.390625 -1.441406 0.53125 -1.734375 0.8125 -1.953125 C 1.09375 -2.179688 1.519531 -2.296875 2.09375 -2.296875 L 3.078125 -2.296875 L 3.078125 -2.390625 C 3.078125 -2.660156 3 -2.859375 2.84375 -2.984375 C 2.695312 -3.109375 2.507812 -3.171875 2.28125 -3.171875 C 2.082031 -3.171875 1.90625 -3.117188 1.75 -3.015625 C 1.59375 -2.921875 1.5 -2.78125 1.46875 -2.59375 L 0.484375 -2.59375 C 0.515625 -2.875 0.609375 -3.117188 0.765625 -3.328125 C 0.929688 -3.535156 1.144531 -3.695312 1.40625 -3.8125 C 1.664062 -3.925781 1.960938 -3.984375 2.296875 -3.984375 C 2.847656 -3.984375 3.28125 -3.84375 3.59375 -3.5625 C 3.914062 -3.289062 4.078125 -2.898438 4.078125 -2.390625 L 4.078125 0 L 3.21875 0 L 3.125 -0.625 C 3.007812 -0.414062 2.847656 -0.242188 2.640625 -0.109375 C 2.441406 0.0234375 2.175781 0.09375 1.84375 0.09375 Z M 2.078125 -0.6875 C 2.367188 -0.6875 2.59375 -0.78125 2.75 -0.96875 C 2.90625 -1.15625 3.003906 -1.390625 3.046875 -1.671875 L 2.203125 -1.671875 C 1.929688 -1.671875 1.738281 -1.617188 1.625 -1.515625 C 1.507812 -1.421875 1.453125 -1.304688 1.453125 -1.171875 C 1.453125 -1.015625 1.507812 -0.894531 1.625 -0.8125 C 1.738281 -0.726562 1.890625 -0.6875 2.078125 -0.6875 Z M 2.078125 -0.6875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(19.168766, 155.905012)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.390625 -3.890625 L 1.46875 -3.234375 C 1.59375 -3.460938 1.769531 -3.644531 2 -3.78125 C 2.226562 -3.914062 2.492188 -3.984375 2.796875 -3.984375 C 3.273438 -3.984375 3.648438 -3.832031 3.921875 -3.53125 C 4.191406 -3.226562 4.328125 -2.785156 4.328125 -2.203125 L 4.328125 0 L 3.3125 0 L 3.3125 -2.109375 C 3.3125 -2.441406 3.242188 -2.695312 3.109375 -2.875 C 2.972656 -3.050781 2.765625 -3.140625 2.484375 -3.140625 C 2.203125 -3.140625 1.96875 -3.039062 1.78125 -2.84375 C 1.601562 -2.644531 1.515625 -2.367188 1.515625 -2.015625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(23.94018, 155.905012)">
                    <g>
                        <path d="M 1.84375 0.09375 C 1.507812 0.09375 1.234375 0.0390625 1.015625 -0.0625 C 0.804688 -0.175781 0.648438 -0.320312 0.546875 -0.5 C 0.441406 -0.675781 0.390625 -0.867188 0.390625 -1.078125 C 0.390625 -1.441406 0.53125 -1.734375 0.8125 -1.953125 C 1.09375 -2.179688 1.519531 -2.296875 2.09375 -2.296875 L 3.078125 -2.296875 L 3.078125 -2.390625 C 3.078125 -2.660156 3 -2.859375 2.84375 -2.984375 C 2.695312 -3.109375 2.507812 -3.171875 2.28125 -3.171875 C 2.082031 -3.171875 1.90625 -3.117188 1.75 -3.015625 C 1.59375 -2.921875 1.5 -2.78125 1.46875 -2.59375 L 0.484375 -2.59375 C 0.515625 -2.875 0.609375 -3.117188 0.765625 -3.328125 C 0.929688 -3.535156 1.144531 -3.695312 1.40625 -3.8125 C 1.664062 -3.925781 1.960938 -3.984375 2.296875 -3.984375 C 2.847656 -3.984375 3.28125 -3.84375 3.59375 -3.5625 C 3.914062 -3.289062 4.078125 -2.898438 4.078125 -2.390625 L 4.078125 0 L 3.21875 0 L 3.125 -0.625 C 3.007812 -0.414062 2.847656 -0.242188 2.640625 -0.109375 C 2.441406 0.0234375 2.175781 0.09375 1.84375 0.09375 Z M 2.078125 -0.6875 C 2.367188 -0.6875 2.59375 -0.78125 2.75 -0.96875 C 2.90625 -1.15625 3.003906 -1.390625 3.046875 -1.671875 L 2.203125 -1.671875 C 1.929688 -1.671875 1.738281 -1.617188 1.625 -1.515625 C 1.507812 -1.421875 1.453125 -1.304688 1.453125 -1.171875 C 1.453125 -1.015625 1.507812 -0.894531 1.625 -0.8125 C 1.738281 -0.726562 1.890625 -0.6875 2.078125 -0.6875 Z M 2.078125 -0.6875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(28.468309, 155.905012)">
                    <g>
                        <path d="M 2.15625 -1.15625 C 1.96875 -1.15625 1.789062 -1.175781 1.625 -1.21875 L 1.34375 -0.9375 C 1.425781 -0.882812 1.539062 -0.84375 1.6875 -0.8125 C 1.84375 -0.78125 2.09375 -0.75 2.4375 -0.71875 C 2.957031 -0.675781 3.332031 -0.554688 3.5625 -0.359375 C 3.800781 -0.160156 3.921875 0.113281 3.921875 0.46875 C 3.921875 0.695312 3.859375 0.914062 3.734375 1.125 C 3.609375 1.332031 3.414062 1.5 3.15625 1.625 C 2.894531 1.75 2.5625 1.8125 2.15625 1.8125 C 1.59375 1.8125 1.140625 1.707031 0.796875 1.5 C 0.460938 1.300781 0.296875 0.992188 0.296875 0.578125 C 0.296875 0.234375 0.46875 -0.0664062 0.8125 -0.328125 C 0.707031 -0.378906 0.613281 -0.429688 0.53125 -0.484375 C 0.457031 -0.535156 0.394531 -0.585938 0.34375 -0.640625 L 0.34375 -0.828125 L 1.015625 -1.546875 C 0.710938 -1.804688 0.5625 -2.148438 0.5625 -2.578125 C 0.5625 -2.835938 0.625 -3.070312 0.75 -3.28125 C 0.882812 -3.5 1.066406 -3.671875 1.296875 -3.796875 C 1.535156 -3.921875 1.820312 -3.984375 2.15625 -3.984375 C 2.375 -3.984375 2.578125 -3.953125 2.765625 -3.890625 L 4.25 -3.890625 L 4.25 -3.28125 L 3.578125 -3.234375 C 3.679688 -3.035156 3.734375 -2.816406 3.734375 -2.578125 C 3.734375 -2.316406 3.671875 -2.078125 3.546875 -1.859375 C 3.421875 -1.640625 3.238281 -1.46875 3 -1.34375 C 2.757812 -1.21875 2.476562 -1.15625 2.15625 -1.15625 Z M 2.15625 -1.921875 C 2.363281 -1.921875 2.53125 -1.976562 2.65625 -2.09375 C 2.789062 -2.207031 2.859375 -2.363281 2.859375 -2.5625 C 2.859375 -2.769531 2.789062 -2.925781 2.65625 -3.03125 C 2.53125 -3.144531 2.363281 -3.203125 2.15625 -3.203125 C 1.9375 -3.203125 1.757812 -3.144531 1.625 -3.03125 C 1.5 -2.925781 1.4375 -2.769531 1.4375 -2.5625 C 1.4375 -2.363281 1.5 -2.207031 1.625 -2.09375 C 1.757812 -1.976562 1.9375 -1.921875 2.15625 -1.921875 Z M 1.21875 0.484375 C 1.21875 0.671875 1.304688 0.8125 1.484375 0.90625 C 1.660156 1.007812 1.882812 1.0625 2.15625 1.0625 C 2.40625 1.0625 2.609375 1.007812 2.765625 0.90625 C 2.921875 0.800781 3 0.664062 3 0.5 C 3 0.351562 2.945312 0.234375 2.84375 0.140625 C 2.738281 0.046875 2.535156 -0.0078125 2.234375 -0.03125 C 2.015625 -0.0507812 1.816406 -0.078125 1.640625 -0.109375 C 1.484375 -0.015625 1.375 0.078125 1.3125 0.171875 C 1.25 0.273438 1.21875 0.378906 1.21875 0.484375 Z M 1.21875 0.484375 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(32.933659, 155.905012)">
                    <g>
                        <path d="M 2.40625 0.09375 C 2.007812 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.320312 0.816406 -0.554688 0.640625 -0.859375 C 0.472656 -1.160156 0.390625 -1.507812 0.390625 -1.90625 C 0.390625 -2.3125 0.472656 -2.671875 0.640625 -2.984375 C 0.804688 -3.296875 1.039062 -3.539062 1.34375 -3.71875 C 1.644531 -3.894531 2 -3.984375 2.40625 -3.984375 C 2.789062 -3.984375 3.128906 -3.898438 3.421875 -3.734375 C 3.710938 -3.566406 3.941406 -3.335938 4.109375 -3.046875 C 4.273438 -2.753906 4.359375 -2.429688 4.359375 -2.078125 C 4.359375 -2.023438 4.351562 -1.960938 4.34375 -1.890625 C 4.34375 -1.828125 4.34375 -1.765625 4.34375 -1.703125 L 1.375 -1.703125 C 1.394531 -1.398438 1.5 -1.160156 1.6875 -0.984375 C 1.882812 -0.816406 2.117188 -0.734375 2.390625 -0.734375 C 2.597656 -0.734375 2.769531 -0.773438 2.90625 -0.859375 C 3.039062 -0.953125 3.144531 -1.070312 3.21875 -1.21875 L 4.234375 -1.21875 C 4.160156 -0.976562 4.035156 -0.753906 3.859375 -0.546875 C 3.691406 -0.347656 3.484375 -0.191406 3.234375 -0.078125 C 2.992188 0.0351562 2.71875 0.09375 2.40625 0.09375 Z M 2.40625 -3.171875 C 2.164062 -3.171875 1.945312 -3.097656 1.75 -2.953125 C 1.5625 -2.816406 1.441406 -2.609375 1.390625 -2.328125 L 3.328125 -2.328125 C 3.316406 -2.585938 3.222656 -2.789062 3.046875 -2.9375 C 2.878906 -3.09375 2.664062 -3.171875 2.40625 -3.171875 Z M 2.40625 -3.171875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(37.62659, 155.905012)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.390625 -3.890625 L 1.484375 -3.359375 C 1.609375 -3.546875 1.773438 -3.695312 1.984375 -3.8125 C 2.191406 -3.925781 2.429688 -3.984375 2.703125 -3.984375 C 3.296875 -3.984375 3.722656 -3.75 3.984375 -3.28125 C 4.117188 -3.5 4.304688 -3.671875 4.546875 -3.796875 C 4.785156 -3.921875 5.046875 -3.984375 5.328125 -3.984375 C 5.835938 -3.984375 6.226562 -3.832031 6.5 -3.53125 C 6.769531 -3.226562 6.90625 -2.785156 6.90625 -2.203125 L 6.90625 0 L 5.90625 0 L 5.90625 -2.109375 C 5.90625 -2.441406 5.835938 -2.695312 5.703125 -2.875 C 5.578125 -3.050781 5.378906 -3.140625 5.109375 -3.140625 C 4.835938 -3.140625 4.617188 -3.039062 4.453125 -2.84375 C 4.296875 -2.644531 4.21875 -2.367188 4.21875 -2.015625 L 4.21875 0 L 3.203125 0 L 3.203125 -2.109375 C 3.203125 -2.441406 3.132812 -2.695312 3 -2.875 C 2.875 -3.050781 2.675781 -3.140625 2.40625 -3.140625 C 2.144531 -3.140625 1.929688 -3.039062 1.765625 -2.84375 C 1.597656 -2.644531 1.515625 -2.367188 1.515625 -2.015625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(44.979897, 155.905012)">
                    <g>
                        <path d="M 2.40625 0.09375 C 2.007812 0.09375 1.660156 0.0078125 1.359375 -0.15625 C 1.054688 -0.320312 0.816406 -0.554688 0.640625 -0.859375 C 0.472656 -1.160156 0.390625 -1.507812 0.390625 -1.90625 C 0.390625 -2.3125 0.472656 -2.671875 0.640625 -2.984375 C 0.804688 -3.296875 1.039062 -3.539062 1.34375 -3.71875 C 1.644531 -3.894531 2 -3.984375 2.40625 -3.984375 C 2.789062 -3.984375 3.128906 -3.898438 3.421875 -3.734375 C 3.710938 -3.566406 3.941406 -3.335938 4.109375 -3.046875 C 4.273438 -2.753906 4.359375 -2.429688 4.359375 -2.078125 C 4.359375 -2.023438 4.351562 -1.960938 4.34375 -1.890625 C 4.34375 -1.828125 4.34375 -1.765625 4.34375 -1.703125 L 1.375 -1.703125 C 1.394531 -1.398438 1.5 -1.160156 1.6875 -0.984375 C 1.882812 -0.816406 2.117188 -0.734375 2.390625 -0.734375 C 2.597656 -0.734375 2.769531 -0.773438 2.90625 -0.859375 C 3.039062 -0.953125 3.144531 -1.070312 3.21875 -1.21875 L 4.234375 -1.21875 C 4.160156 -0.976562 4.035156 -0.753906 3.859375 -0.546875 C 3.691406 -0.347656 3.484375 -0.191406 3.234375 -0.078125 C 2.992188 0.0351562 2.71875 0.09375 2.40625 0.09375 Z M 2.40625 -3.171875 C 2.164062 -3.171875 1.945312 -3.097656 1.75 -2.953125 C 1.5625 -2.816406 1.441406 -2.609375 1.390625 -2.328125 L 3.328125 -2.328125 C 3.316406 -2.585938 3.222656 -2.789062 3.046875 -2.9375 C 2.878906 -3.09375 2.664062 -3.171875 2.40625 -3.171875 Z M 2.40625 -3.171875 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(49.672829, 155.905012)">
                    <g>
                        <path d="M 0.515625 0 L 0.515625 -3.890625 L 1.390625 -3.890625 L 1.46875 -3.234375 C 1.59375 -3.460938 1.769531 -3.644531 2 -3.78125 C 2.226562 -3.914062 2.492188 -3.984375 2.796875 -3.984375 C 3.273438 -3.984375 3.648438 -3.832031 3.921875 -3.53125 C 4.191406 -3.226562 4.328125 -2.785156 4.328125 -2.203125 L 4.328125 0 L 3.3125 0 L 3.3125 -2.109375 C 3.3125 -2.441406 3.242188 -2.695312 3.109375 -2.875 C 2.972656 -3.050781 2.765625 -3.140625 2.484375 -3.140625 C 2.203125 -3.140625 1.96875 -3.039062 1.78125 -2.84375 C 1.601562 -2.644531 1.515625 -2.367188 1.515625 -2.015625 L 1.515625 0 Z M 0.515625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#000000" fill-opacity="1">
                    <g transform="translate(54.444243, 155.905012)">
                    <g>
                        <path d="M 2.25 0 C 1.832031 0 1.5 -0.0976562 1.25 -0.296875 C 1.007812 -0.492188 0.890625 -0.847656 0.890625 -1.359375 L 0.890625 -3.046875 L 0.234375 -3.046875 L 0.234375 -3.890625 L 0.890625 -3.890625 L 1.015625 -4.9375 L 1.890625 -4.9375 L 1.890625 -3.890625 L 2.953125 -3.890625 L 2.953125 -3.046875 L 1.890625 -3.046875 L 1.890625 -1.34375 C 1.890625 -1.15625 1.929688 -1.023438 2.015625 -0.953125 C 2.097656 -0.890625 2.238281 -0.859375 2.4375 -0.859375 L 2.921875 -0.859375 L 2.921875 0 Z M 2.25 0 " />
                    </g>
                    </g>
                </g>
                <g clip-path="url(#9072db4d9f)">
                    <path fill="#27732c" d="M 66.382812 22.660156 L 95.761719 22.660156 L 95.761719 52.039062 L 66.382812 52.039062 Z M 66.382812 22.660156 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#8de3f6cbc7)">
                    <path fill="#80bf8a" d="M 94.882812 22.660156 L 124.261719 22.660156 L 124.261719 52.039062 L 94.882812 52.039062 Z M 94.882812 22.660156 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#f7b27f59cc)">
                    <path fill="#a6a6a6" d="M 122.976562 22.660156 L 152.351562 22.660156 L 152.351562 52.039062 L 122.976562 52.039062 Z M 122.976562 22.660156 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#63c4d533ae)">
                    <path fill="#a6a6a6" d="M 151.59375 22.660156 L 180.96875 22.660156 L 180.96875 52.039062 L 151.59375 52.039062 Z M 151.59375 22.660156 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#bbbdd2b21d)">
                    <path fill="#80bf8a" d="M 66.382812 50.886719 L 95.761719 50.886719 L 95.761719 80.265625 L 66.382812 80.265625 Z M 66.382812 50.886719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#f89af6767c)">
                    <path fill="#a6a6a6" d="M 94.882812 50.886719 L 124.261719 50.886719 L 124.261719 80.265625 L 94.882812 80.265625 Z M 94.882812 50.886719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#5c47508ff6)">
                    <path fill="#a6a6a6" d="M 122.976562 50.886719 L 152.351562 50.886719 L 152.351562 80.265625 L 122.976562 80.265625 Z M 122.976562 50.886719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#329f4cb1fa)">
                    <path fill="#ea9999" d="M 151.59375 50.886719 L 180.96875 50.886719 L 180.96875 80.265625 L 151.59375 80.265625 Z M 151.59375 50.886719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#cf999a3e42)">
                    <path fill="#27732c" d="M 66.382812 79.40625 L 95.761719 79.40625 L 95.761719 108.785156 L 66.382812 108.785156 Z M 66.382812 79.40625 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#bba5af3304)">
                    <path fill="#80bf8a" d="M 94.882812 79.40625 L 124.261719 79.40625 L 124.261719 108.785156 L 94.882812 108.785156 Z M 94.882812 79.40625 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#dd11fb5f7b)">
                    <path fill="#a6a6a6" d="M 122.976562 79.40625 L 152.351562 79.40625 L 152.351562 108.785156 L 122.976562 108.785156 Z M 122.976562 79.40625 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#25184594ab)">
                    <path fill="#80bf8a" d="M 151.59375 79.40625 L 180.96875 79.40625 L 180.96875 108.785156 L 151.59375 108.785156 Z M 151.59375 79.40625 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#84b9e97185)">
                    <path fill="#27732c" d="M 66.382812 107.636719 L 95.761719 107.636719 L 95.761719 137.011719 L 66.382812 137.011719 Z M 66.382812 107.636719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#e9a3d3f0e2)">
                    <path fill="#27732c" d="M 94.882812 107.636719 L 124.261719 107.636719 L 124.261719 137.011719 L 94.882812 137.011719 Z M 94.882812 107.636719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#99f0205bf3)">
                    <path fill="#27732c" d="M 122.976562 107.636719 L 152.351562 107.636719 L 152.351562 137.011719 L 122.976562 137.011719 Z M 122.976562 107.636719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#488addd6fd)">
                    <path fill="#a6a6a6" d="M 151.59375 107.636719 L 180.96875 107.636719 L 180.96875 137.011719 L 151.59375 137.011719 Z M 151.59375 107.636719 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#039eb87dc2)">
                    <path fill="#80bf8a" d="M 66.382812 135.863281 L 95.761719 135.863281 L 95.761719 165.238281 L 66.382812 165.238281 Z M 66.382812 135.863281 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#5f882745c3)">
                    <path fill="#80bf8a" d="M 94.882812 135.863281 L 124.261719 135.863281 L 124.261719 165.238281 L 94.882812 165.238281 Z M 94.882812 135.863281 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#afee98528c)">
                    <path fill="#80bf8a" d="M 122.976562 135.863281 L 152.351562 135.863281 L 152.351562 165.238281 L 122.976562 165.238281 Z M 122.976562 135.863281 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#6f763ee56e)">
                    <path fill="#ea9999" d="M 151.59375 135.863281 L 180.96875 135.863281 L 180.96875 165.238281 L 151.59375 165.238281 Z M 151.59375 135.863281 " fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(67.862526, 28.199704)">
                    <g>
                        <path d="M 1.359375 0.046875 C 1.109375 0.046875 0.894531 -0.00390625 0.71875 -0.109375 C 0.539062 -0.222656 0.398438 -0.375 0.296875 -0.5625 C 0.203125 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.203125 -1.703125 0.296875 -1.890625 C 0.398438 -2.085938 0.539062 -2.238281 0.71875 -2.34375 C 0.894531 -2.457031 1.109375 -2.515625 1.359375 -2.515625 C 1.648438 -2.515625 1.890625 -2.441406 2.078125 -2.296875 C 2.273438 -2.148438 2.394531 -1.941406 2.4375 -1.671875 L 1.953125 -1.671875 C 1.921875 -1.804688 1.851562 -1.910156 1.75 -1.984375 C 1.644531 -2.066406 1.515625 -2.109375 1.359375 -2.109375 C 1.128906 -2.109375 0.945312 -2.03125 0.8125 -1.875 C 0.6875 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.6875 -0.75 0.8125 -0.59375 C 0.945312 -0.4375 1.128906 -0.359375 1.359375 -0.359375 C 1.515625 -0.359375 1.644531 -0.394531 1.75 -0.46875 C 1.851562 -0.539062 1.921875 -0.640625 1.953125 -0.765625 L 2.4375 -0.765625 C 2.394531 -0.515625 2.273438 -0.316406 2.078125 -0.171875 C 1.890625 -0.0234375 1.648438 0.046875 1.359375 0.046875 Z M 1.359375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(70.469584, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 -1.484375 C 0.738281 -1.578125 0.8125 -1.648438 0.90625 -1.703125 C 1.007812 -1.765625 1.128906 -1.796875 1.265625 -1.796875 C 1.484375 -1.796875 1.648438 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.25 -1.40625 1.125 -1.40625 C 1 -1.40625 0.894531 -1.359375 0.8125 -1.265625 C 0.726562 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(72.62032, 28.199704)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(74.661396, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(76.812132, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(78.962868, 28.199704)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(81.078227, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(81.994413, 28.199704)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(97.509809, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 1.84375 -2.46875 L 1.84375 -2.109375 L 0.6875 -2.109375 L 0.6875 -1.421875 L 1.625 -1.421875 L 1.625 -1.0625 L 0.6875 -1.0625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(99.458911, 28.199704)">
                    <g>
                        <path d="M 0.890625 0.046875 C 0.671875 0.046875 0.5 -0.0195312 0.375 -0.15625 C 0.257812 -0.300781 0.203125 -0.503906 0.203125 -0.765625 L 0.203125 -1.75 L 0.65625 -1.75 L 0.65625 -0.8125 C 0.65625 -0.65625 0.679688 -0.535156 0.734375 -0.453125 C 0.796875 -0.378906 0.894531 -0.34375 1.03125 -0.34375 C 1.15625 -0.34375 1.257812 -0.382812 1.34375 -0.46875 C 1.425781 -0.5625 1.46875 -0.6875 1.46875 -0.84375 L 1.46875 -1.75 L 1.90625 -1.75 L 1.90625 0 L 1.515625 0 L 1.484375 -0.296875 C 1.421875 -0.191406 1.335938 -0.109375 1.234375 -0.046875 C 1.140625 0.015625 1.023438 0.046875 0.890625 0.046875 Z M 0.890625 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(101.609647, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(103.760383, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(105.911119, 28.199704)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(108.026478, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(125.782011, 28.199704)">
                    <g>
                        <path d="M 0.734375 0 L 0.09375 -2.46875 L 0.578125 -2.46875 L 1.015625 -0.5 L 1.546875 -2.46875 L 2.03125 -2.46875 L 2.546875 -0.5 L 2.984375 -2.46875 L 3.484375 -2.46875 L 2.8125 0 L 2.265625 0 L 1.78125 -1.828125 L 1.28125 0 Z M 0.734375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(129.354778, 28.199704)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(130.299263, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(132.449999, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(134.600735, 28.199704)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(135.545219, 28.199704)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(137.695955, 28.199704)">
                    <g>
                        <path d="M 0.96875 -0.515625 C 0.882812 -0.515625 0.804688 -0.523438 0.734375 -0.546875 L 0.609375 -0.421875 C 0.640625 -0.398438 0.691406 -0.378906 0.765625 -0.359375 C 0.835938 -0.347656 0.945312 -0.335938 1.09375 -0.328125 C 1.332031 -0.304688 1.503906 -0.25 1.609375 -0.15625 C 1.710938 -0.0703125 1.765625 0.0507812 1.765625 0.21875 C 1.765625 0.320312 1.734375 0.414062 1.671875 0.5 C 1.617188 0.59375 1.535156 0.664062 1.421875 0.71875 C 1.304688 0.78125 1.15625 0.8125 0.96875 0.8125 C 0.71875 0.8125 0.515625 0.765625 0.359375 0.671875 C 0.210938 0.585938 0.140625 0.453125 0.140625 0.265625 C 0.140625 0.109375 0.210938 -0.0234375 0.359375 -0.140625 C 0.316406 -0.171875 0.273438 -0.195312 0.234375 -0.21875 C 0.203125 -0.238281 0.175781 -0.265625 0.15625 -0.296875 L 0.15625 -0.375 L 0.453125 -0.703125 C 0.316406 -0.816406 0.25 -0.96875 0.25 -1.15625 C 0.25 -1.269531 0.273438 -1.375 0.328125 -1.46875 C 0.390625 -1.570312 0.472656 -1.648438 0.578125 -1.703125 C 0.691406 -1.765625 0.820312 -1.796875 0.96875 -1.796875 C 1.070312 -1.796875 1.164062 -1.78125 1.25 -1.75 L 1.90625 -1.75 L 1.90625 -1.46875 L 1.609375 -1.453125 C 1.660156 -1.367188 1.6875 -1.269531 1.6875 -1.15625 C 1.6875 -1.039062 1.65625 -0.929688 1.59375 -0.828125 C 1.539062 -0.734375 1.457031 -0.65625 1.34375 -0.59375 C 1.238281 -0.539062 1.113281 -0.515625 0.96875 -0.515625 Z M 0.96875 -0.875 C 1.0625 -0.875 1.132812 -0.894531 1.1875 -0.9375 C 1.25 -0.988281 1.28125 -1.0625 1.28125 -1.15625 C 1.28125 -1.25 1.25 -1.316406 1.1875 -1.359375 C 1.132812 -1.410156 1.0625 -1.4375 0.96875 -1.4375 C 0.875 -1.4375 0.796875 -1.410156 0.734375 -1.359375 C 0.679688 -1.316406 0.65625 -1.25 0.65625 -1.15625 C 0.65625 -1.0625 0.679688 -0.988281 0.734375 -0.9375 C 0.796875 -0.894531 0.875 -0.875 0.96875 -0.875 Z M 0.546875 0.21875 C 0.546875 0.300781 0.585938 0.363281 0.671875 0.40625 C 0.753906 0.457031 0.851562 0.484375 0.96875 0.484375 C 1.082031 0.484375 1.171875 0.457031 1.234375 0.40625 C 1.304688 0.363281 1.34375 0.300781 1.34375 0.21875 C 1.34375 0.15625 1.320312 0.101562 1.28125 0.0625 C 1.238281 0.0195312 1.144531 -0.00390625 1 -0.015625 C 0.90625 -0.0234375 0.816406 -0.0351562 0.734375 -0.046875 C 0.671875 -0.00390625 0.625 0.0351562 0.59375 0.078125 C 0.5625 0.117188 0.546875 0.164062 0.546875 0.21875 Z M 0.546875 0.21875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(152.190628, 28.199695)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.738281 0.015625 0.59375 -0.046875 C 0.457031 -0.109375 0.347656 -0.195312 0.265625 -0.3125 C 0.191406 -0.4375 0.15625 -0.582031 0.15625 -0.75 L 0.625 -0.75 C 0.632812 -0.632812 0.675781 -0.535156 0.75 -0.453125 C 0.832031 -0.367188 0.941406 -0.328125 1.078125 -0.328125 C 1.203125 -0.328125 1.296875 -0.359375 1.359375 -0.421875 C 1.429688 -0.484375 1.46875 -0.5625 1.46875 -0.65625 C 1.46875 -0.757812 1.4375 -0.835938 1.375 -0.890625 C 1.3125 -0.941406 1.226562 -0.984375 1.125 -1.015625 C 1.019531 -1.054688 0.910156 -1.097656 0.796875 -1.140625 C 0.609375 -1.203125 0.460938 -1.285156 0.359375 -1.390625 C 0.265625 -1.492188 0.21875 -1.632812 0.21875 -1.8125 C 0.207031 -1.957031 0.238281 -2.082031 0.3125 -2.1875 C 0.382812 -2.289062 0.484375 -2.367188 0.609375 -2.421875 C 0.734375 -2.484375 0.878906 -2.515625 1.046875 -2.515625 C 1.203125 -2.515625 1.34375 -2.484375 1.46875 -2.421875 C 1.601562 -2.367188 1.703125 -2.285156 1.765625 -2.171875 C 1.835938 -2.066406 1.878906 -1.941406 1.890625 -1.796875 L 1.40625 -1.796875 C 1.40625 -1.890625 1.367188 -1.96875 1.296875 -2.03125 C 1.234375 -2.101562 1.144531 -2.140625 1.03125 -2.140625 C 0.9375 -2.140625 0.851562 -2.113281 0.78125 -2.0625 C 0.71875 -2.007812 0.6875 -1.9375 0.6875 -1.84375 C 0.6875 -1.757812 0.710938 -1.691406 0.765625 -1.640625 C 0.816406 -1.597656 0.882812 -1.554688 0.96875 -1.515625 C 1.0625 -1.484375 1.164062 -1.453125 1.28125 -1.421875 C 1.40625 -1.378906 1.515625 -1.328125 1.609375 -1.265625 C 1.710938 -1.210938 1.796875 -1.140625 1.859375 -1.046875 C 1.921875 -0.953125 1.953125 -0.832031 1.953125 -0.6875 C 1.953125 -0.550781 1.914062 -0.425781 1.84375 -0.3125 C 1.78125 -0.207031 1.679688 -0.117188 1.546875 -0.046875 C 1.421875 0.015625 1.265625 0.046875 1.078125 0.046875 Z M 1.078125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(154.302451, 28.199695)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(155.246936, 28.199695)">
                    <g>
                        <path d="M 0.96875 -0.515625 C 0.882812 -0.515625 0.804688 -0.523438 0.734375 -0.546875 L 0.609375 -0.421875 C 0.640625 -0.398438 0.691406 -0.378906 0.765625 -0.359375 C 0.835938 -0.347656 0.945312 -0.335938 1.09375 -0.328125 C 1.332031 -0.304688 1.503906 -0.25 1.609375 -0.15625 C 1.710938 -0.0703125 1.765625 0.0507812 1.765625 0.21875 C 1.765625 0.320312 1.734375 0.414062 1.671875 0.5 C 1.617188 0.59375 1.535156 0.664062 1.421875 0.71875 C 1.304688 0.78125 1.15625 0.8125 0.96875 0.8125 C 0.71875 0.8125 0.515625 0.765625 0.359375 0.671875 C 0.210938 0.585938 0.140625 0.453125 0.140625 0.265625 C 0.140625 0.109375 0.210938 -0.0234375 0.359375 -0.140625 C 0.316406 -0.171875 0.273438 -0.195312 0.234375 -0.21875 C 0.203125 -0.238281 0.175781 -0.265625 0.15625 -0.296875 L 0.15625 -0.375 L 0.453125 -0.703125 C 0.316406 -0.816406 0.25 -0.96875 0.25 -1.15625 C 0.25 -1.269531 0.273438 -1.375 0.328125 -1.46875 C 0.390625 -1.570312 0.472656 -1.648438 0.578125 -1.703125 C 0.691406 -1.765625 0.820312 -1.796875 0.96875 -1.796875 C 1.070312 -1.796875 1.164062 -1.78125 1.25 -1.75 L 1.90625 -1.75 L 1.90625 -1.46875 L 1.609375 -1.453125 C 1.660156 -1.367188 1.6875 -1.269531 1.6875 -1.15625 C 1.6875 -1.039062 1.65625 -0.929688 1.59375 -0.828125 C 1.539062 -0.734375 1.457031 -0.65625 1.34375 -0.59375 C 1.238281 -0.539062 1.113281 -0.515625 0.96875 -0.515625 Z M 0.96875 -0.875 C 1.0625 -0.875 1.132812 -0.894531 1.1875 -0.9375 C 1.25 -0.988281 1.28125 -1.0625 1.28125 -1.15625 C 1.28125 -1.25 1.25 -1.316406 1.1875 -1.359375 C 1.132812 -1.410156 1.0625 -1.4375 0.96875 -1.4375 C 0.875 -1.4375 0.796875 -1.410156 0.734375 -1.359375 C 0.679688 -1.316406 0.65625 -1.25 0.65625 -1.15625 C 0.65625 -1.0625 0.679688 -0.988281 0.734375 -0.9375 C 0.796875 -0.894531 0.875 -0.875 0.96875 -0.875 Z M 0.546875 0.21875 C 0.546875 0.300781 0.585938 0.363281 0.671875 0.40625 C 0.753906 0.457031 0.851562 0.484375 0.96875 0.484375 C 1.082031 0.484375 1.171875 0.457031 1.234375 0.40625 C 1.304688 0.363281 1.34375 0.300781 1.34375 0.21875 C 1.34375 0.15625 1.320312 0.101562 1.28125 0.0625 C 1.238281 0.0195312 1.144531 -0.00390625 1 -0.015625 C 0.90625 -0.0234375 0.816406 -0.0351562 0.734375 -0.046875 C 0.671875 -0.00390625 0.625 0.0351562 0.59375 0.078125 C 0.5625 0.117188 0.546875 0.164062 0.546875 0.21875 Z M 0.546875 0.21875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(157.259711, 28.199695)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(159.410447, 28.199695)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(161.451523, 28.199695)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(67.550219, 56.340373)">
                    <g>
                        <path d="M 1.390625 0.046875 C 1.148438 0.046875 0.9375 -0.00390625 0.75 -0.109375 C 0.5625 -0.222656 0.414062 -0.375 0.3125 -0.5625 C 0.207031 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.207031 -1.703125 0.3125 -1.890625 C 0.414062 -2.085938 0.5625 -2.238281 0.75 -2.34375 C 0.9375 -2.457031 1.148438 -2.515625 1.390625 -2.515625 C 1.640625 -2.515625 1.859375 -2.457031 2.046875 -2.34375 C 2.234375 -2.238281 2.378906 -2.085938 2.484375 -1.890625 C 2.585938 -1.703125 2.640625 -1.484375 2.640625 -1.234375 C 2.640625 -0.984375 2.585938 -0.757812 2.484375 -0.5625 C 2.378906 -0.375 2.234375 -0.222656 2.046875 -0.109375 C 1.859375 -0.00390625 1.640625 0.046875 1.390625 0.046875 Z M 1.390625 -0.359375 C 1.628906 -0.359375 1.816406 -0.4375 1.953125 -0.59375 C 2.097656 -0.75 2.171875 -0.960938 2.171875 -1.234375 C 2.171875 -1.503906 2.097656 -1.71875 1.953125 -1.875 C 1.816406 -2.03125 1.628906 -2.109375 1.390625 -2.109375 C 1.160156 -2.109375 0.972656 -2.03125 0.828125 -1.875 C 0.691406 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.691406 -0.75 0.828125 -0.59375 C 0.972656 -0.4375 1.160156 -0.359375 1.390625 -0.359375 Z M 1.390625 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(70.348296, 56.340373)">
                    <g>
                        <path d="M 0.234375 0.78125 L 0.234375 -1.75 L 0.625 -1.75 L 0.6875 -1.5 C 0.738281 -1.582031 0.8125 -1.648438 0.90625 -1.703125 C 1 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.429688 -1.796875 1.578125 -1.753906 1.703125 -1.671875 C 1.835938 -1.585938 1.941406 -1.476562 2.015625 -1.34375 C 2.085938 -1.207031 2.125 -1.050781 2.125 -0.875 C 2.125 -0.695312 2.085938 -0.535156 2.015625 -0.390625 C 1.941406 -0.253906 1.835938 -0.144531 1.703125 -0.0625 C 1.578125 0.0078125 1.429688 0.046875 1.265625 0.046875 C 1.128906 0.046875 1.007812 0.0195312 0.90625 -0.03125 C 0.8125 -0.0820312 0.738281 -0.148438 0.6875 -0.234375 L 0.6875 0.78125 Z M 1.171875 -0.359375 C 1.316406 -0.359375 1.4375 -0.40625 1.53125 -0.5 C 1.625 -0.59375 1.671875 -0.71875 1.671875 -0.875 C 1.671875 -1.03125 1.625 -1.15625 1.53125 -1.25 C 1.4375 -1.34375 1.316406 -1.390625 1.171875 -1.390625 C 1.023438 -1.390625 0.90625 -1.34375 0.8125 -1.25 C 0.71875 -1.15625 0.671875 -1.03125 0.671875 -0.875 C 0.671875 -0.71875 0.71875 -0.59375 0.8125 -0.5 C 0.90625 -0.40625 1.023438 -0.359375 1.171875 -0.359375 Z M 1.171875 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(72.654675, 56.340373)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(74.770034, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(76.17084, 56.340373)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(78.211917, 56.340373)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(79.701159, 56.340373)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(80.645643, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(82.796379, 56.340373)">
                    <g>
                        <path d="M 0.96875 -0.515625 C 0.882812 -0.515625 0.804688 -0.523438 0.734375 -0.546875 L 0.609375 -0.421875 C 0.640625 -0.398438 0.691406 -0.378906 0.765625 -0.359375 C 0.835938 -0.347656 0.945312 -0.335938 1.09375 -0.328125 C 1.332031 -0.304688 1.503906 -0.25 1.609375 -0.15625 C 1.710938 -0.0703125 1.765625 0.0507812 1.765625 0.21875 C 1.765625 0.320312 1.734375 0.414062 1.671875 0.5 C 1.617188 0.59375 1.535156 0.664062 1.421875 0.71875 C 1.304688 0.78125 1.15625 0.8125 0.96875 0.8125 C 0.71875 0.8125 0.515625 0.765625 0.359375 0.671875 C 0.210938 0.585938 0.140625 0.453125 0.140625 0.265625 C 0.140625 0.109375 0.210938 -0.0234375 0.359375 -0.140625 C 0.316406 -0.171875 0.273438 -0.195312 0.234375 -0.21875 C 0.203125 -0.238281 0.175781 -0.265625 0.15625 -0.296875 L 0.15625 -0.375 L 0.453125 -0.703125 C 0.316406 -0.816406 0.25 -0.96875 0.25 -1.15625 C 0.25 -1.269531 0.273438 -1.375 0.328125 -1.46875 C 0.390625 -1.570312 0.472656 -1.648438 0.578125 -1.703125 C 0.691406 -1.765625 0.820312 -1.796875 0.96875 -1.796875 C 1.070312 -1.796875 1.164062 -1.78125 1.25 -1.75 L 1.90625 -1.75 L 1.90625 -1.46875 L 1.609375 -1.453125 C 1.660156 -1.367188 1.6875 -1.269531 1.6875 -1.15625 C 1.6875 -1.039062 1.65625 -0.929688 1.59375 -0.828125 C 1.539062 -0.734375 1.457031 -0.65625 1.34375 -0.59375 C 1.238281 -0.539062 1.113281 -0.515625 0.96875 -0.515625 Z M 0.96875 -0.875 C 1.0625 -0.875 1.132812 -0.894531 1.1875 -0.9375 C 1.25 -0.988281 1.28125 -1.0625 1.28125 -1.15625 C 1.28125 -1.25 1.25 -1.316406 1.1875 -1.359375 C 1.132812 -1.410156 1.0625 -1.4375 0.96875 -1.4375 C 0.875 -1.4375 0.796875 -1.410156 0.734375 -1.359375 C 0.679688 -1.316406 0.65625 -1.25 0.65625 -1.15625 C 0.65625 -1.0625 0.679688 -0.988281 0.734375 -0.9375 C 0.796875 -0.894531 0.875 -0.875 0.96875 -0.875 Z M 0.546875 0.21875 C 0.546875 0.300781 0.585938 0.363281 0.671875 0.40625 C 0.753906 0.457031 0.851562 0.484375 0.96875 0.484375 C 1.082031 0.484375 1.171875 0.457031 1.234375 0.40625 C 1.304688 0.363281 1.34375 0.300781 1.34375 0.21875 C 1.34375 0.15625 1.320312 0.101562 1.28125 0.0625 C 1.238281 0.0195312 1.144531 -0.00390625 1 -0.015625 C 0.90625 -0.0234375 0.816406 -0.0351562 0.734375 -0.046875 C 0.671875 -0.00390625 0.625 0.0351562 0.59375 0.078125 C 0.5625 0.117188 0.546875 0.164062 0.546875 0.21875 Z M 0.546875 0.21875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(96.134721, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 0.6875 -2.46875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(97.068592, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(99.219328, 56.340373)">
                    <g>
                        <path d="M 0.703125 0 L 0.0625 -1.75 L 0.53125 -1.75 L 0.984375 -0.421875 L 1.421875 -1.75 L 1.890625 -1.75 L 1.25 0 Z M 0.703125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(101.175505, 56.340373)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(103.290864, 56.340373)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(105.147996, 56.340373)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(106.637238, 56.340373)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(107.581723, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(109.732459, 56.340373)">
                    <g>
                        <path d="M 0.96875 -0.515625 C 0.882812 -0.515625 0.804688 -0.523438 0.734375 -0.546875 L 0.609375 -0.421875 C 0.640625 -0.398438 0.691406 -0.378906 0.765625 -0.359375 C 0.835938 -0.347656 0.945312 -0.335938 1.09375 -0.328125 C 1.332031 -0.304688 1.503906 -0.25 1.609375 -0.15625 C 1.710938 -0.0703125 1.765625 0.0507812 1.765625 0.21875 C 1.765625 0.320312 1.734375 0.414062 1.671875 0.5 C 1.617188 0.59375 1.535156 0.664062 1.421875 0.71875 C 1.304688 0.78125 1.15625 0.8125 0.96875 0.8125 C 0.71875 0.8125 0.515625 0.765625 0.359375 0.671875 C 0.210938 0.585938 0.140625 0.453125 0.140625 0.265625 C 0.140625 0.109375 0.210938 -0.0234375 0.359375 -0.140625 C 0.316406 -0.171875 0.273438 -0.195312 0.234375 -0.21875 C 0.203125 -0.238281 0.175781 -0.265625 0.15625 -0.296875 L 0.15625 -0.375 L 0.453125 -0.703125 C 0.316406 -0.816406 0.25 -0.96875 0.25 -1.15625 C 0.25 -1.269531 0.273438 -1.375 0.328125 -1.46875 C 0.390625 -1.570312 0.472656 -1.648438 0.578125 -1.703125 C 0.691406 -1.765625 0.820312 -1.796875 0.96875 -1.796875 C 1.070312 -1.796875 1.164062 -1.78125 1.25 -1.75 L 1.90625 -1.75 L 1.90625 -1.46875 L 1.609375 -1.453125 C 1.660156 -1.367188 1.6875 -1.269531 1.6875 -1.15625 C 1.6875 -1.039062 1.65625 -0.929688 1.59375 -0.828125 C 1.539062 -0.734375 1.457031 -0.65625 1.34375 -0.59375 C 1.238281 -0.539062 1.113281 -0.515625 0.96875 -0.515625 Z M 0.96875 -0.875 C 1.0625 -0.875 1.132812 -0.894531 1.1875 -0.9375 C 1.25 -0.988281 1.28125 -1.0625 1.28125 -1.15625 C 1.28125 -1.25 1.25 -1.316406 1.1875 -1.359375 C 1.132812 -1.410156 1.0625 -1.4375 0.96875 -1.4375 C 0.875 -1.4375 0.796875 -1.410156 0.734375 -1.359375 C 0.679688 -1.316406 0.65625 -1.25 0.65625 -1.15625 C 0.65625 -1.0625 0.679688 -0.988281 0.734375 -0.9375 C 0.796875 -0.894531 0.875 -0.875 0.96875 -0.875 Z M 0.546875 0.21875 C 0.546875 0.300781 0.585938 0.363281 0.671875 0.40625 C 0.753906 0.457031 0.851562 0.484375 0.96875 0.484375 C 1.082031 0.484375 1.171875 0.457031 1.234375 0.40625 C 1.304688 0.363281 1.34375 0.300781 1.34375 0.21875 C 1.34375 0.15625 1.320312 0.101562 1.28125 0.0625 C 1.238281 0.0195312 1.144531 -0.00390625 1 -0.015625 C 0.90625 -0.0234375 0.816406 -0.0351562 0.734375 -0.046875 C 0.671875 -0.00390625 0.625 0.0351562 0.59375 0.078125 C 0.5625 0.117188 0.546875 0.164062 0.546875 0.21875 Z M 0.546875 0.21875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(124.311991, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 1.078125 -2.46875 C 1.367188 -2.46875 1.609375 -2.414062 1.796875 -2.3125 C 1.984375 -2.21875 2.125 -2.078125 2.21875 -1.890625 C 2.3125 -1.703125 2.359375 -1.484375 2.359375 -1.234375 C 2.359375 -0.984375 2.3125 -0.765625 2.21875 -0.578125 C 2.125 -0.398438 1.984375 -0.257812 1.796875 -0.15625 C 1.609375 -0.0507812 1.367188 0 1.078125 0 Z M 0.6875 -0.390625 L 1.0625 -0.390625 C 1.269531 -0.390625 1.429688 -0.421875 1.546875 -0.484375 C 1.671875 -0.554688 1.757812 -0.65625 1.8125 -0.78125 C 1.863281 -0.90625 1.890625 -1.054688 1.890625 -1.234375 C 1.890625 -1.410156 1.863281 -1.5625 1.8125 -1.6875 C 1.757812 -1.8125 1.671875 -1.910156 1.546875 -1.984375 C 1.429688 -2.054688 1.269531 -2.09375 1.0625 -2.09375 L 0.6875 -2.09375 Z M 0.6875 -0.390625 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(126.827078, 56.340373)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(128.942437, 56.340373)">
                    <g>
                        <path d="M 1.09375 0.046875 C 0.90625 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.90625 -1.796875 1.09375 -1.796875 C 1.3125 -1.796875 1.492188 -1.734375 1.640625 -1.609375 C 1.796875 -1.492188 1.898438 -1.335938 1.953125 -1.140625 L 1.46875 -1.140625 C 1.445312 -1.222656 1.398438 -1.285156 1.328125 -1.328125 C 1.253906 -1.378906 1.171875 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.171875 0.640625 -1.039062 0.640625 -0.875 C 0.640625 -0.707031 0.679688 -0.578125 0.765625 -0.484375 C 0.847656 -0.390625 0.953125 -0.34375 1.078125 -0.34375 C 1.171875 -0.34375 1.253906 -0.363281 1.328125 -0.40625 C 1.398438 -0.457031 1.445312 -0.523438 1.46875 -0.609375 L 1.953125 -0.609375 C 1.898438 -0.410156 1.796875 -0.25 1.640625 -0.125 C 1.492188 -0.0078125 1.3125 0.046875 1.09375 0.046875 Z M 1.09375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(131.06487, 56.340373)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(132.009355, 56.340373)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(133.866487, 56.340373)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(134.810972, 56.340373)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(136.954629, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(139.102607, 56.340373)">
                    <g />
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(124.311991, 61.167499)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 0.78125 -2.46875 L 1.5625 -0.90625 L 2.34375 -2.46875 L 2.875 -2.46875 L 2.875 0 L 2.421875 0 L 2.421875 -1.703125 L 1.734375 -0.359375 L 1.375 -0.359375 L 0.6875 -1.703125 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(127.435507, 61.167499)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(129.476583, 61.167499)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 -1.046875 L 1.296875 -1.75 L 1.84375 -1.75 L 1.125 -0.953125 L 1.953125 0 L 1.390625 0 L 0.6875 -0.875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(131.485822, 61.167499)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(132.430307, 61.167499)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(134.581043, 61.167499)">
                    <g>
                        <path d="M 0.96875 -0.515625 C 0.882812 -0.515625 0.804688 -0.523438 0.734375 -0.546875 L 0.609375 -0.421875 C 0.640625 -0.398438 0.691406 -0.378906 0.765625 -0.359375 C 0.835938 -0.347656 0.945312 -0.335938 1.09375 -0.328125 C 1.332031 -0.304688 1.503906 -0.25 1.609375 -0.15625 C 1.710938 -0.0703125 1.765625 0.0507812 1.765625 0.21875 C 1.765625 0.320312 1.734375 0.414062 1.671875 0.5 C 1.617188 0.59375 1.535156 0.664062 1.421875 0.71875 C 1.304688 0.78125 1.15625 0.8125 0.96875 0.8125 C 0.71875 0.8125 0.515625 0.765625 0.359375 0.671875 C 0.210938 0.585938 0.140625 0.453125 0.140625 0.265625 C 0.140625 0.109375 0.210938 -0.0234375 0.359375 -0.140625 C 0.316406 -0.171875 0.273438 -0.195312 0.234375 -0.21875 C 0.203125 -0.238281 0.175781 -0.265625 0.15625 -0.296875 L 0.15625 -0.375 L 0.453125 -0.703125 C 0.316406 -0.816406 0.25 -0.96875 0.25 -1.15625 C 0.25 -1.269531 0.273438 -1.375 0.328125 -1.46875 C 0.390625 -1.570312 0.472656 -1.648438 0.578125 -1.703125 C 0.691406 -1.765625 0.820312 -1.796875 0.96875 -1.796875 C 1.070312 -1.796875 1.164062 -1.78125 1.25 -1.75 L 1.90625 -1.75 L 1.90625 -1.46875 L 1.609375 -1.453125 C 1.660156 -1.367188 1.6875 -1.269531 1.6875 -1.15625 C 1.6875 -1.039062 1.65625 -0.929688 1.59375 -0.828125 C 1.539062 -0.734375 1.457031 -0.65625 1.34375 -0.59375 C 1.238281 -0.539062 1.113281 -0.515625 0.96875 -0.515625 Z M 0.96875 -0.875 C 1.0625 -0.875 1.132812 -0.894531 1.1875 -0.9375 C 1.25 -0.988281 1.28125 -1.0625 1.28125 -1.15625 C 1.28125 -1.25 1.25 -1.316406 1.1875 -1.359375 C 1.132812 -1.410156 1.0625 -1.4375 0.96875 -1.4375 C 0.875 -1.4375 0.796875 -1.410156 0.734375 -1.359375 C 0.679688 -1.316406 0.65625 -1.25 0.65625 -1.15625 C 0.65625 -1.0625 0.679688 -0.988281 0.734375 -0.9375 C 0.796875 -0.894531 0.875 -0.875 0.96875 -0.875 Z M 0.546875 0.21875 C 0.546875 0.300781 0.585938 0.363281 0.671875 0.40625 C 0.753906 0.457031 0.851562 0.484375 0.96875 0.484375 C 1.082031 0.484375 1.171875 0.457031 1.234375 0.40625 C 1.304688 0.363281 1.34375 0.300781 1.34375 0.21875 C 1.34375 0.15625 1.320312 0.101562 1.28125 0.0625 C 1.238281 0.0195312 1.144531 -0.00390625 1 -0.015625 C 0.90625 -0.0234375 0.816406 -0.0351562 0.734375 -0.046875 C 0.671875 -0.00390625 0.625 0.0351562 0.59375 0.078125 C 0.5625 0.117188 0.546875 0.164062 0.546875 0.21875 Z M 0.546875 0.21875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(153.014721, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 1.234375 -2.46875 C 1.492188 -2.46875 1.6875 -2.40625 1.8125 -2.28125 C 1.945312 -2.164062 2.015625 -2.019531 2.015625 -1.84375 C 2.015625 -1.6875 1.972656 -1.5625 1.890625 -1.46875 C 1.804688 -1.375 1.707031 -1.3125 1.59375 -1.28125 C 1.726562 -1.25 1.84375 -1.175781 1.9375 -1.0625 C 2.03125 -0.945312 2.078125 -0.816406 2.078125 -0.671875 C 2.078125 -0.472656 2.003906 -0.3125 1.859375 -0.1875 C 1.722656 -0.0625 1.523438 0 1.265625 0 Z M 0.6875 -1.4375 L 1.171875 -1.4375 C 1.296875 -1.4375 1.390625 -1.460938 1.453125 -1.515625 C 1.523438 -1.578125 1.5625 -1.660156 1.5625 -1.765625 C 1.5625 -1.867188 1.523438 -1.953125 1.453125 -2.015625 C 1.390625 -2.078125 1.289062 -2.109375 1.15625 -2.109375 L 0.6875 -2.109375 Z M 0.6875 -0.375 L 1.203125 -0.375 C 1.328125 -0.375 1.425781 -0.398438 1.5 -0.453125 C 1.582031 -0.515625 1.625 -0.601562 1.625 -0.71875 C 1.625 -0.832031 1.582031 -0.921875 1.5 -0.984375 C 1.425781 -1.054688 1.320312 -1.09375 1.1875 -1.09375 L 0.6875 -1.09375 Z M 0.6875 -0.375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(155.246814, 56.340373)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(157.362173, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(159.512909, 56.340373)">
                    <g>
                        <path d="M 1.09375 0.046875 C 0.90625 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.90625 -1.796875 1.09375 -1.796875 C 1.3125 -1.796875 1.492188 -1.734375 1.640625 -1.609375 C 1.796875 -1.492188 1.898438 -1.335938 1.953125 -1.140625 L 1.46875 -1.140625 C 1.445312 -1.222656 1.398438 -1.285156 1.328125 -1.328125 C 1.253906 -1.378906 1.171875 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.171875 0.640625 -1.039062 0.640625 -0.875 C 0.640625 -0.707031 0.679688 -0.578125 0.765625 -0.484375 C 0.847656 -0.390625 0.953125 -0.34375 1.078125 -0.34375 C 1.171875 -0.34375 1.253906 -0.363281 1.328125 -0.40625 C 1.398438 -0.457031 1.445312 -0.523438 1.46875 -0.609375 L 1.953125 -0.609375 C 1.898438 -0.410156 1.796875 -0.25 1.640625 -0.125 C 1.492188 -0.0078125 1.3125 0.046875 1.09375 0.046875 Z M 1.09375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(161.635343, 56.340373)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 -1.484375 C 0.738281 -1.578125 0.8125 -1.648438 0.90625 -1.703125 C 1.007812 -1.765625 1.128906 -1.796875 1.265625 -1.796875 C 1.484375 -1.796875 1.648438 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.25 -1.40625 1.125 -1.40625 C 1 -1.40625 0.894531 -1.359375 0.8125 -1.265625 C 0.726562 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(67.550219, 84.411684)">
                    <g>
                        <path d="M 1.328125 0.046875 C 1.085938 0.046875 0.878906 -0.00390625 0.703125 -0.109375 C 0.535156 -0.222656 0.398438 -0.375 0.296875 -0.5625 C 0.203125 -0.75 0.15625 -0.96875 0.15625 -1.21875 C 0.15625 -1.476562 0.203125 -1.703125 0.296875 -1.890625 C 0.398438 -2.085938 0.546875 -2.238281 0.734375 -2.34375 C 0.921875 -2.457031 1.140625 -2.515625 1.390625 -2.515625 C 1.679688 -2.515625 1.921875 -2.441406 2.109375 -2.296875 C 2.304688 -2.160156 2.429688 -1.972656 2.484375 -1.734375 L 1.984375 -1.734375 C 1.941406 -1.847656 1.867188 -1.9375 1.765625 -2 C 1.671875 -2.0625 1.546875 -2.09375 1.390625 -2.09375 C 1.148438 -2.09375 0.960938 -2.015625 0.828125 -1.859375 C 0.691406 -1.703125 0.625 -1.488281 0.625 -1.21875 C 0.625 -0.945312 0.6875 -0.734375 0.8125 -0.578125 C 0.945312 -0.429688 1.128906 -0.359375 1.359375 -0.359375 C 1.585938 -0.359375 1.757812 -0.414062 1.875 -0.53125 C 1.988281 -0.65625 2.054688 -0.816406 2.078125 -1.015625 L 1.453125 -1.015625 L 1.453125 -1.359375 L 2.53125 -1.359375 L 2.53125 0 L 2.109375 0 L 2.078125 -0.328125 C 1.992188 -0.203125 1.890625 -0.109375 1.765625 -0.046875 C 1.648438 0.015625 1.503906 0.046875 1.328125 0.046875 Z M 1.328125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(70.284624, 84.411684)">
                    <g>
                        <path d="M 0.890625 0.046875 C 0.671875 0.046875 0.5 -0.0195312 0.375 -0.15625 C 0.257812 -0.300781 0.203125 -0.503906 0.203125 -0.765625 L 0.203125 -1.75 L 0.65625 -1.75 L 0.65625 -0.8125 C 0.65625 -0.65625 0.679688 -0.535156 0.734375 -0.453125 C 0.796875 -0.378906 0.894531 -0.34375 1.03125 -0.34375 C 1.15625 -0.34375 1.257812 -0.382812 1.34375 -0.46875 C 1.425781 -0.5625 1.46875 -0.6875 1.46875 -0.84375 L 1.46875 -1.75 L 1.90625 -1.75 L 1.90625 0 L 1.515625 0 L 1.484375 -0.296875 C 1.421875 -0.191406 1.335938 -0.109375 1.234375 -0.046875 C 1.140625 0.015625 1.023438 0.046875 0.890625 0.046875 Z M 0.890625 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(72.43536, 84.411684)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(73.379845, 84.411684)">
                    <g>
                        <path d="M 1.03125 0.046875 C 0.863281 0.046875 0.71875 0.00390625 0.59375 -0.078125 C 0.46875 -0.160156 0.363281 -0.269531 0.28125 -0.40625 C 0.207031 -0.539062 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.46875 -1.597656 0.59375 -1.671875 C 0.71875 -1.753906 0.863281 -1.796875 1.03125 -1.796875 C 1.164062 -1.796875 1.28125 -1.769531 1.375 -1.71875 C 1.476562 -1.664062 1.5625 -1.597656 1.625 -1.515625 L 1.625 -2.546875 L 2.078125 -2.546875 L 2.078125 0 L 1.671875 0 L 1.625 -0.25 C 1.5625 -0.175781 1.484375 -0.109375 1.390625 -0.046875 C 1.296875 0.015625 1.175781 0.046875 1.03125 0.046875 Z M 1.125 -0.359375 C 1.269531 -0.359375 1.390625 -0.40625 1.484375 -0.5 C 1.578125 -0.59375 1.625 -0.71875 1.625 -0.875 C 1.625 -1.03125 1.578125 -1.15625 1.484375 -1.25 C 1.390625 -1.34375 1.269531 -1.390625 1.125 -1.390625 C 0.988281 -1.390625 0.867188 -1.34375 0.765625 -1.25 C 0.671875 -1.15625 0.625 -1.03125 0.625 -0.875 C 0.625 -0.726562 0.671875 -0.601562 0.765625 -0.5 C 0.867188 -0.40625 0.988281 -0.359375 1.125 -0.359375 Z M 1.125 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(75.686224, 84.411684)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(77.7273, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(79.878036, 84.411684)">
                    <g>
                        <path d="M 1.09375 0.046875 C 0.90625 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.90625 -1.796875 1.09375 -1.796875 C 1.3125 -1.796875 1.492188 -1.734375 1.640625 -1.609375 C 1.796875 -1.492188 1.898438 -1.335938 1.953125 -1.140625 L 1.46875 -1.140625 C 1.445312 -1.222656 1.398438 -1.285156 1.328125 -1.328125 C 1.253906 -1.378906 1.171875 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.171875 0.640625 -1.039062 0.640625 -0.875 C 0.640625 -0.707031 0.679688 -0.578125 0.765625 -0.484375 C 0.847656 -0.390625 0.953125 -0.34375 1.078125 -0.34375 C 1.171875 -0.34375 1.253906 -0.363281 1.328125 -0.40625 C 1.398438 -0.457031 1.445312 -0.523438 1.46875 -0.609375 L 1.953125 -0.609375 C 1.898438 -0.410156 1.796875 -0.25 1.640625 -0.125 C 1.492188 -0.0078125 1.3125 0.046875 1.09375 0.046875 Z M 1.09375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(82.00047, 84.411684)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(96.23695, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 1.140625 -2.46875 C 1.335938 -2.46875 1.5 -2.429688 1.625 -2.359375 C 1.757812 -2.296875 1.859375 -2.207031 1.921875 -2.09375 C 1.984375 -1.976562 2.015625 -1.851562 2.015625 -1.71875 C 2.015625 -1.570312 1.972656 -1.4375 1.890625 -1.3125 C 1.816406 -1.1875 1.695312 -1.09375 1.53125 -1.03125 L 2.046875 0 L 1.53125 0 L 1.0625 -0.96875 L 0.6875 -0.96875 L 0.6875 0 Z M 0.6875 -1.3125 L 1.125 -1.3125 C 1.269531 -1.3125 1.378906 -1.347656 1.453125 -1.421875 C 1.523438 -1.492188 1.5625 -1.585938 1.5625 -1.703125 C 1.5625 -1.816406 1.523438 -1.910156 1.453125 -1.984375 C 1.378906 -2.054688 1.265625 -2.09375 1.109375 -2.09375 L 0.6875 -2.09375 Z M 0.6875 -1.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(98.440745, 84.411684)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(100.556104, 84.411684)">
                    <g>
                        <path d="M 0.703125 0 L 0.0625 -1.75 L 0.53125 -1.75 L 0.984375 -0.421875 L 1.421875 -1.75 L 1.890625 -1.75 L 1.25 0 Z M 0.703125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(102.512281, 84.411684)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(104.62764, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(106.778376, 84.411684)">
                    <g>
                        <path d="M 0.890625 0.046875 C 0.671875 0.046875 0.5 -0.0195312 0.375 -0.15625 C 0.257812 -0.300781 0.203125 -0.503906 0.203125 -0.765625 L 0.203125 -1.75 L 0.65625 -1.75 L 0.65625 -0.8125 C 0.65625 -0.65625 0.679688 -0.535156 0.734375 -0.453125 C 0.796875 -0.378906 0.894531 -0.34375 1.03125 -0.34375 C 1.15625 -0.34375 1.257812 -0.382812 1.34375 -0.46875 C 1.425781 -0.5625 1.46875 -0.6875 1.46875 -0.84375 L 1.46875 -1.75 L 1.90625 -1.75 L 1.90625 0 L 1.515625 0 L 1.484375 -0.296875 C 1.421875 -0.191406 1.335938 -0.109375 1.234375 -0.046875 C 1.140625 0.015625 1.023438 0.046875 0.890625 0.046875 Z M 0.890625 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(108.929112, 84.411684)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(124.516466, 84.411684)">
                    <g>
                        <path d="M 1.328125 0.046875 C 1.085938 0.046875 0.878906 -0.00390625 0.703125 -0.109375 C 0.535156 -0.222656 0.398438 -0.375 0.296875 -0.5625 C 0.203125 -0.75 0.15625 -0.96875 0.15625 -1.21875 C 0.15625 -1.476562 0.203125 -1.703125 0.296875 -1.890625 C 0.398438 -2.085938 0.546875 -2.238281 0.734375 -2.34375 C 0.921875 -2.457031 1.140625 -2.515625 1.390625 -2.515625 C 1.679688 -2.515625 1.921875 -2.441406 2.109375 -2.296875 C 2.304688 -2.160156 2.429688 -1.972656 2.484375 -1.734375 L 1.984375 -1.734375 C 1.941406 -1.847656 1.867188 -1.9375 1.765625 -2 C 1.671875 -2.0625 1.546875 -2.09375 1.390625 -2.09375 C 1.148438 -2.09375 0.960938 -2.015625 0.828125 -1.859375 C 0.691406 -1.703125 0.625 -1.488281 0.625 -1.21875 C 0.625 -0.945312 0.6875 -0.734375 0.8125 -0.578125 C 0.945312 -0.429688 1.128906 -0.359375 1.359375 -0.359375 C 1.585938 -0.359375 1.757812 -0.414062 1.875 -0.53125 C 1.988281 -0.65625 2.054688 -0.816406 2.078125 -1.015625 L 1.453125 -1.015625 L 1.453125 -1.359375 L 2.53125 -1.359375 L 2.53125 0 L 2.109375 0 L 2.078125 -0.328125 C 1.992188 -0.203125 1.890625 -0.109375 1.765625 -0.046875 C 1.648438 0.015625 1.503906 0.046875 1.328125 0.046875 Z M 1.328125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(127.250871, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(128.651677, 84.411684)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(130.795335, 84.411684)">
                    <g>
                        <path d="M 0.578125 0 L 0.0625 -1.75 L 0.515625 -1.75 L 0.8125 -0.484375 L 1.171875 -1.75 L 1.671875 -1.75 L 2.015625 -0.484375 L 2.328125 -1.75 L 2.78125 -1.75 L 2.265625 0 L 1.796875 0 L 1.421875 -1.3125 L 1.046875 0 Z M 0.578125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(133.632325, 84.411684)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(135.121566, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 -1.484375 C 0.738281 -1.578125 0.8125 -1.648438 0.90625 -1.703125 C 1.007812 -1.765625 1.128906 -1.796875 1.265625 -1.796875 C 1.484375 -1.796875 1.648438 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.25 -1.40625 1.125 -1.40625 C 1 -1.40625 0.894531 -1.359375 0.8125 -1.265625 C 0.726562 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(153.321418, 84.411684)">
                    <g>
                        <path d="M 1.359375 0.046875 C 1.109375 0.046875 0.894531 -0.00390625 0.71875 -0.109375 C 0.539062 -0.222656 0.398438 -0.375 0.296875 -0.5625 C 0.203125 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.203125 -1.703125 0.296875 -1.890625 C 0.398438 -2.085938 0.539062 -2.238281 0.71875 -2.34375 C 0.894531 -2.457031 1.109375 -2.515625 1.359375 -2.515625 C 1.648438 -2.515625 1.890625 -2.441406 2.078125 -2.296875 C 2.273438 -2.148438 2.394531 -1.941406 2.4375 -1.671875 L 1.953125 -1.671875 C 1.921875 -1.804688 1.851562 -1.910156 1.75 -1.984375 C 1.644531 -2.066406 1.515625 -2.109375 1.359375 -2.109375 C 1.128906 -2.109375 0.945312 -2.03125 0.8125 -1.875 C 0.6875 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.6875 -0.75 0.8125 -0.59375 C 0.945312 -0.4375 1.128906 -0.359375 1.359375 -0.359375 C 1.515625 -0.359375 1.644531 -0.394531 1.75 -0.46875 C 1.851562 -0.539062 1.921875 -0.640625 1.953125 -0.765625 L 2.4375 -0.765625 C 2.394531 -0.515625 2.273438 -0.316406 2.078125 -0.171875 C 1.890625 -0.0234375 1.648438 0.046875 1.359375 0.046875 Z M 1.359375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(155.928476, 84.411684)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(158.072133, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.515625 C 0.722656 -1.597656 0.796875 -1.664062 0.890625 -1.71875 C 0.984375 -1.769531 1.09375 -1.796875 1.21875 -1.796875 C 1.488281 -1.796875 1.679688 -1.691406 1.796875 -1.484375 C 1.859375 -1.578125 1.941406 -1.648438 2.046875 -1.703125 C 2.148438 -1.765625 2.265625 -1.796875 2.390625 -1.796875 C 2.617188 -1.796875 2.796875 -1.726562 2.921875 -1.59375 C 3.046875 -1.457031 3.109375 -1.253906 3.109375 -0.984375 L 3.109375 0 L 2.65625 0 L 2.65625 -0.953125 C 2.65625 -1.097656 2.625 -1.207031 2.5625 -1.28125 C 2.507812 -1.363281 2.421875 -1.40625 2.296875 -1.40625 C 2.179688 -1.40625 2.082031 -1.359375 2 -1.265625 C 1.925781 -1.179688 1.890625 -1.0625 1.890625 -0.90625 L 1.890625 0 L 1.4375 0 L 1.4375 -0.953125 C 1.4375 -1.097656 1.40625 -1.207031 1.34375 -1.28125 C 1.289062 -1.363281 1.203125 -1.40625 1.078125 -1.40625 C 0.960938 -1.40625 0.867188 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(161.386669, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.515625 C 0.722656 -1.597656 0.796875 -1.664062 0.890625 -1.71875 C 0.984375 -1.769531 1.09375 -1.796875 1.21875 -1.796875 C 1.488281 -1.796875 1.679688 -1.691406 1.796875 -1.484375 C 1.859375 -1.578125 1.941406 -1.648438 2.046875 -1.703125 C 2.148438 -1.765625 2.265625 -1.796875 2.390625 -1.796875 C 2.617188 -1.796875 2.796875 -1.726562 2.921875 -1.59375 C 3.046875 -1.457031 3.109375 -1.253906 3.109375 -0.984375 L 3.109375 0 L 2.65625 0 L 2.65625 -0.953125 C 2.65625 -1.097656 2.625 -1.207031 2.5625 -1.28125 C 2.507812 -1.363281 2.421875 -1.40625 2.296875 -1.40625 C 2.179688 -1.40625 2.082031 -1.359375 2 -1.265625 C 1.925781 -1.179688 1.890625 -1.0625 1.890625 -0.90625 L 1.890625 0 L 1.4375 0 L 1.4375 -0.953125 C 1.4375 -1.097656 1.40625 -1.207031 1.34375 -1.28125 C 1.289062 -1.363281 1.203125 -1.40625 1.078125 -1.40625 C 0.960938 -1.40625 0.867188 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(164.701204, 84.411684)">
                    <g>
                        <path d="M 0.890625 0.046875 C 0.671875 0.046875 0.5 -0.0195312 0.375 -0.15625 C 0.257812 -0.300781 0.203125 -0.503906 0.203125 -0.765625 L 0.203125 -1.75 L 0.65625 -1.75 L 0.65625 -0.8125 C 0.65625 -0.65625 0.679688 -0.535156 0.734375 -0.453125 C 0.796875 -0.378906 0.894531 -0.34375 1.03125 -0.34375 C 1.15625 -0.34375 1.257812 -0.382812 1.34375 -0.46875 C 1.425781 -0.5625 1.46875 -0.6875 1.46875 -0.84375 L 1.46875 -1.75 L 1.90625 -1.75 L 1.90625 0 L 1.515625 0 L 1.484375 -0.296875 C 1.421875 -0.191406 1.335938 -0.109375 1.234375 -0.046875 C 1.140625 0.015625 1.023438 0.046875 0.890625 0.046875 Z M 0.890625 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(166.85194, 84.411684)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(169.002676, 84.411684)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(169.947161, 84.411684)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(171.436403, 84.411684)">
                    <g>
                        <path d="M 0.453125 0.78125 L 0.859375 -0.109375 L 0.75 -0.109375 L 0.0625 -1.75 L 0.5625 -1.75 L 1.046875 -0.515625 L 1.5625 -1.75 L 2.046875 -1.75 L 0.921875 0.78125 Z M 0.453125 0.78125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(67.718665, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 0.6875 -2.46875 L 0.6875 -1.4375 L 1.796875 -1.4375 L 1.796875 -2.46875 L 2.25 -2.46875 L 2.25 0 L 1.796875 0 L 1.796875 -1.078125 L 0.6875 -1.078125 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(70.216063, 112.323295)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(71.160548, 112.323295)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(73.01768, 112.323295)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(74.506921, 112.323295)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(76.650579, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(78.051385, 112.323295)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(78.99587, 112.323295)">
                    <g>
                        <path d="M 1.09375 0.046875 C 0.90625 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.90625 -1.796875 1.09375 -1.796875 C 1.3125 -1.796875 1.492188 -1.734375 1.640625 -1.609375 C 1.796875 -1.492188 1.898438 -1.335938 1.953125 -1.140625 L 1.46875 -1.140625 C 1.445312 -1.222656 1.398438 -1.285156 1.328125 -1.328125 C 1.253906 -1.378906 1.171875 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.171875 0.640625 -1.039062 0.640625 -0.875 C 0.640625 -0.707031 0.679688 -0.578125 0.765625 -0.484375 C 0.847656 -0.390625 0.953125 -0.34375 1.078125 -0.34375 C 1.171875 -0.34375 1.253906 -0.363281 1.328125 -0.40625 C 1.398438 -0.457031 1.445312 -0.523438 1.46875 -0.609375 L 1.953125 -0.609375 C 1.898438 -0.410156 1.796875 -0.25 1.640625 -0.125 C 1.492188 -0.0078125 1.3125 0.046875 1.09375 0.046875 Z M 1.09375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(81.118304, 112.323295)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(83.159381, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(96.247023, 112.323295)">
                    <g>
                        <path d="M 1.359375 0.046875 C 1.109375 0.046875 0.894531 -0.00390625 0.71875 -0.109375 C 0.539062 -0.222656 0.398438 -0.375 0.296875 -0.5625 C 0.203125 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.203125 -1.703125 0.296875 -1.890625 C 0.398438 -2.085938 0.539062 -2.238281 0.71875 -2.34375 C 0.894531 -2.457031 1.109375 -2.515625 1.359375 -2.515625 C 1.648438 -2.515625 1.890625 -2.441406 2.078125 -2.296875 C 2.273438 -2.148438 2.394531 -1.941406 2.4375 -1.671875 L 1.953125 -1.671875 C 1.921875 -1.804688 1.851562 -1.910156 1.75 -1.984375 C 1.644531 -2.066406 1.515625 -2.109375 1.359375 -2.109375 C 1.128906 -2.109375 0.945312 -2.03125 0.8125 -1.875 C 0.6875 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.6875 -0.75 0.8125 -0.59375 C 0.945312 -0.4375 1.128906 -0.359375 1.359375 -0.359375 C 1.515625 -0.359375 1.644531 -0.394531 1.75 -0.46875 C 1.851562 -0.539062 1.921875 -0.640625 1.953125 -0.765625 L 2.4375 -0.765625 C 2.394531 -0.515625 2.273438 -0.316406 2.078125 -0.171875 C 1.890625 -0.0234375 1.648438 0.046875 1.359375 0.046875 Z M 1.359375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(98.85408, 112.323295)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(100.997738, 112.323295)">
                    <g>
                        <path d="M 0.203125 -0.828125 L 0.203125 -1.21875 L 1.671875 -1.21875 L 1.671875 -0.828125 Z M 0.203125 -0.828125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(102.861944, 112.323295)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(103.806429, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(105.957165, 112.323295)">
                    <g>
                        <path d="M 0.703125 0 L 0.0625 -1.75 L 0.53125 -1.75 L 0.984375 -0.421875 L 1.421875 -1.75 L 1.890625 -1.75 L 1.25 0 Z M 0.703125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(107.913342, 112.323295)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(110.028701, 112.323295)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(111.885833, 112.323295)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(113.375075, 112.323295)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(115.518732, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(116.919539, 112.323295)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(124.36815, 112.323295)">
                    <g>
                        <path d="M 1.390625 0.046875 C 1.148438 0.046875 0.9375 -0.00390625 0.75 -0.109375 C 0.5625 -0.222656 0.414062 -0.375 0.3125 -0.5625 C 0.207031 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.207031 -1.703125 0.3125 -1.890625 C 0.414062 -2.085938 0.5625 -2.238281 0.75 -2.34375 C 0.9375 -2.457031 1.148438 -2.515625 1.390625 -2.515625 C 1.640625 -2.515625 1.859375 -2.457031 2.046875 -2.34375 C 2.234375 -2.238281 2.378906 -2.085938 2.484375 -1.890625 C 2.585938 -1.703125 2.640625 -1.484375 2.640625 -1.234375 C 2.640625 -0.984375 2.585938 -0.757812 2.484375 -0.5625 C 2.378906 -0.375 2.234375 -0.222656 2.046875 -0.109375 C 1.859375 -0.00390625 1.640625 0.046875 1.390625 0.046875 Z M 1.390625 -0.359375 C 1.628906 -0.359375 1.816406 -0.4375 1.953125 -0.59375 C 2.097656 -0.75 2.171875 -0.960938 2.171875 -1.234375 C 2.171875 -1.503906 2.097656 -1.71875 1.953125 -1.875 C 1.816406 -2.03125 1.628906 -2.109375 1.390625 -2.109375 C 1.160156 -2.109375 0.972656 -2.03125 0.828125 -1.875 C 0.691406 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.691406 -0.75 0.828125 -0.59375 C 0.972656 -0.4375 1.160156 -0.359375 1.390625 -0.359375 Z M 1.390625 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(127.166227, 112.323295)">
                    <g>
                        <path d="M 0.890625 0.046875 C 0.671875 0.046875 0.5 -0.0195312 0.375 -0.15625 C 0.257812 -0.300781 0.203125 -0.503906 0.203125 -0.765625 L 0.203125 -1.75 L 0.65625 -1.75 L 0.65625 -0.8125 C 0.65625 -0.65625 0.679688 -0.535156 0.734375 -0.453125 C 0.796875 -0.378906 0.894531 -0.34375 1.03125 -0.34375 C 1.15625 -0.34375 1.257812 -0.382812 1.34375 -0.46875 C 1.425781 -0.5625 1.46875 -0.6875 1.46875 -0.84375 L 1.46875 -1.75 L 1.90625 -1.75 L 1.90625 0 L 1.515625 0 L 1.484375 -0.296875 C 1.421875 -0.191406 1.335938 -0.109375 1.234375 -0.046875 C 1.140625 0.015625 1.023438 0.046875 0.890625 0.046875 Z M 0.890625 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(129.316963, 112.323295)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(130.806205, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(131.722391, 112.323295)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(132.666876, 112.323295)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(134.782235, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(136.183041, 112.323295)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(153.014721, 112.323295)">
                    <g>
                        <path d="M 0.078125 0 L 0.984375 -2.46875 L 1.5 -2.46875 L 2.390625 0 L 1.921875 0 L 1.71875 -0.578125 L 0.75 -0.578125 L 0.546875 0 Z M 0.875 -0.921875 L 1.59375 -0.921875 L 1.234375 -1.953125 Z M 0.875 -0.921875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(155.494431, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(156.410617, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(157.326804, 112.323295)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(159.470461, 112.323295)">
                    <g>
                        <path d="M 1.09375 0.046875 C 0.90625 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.90625 -1.796875 1.09375 -1.796875 C 1.3125 -1.796875 1.492188 -1.734375 1.640625 -1.609375 C 1.796875 -1.492188 1.898438 -1.335938 1.953125 -1.140625 L 1.46875 -1.140625 C 1.445312 -1.222656 1.398438 -1.285156 1.328125 -1.328125 C 1.253906 -1.378906 1.171875 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.171875 0.640625 -1.039062 0.640625 -0.875 C 0.640625 -0.707031 0.679688 -0.578125 0.765625 -0.484375 C 0.847656 -0.390625 0.953125 -0.34375 1.078125 -0.34375 C 1.171875 -0.34375 1.253906 -0.363281 1.328125 -0.40625 C 1.398438 -0.457031 1.445312 -0.523438 1.46875 -0.609375 L 1.953125 -0.609375 C 1.898438 -0.410156 1.796875 -0.25 1.640625 -0.125 C 1.492188 -0.0078125 1.3125 0.046875 1.09375 0.046875 Z M 1.09375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(161.592895, 112.323295)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(163.633972, 112.323295)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(165.123213, 112.323295)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(166.067698, 112.323295)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(168.211356, 112.323295)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(170.362092, 112.323295)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(67.718665, 141.498385)">
                    <g>
                        <path d="M 0.734375 0 L 0.09375 -2.46875 L 0.578125 -2.46875 L 1.015625 -0.5 L 1.546875 -2.46875 L 2.03125 -2.46875 L 2.546875 -0.5 L 2.984375 -2.46875 L 3.484375 -2.46875 L 2.8125 0 L 2.265625 0 L 1.78125 -1.828125 L 1.28125 0 Z M 0.734375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(71.291431, 141.498385)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(73.435089, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(74.835895, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 -1.046875 L 1.296875 -1.75 L 1.84375 -1.75 L 1.125 -0.953125 L 1.953125 0 L 1.390625 0 L 0.6875 -0.875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(76.845134, 141.498385)">
                    <g>
                        <path d="M 0.3125 0 L 0.3125 -1.375 L 0.078125 -1.375 L 0.078125 -1.75 L 0.3125 -1.75 L 0.3125 -1.953125 C 0.3125 -2.171875 0.363281 -2.320312 0.46875 -2.40625 C 0.570312 -2.5 0.71875 -2.546875 0.90625 -2.546875 L 1.109375 -2.546875 L 1.109375 -2.15625 L 0.984375 -2.15625 C 0.898438 -2.15625 0.84375 -2.140625 0.8125 -2.109375 C 0.78125 -2.078125 0.765625 -2.023438 0.765625 -1.953125 L 0.765625 -1.75 L 1.140625 -1.75 L 1.140625 -1.375 L 0.765625 -1.375 L 0.765625 0 Z M 0.3125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(78.115057, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.546875 L 0.6875 -2.546875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(79.031243, 141.498385)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(81.174901, 141.498385)">
                    <g>
                        <path d="M 0.578125 0 L 0.0625 -1.75 L 0.515625 -1.75 L 0.8125 -0.484375 L 1.171875 -1.75 L 1.671875 -1.75 L 2.015625 -0.484375 L 2.328125 -1.75 L 2.78125 -1.75 L 2.265625 0 L 1.796875 0 L 1.421875 -1.3125 L 1.046875 0 Z M 0.578125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(84.011891, 141.498385)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(96.349254, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 0.6875 -2.46875 L 0.6875 -0.359375 L 1.78125 -0.359375 L 1.78125 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(98.298357, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 1.15625 -2.46875 C 1.351562 -2.46875 1.515625 -2.4375 1.640625 -2.375 C 1.773438 -2.3125 1.875 -2.21875 1.9375 -2.09375 C 2 -1.976562 2.03125 -1.851562 2.03125 -1.71875 C 2.03125 -1.582031 2 -1.457031 1.9375 -1.34375 C 1.875 -1.226562 1.773438 -1.132812 1.640625 -1.0625 C 1.515625 -0.988281 1.351562 -0.953125 1.15625 -0.953125 L 0.6875 -0.953125 L 0.6875 0 Z M 0.6875 -1.328125 L 1.125 -1.328125 C 1.28125 -1.328125 1.394531 -1.359375 1.46875 -1.421875 C 1.539062 -1.492188 1.578125 -1.59375 1.578125 -1.71875 C 1.578125 -1.832031 1.539062 -1.925781 1.46875 -2 C 1.394531 -2.070312 1.28125 -2.109375 1.125 -2.109375 L 0.6875 -2.109375 Z M 0.6875 -1.328125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(100.445553, 141.498385)">
                    <g />
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(101.287454, 141.498385)">
                    <g>
                        <path d="M 1.359375 0.046875 C 1.109375 0.046875 0.894531 -0.00390625 0.71875 -0.109375 C 0.539062 -0.222656 0.398438 -0.375 0.296875 -0.5625 C 0.203125 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.203125 -1.703125 0.296875 -1.890625 C 0.398438 -2.085938 0.539062 -2.238281 0.71875 -2.34375 C 0.894531 -2.457031 1.109375 -2.515625 1.359375 -2.515625 C 1.648438 -2.515625 1.890625 -2.441406 2.078125 -2.296875 C 2.273438 -2.148438 2.394531 -1.941406 2.4375 -1.671875 L 1.953125 -1.671875 C 1.921875 -1.804688 1.851562 -1.910156 1.75 -1.984375 C 1.644531 -2.066406 1.515625 -2.109375 1.359375 -2.109375 C 1.128906 -2.109375 0.945312 -2.03125 0.8125 -1.875 C 0.6875 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.6875 -0.75 0.8125 -0.59375 C 0.945312 -0.4375 1.128906 -0.359375 1.359375 -0.359375 C 1.515625 -0.359375 1.644531 -0.394531 1.75 -0.46875 C 1.851562 -0.539062 1.921875 -0.640625 1.953125 -0.765625 L 2.4375 -0.765625 C 2.394531 -0.515625 2.273438 -0.316406 2.078125 -0.171875 C 1.890625 -0.0234375 1.648438 0.046875 1.359375 0.046875 Z M 1.359375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(103.894511, 141.498385)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(106.038169, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.515625 C 0.722656 -1.597656 0.796875 -1.664062 0.890625 -1.71875 C 0.984375 -1.769531 1.09375 -1.796875 1.21875 -1.796875 C 1.488281 -1.796875 1.679688 -1.691406 1.796875 -1.484375 C 1.859375 -1.578125 1.941406 -1.648438 2.046875 -1.703125 C 2.148438 -1.765625 2.265625 -1.796875 2.390625 -1.796875 C 2.617188 -1.796875 2.796875 -1.726562 2.921875 -1.59375 C 3.046875 -1.457031 3.109375 -1.253906 3.109375 -0.984375 L 3.109375 0 L 2.65625 0 L 2.65625 -0.953125 C 2.65625 -1.097656 2.625 -1.207031 2.5625 -1.28125 C 2.507812 -1.363281 2.421875 -1.40625 2.296875 -1.40625 C 2.179688 -1.40625 2.082031 -1.359375 2 -1.265625 C 1.925781 -1.179688 1.890625 -1.0625 1.890625 -0.90625 L 1.890625 0 L 1.4375 0 L 1.4375 -0.953125 C 1.4375 -1.097656 1.40625 -1.207031 1.34375 -1.28125 C 1.289062 -1.363281 1.203125 -1.40625 1.078125 -1.40625 C 0.960938 -1.40625 0.867188 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(109.352704, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.515625 C 0.722656 -1.597656 0.796875 -1.664062 0.890625 -1.71875 C 0.984375 -1.769531 1.09375 -1.796875 1.21875 -1.796875 C 1.488281 -1.796875 1.679688 -1.691406 1.796875 -1.484375 C 1.859375 -1.578125 1.941406 -1.648438 2.046875 -1.703125 C 2.148438 -1.765625 2.265625 -1.796875 2.390625 -1.796875 C 2.617188 -1.796875 2.796875 -1.726562 2.921875 -1.59375 C 3.046875 -1.457031 3.109375 -1.253906 3.109375 -0.984375 L 3.109375 0 L 2.65625 0 L 2.65625 -0.953125 C 2.65625 -1.097656 2.625 -1.207031 2.5625 -1.28125 C 2.507812 -1.363281 2.421875 -1.40625 2.296875 -1.40625 C 2.179688 -1.40625 2.082031 -1.359375 2 -1.265625 C 1.925781 -1.179688 1.890625 -1.0625 1.890625 -0.90625 L 1.890625 0 L 1.4375 0 L 1.4375 -0.953125 C 1.4375 -1.097656 1.40625 -1.207031 1.34375 -1.28125 C 1.289062 -1.363281 1.203125 -1.40625 1.078125 -1.40625 C 0.960938 -1.40625 0.867188 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(112.66724, 141.498385)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(124.57261, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 1.234375 -2.46875 C 1.492188 -2.46875 1.6875 -2.40625 1.8125 -2.28125 C 1.945312 -2.164062 2.015625 -2.019531 2.015625 -1.84375 C 2.015625 -1.6875 1.972656 -1.5625 1.890625 -1.46875 C 1.804688 -1.375 1.707031 -1.3125 1.59375 -1.28125 C 1.726562 -1.25 1.84375 -1.175781 1.9375 -1.0625 C 2.03125 -0.945312 2.078125 -0.816406 2.078125 -0.671875 C 2.078125 -0.472656 2.003906 -0.3125 1.859375 -0.1875 C 1.722656 -0.0625 1.523438 0 1.265625 0 Z M 0.6875 -1.4375 L 1.171875 -1.4375 C 1.296875 -1.4375 1.390625 -1.460938 1.453125 -1.515625 C 1.523438 -1.578125 1.5625 -1.660156 1.5625 -1.765625 C 1.5625 -1.867188 1.523438 -1.953125 1.453125 -2.015625 C 1.390625 -2.078125 1.289062 -2.109375 1.15625 -2.109375 L 0.6875 -2.109375 Z M 0.6875 -0.375 L 1.203125 -0.375 C 1.328125 -0.375 1.425781 -0.398438 1.5 -0.453125 C 1.582031 -0.515625 1.625 -0.601562 1.625 -0.71875 C 1.625 -0.832031 1.582031 -0.921875 1.5 -0.984375 C 1.425781 -1.054688 1.320312 -1.09375 1.1875 -1.09375 L 0.6875 -1.09375 Z M 0.6875 -0.375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(126.804703, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(128.205509, 141.498385)">
                    <g>
                        <path d="M 0.828125 0.046875 C 0.679688 0.046875 0.554688 0.0195312 0.453125 -0.03125 C 0.359375 -0.0820312 0.285156 -0.144531 0.234375 -0.21875 C 0.191406 -0.300781 0.171875 -0.390625 0.171875 -0.484375 C 0.171875 -0.648438 0.234375 -0.78125 0.359375 -0.875 C 0.492188 -0.976562 0.6875 -1.03125 0.9375 -1.03125 L 1.390625 -1.03125 L 1.390625 -1.078125 C 1.390625 -1.191406 1.351562 -1.273438 1.28125 -1.328125 C 1.207031 -1.390625 1.125 -1.421875 1.03125 -1.421875 C 0.9375 -1.421875 0.851562 -1.398438 0.78125 -1.359375 C 0.71875 -1.316406 0.675781 -1.253906 0.65625 -1.171875 L 0.21875 -1.171875 C 0.226562 -1.296875 0.269531 -1.40625 0.34375 -1.5 C 0.414062 -1.59375 0.507812 -1.664062 0.625 -1.71875 C 0.75 -1.769531 0.882812 -1.796875 1.03125 -1.796875 C 1.28125 -1.796875 1.476562 -1.734375 1.625 -1.609375 C 1.769531 -1.484375 1.84375 -1.304688 1.84375 -1.078125 L 1.84375 0 L 1.453125 0 L 1.40625 -0.28125 C 1.351562 -0.1875 1.28125 -0.109375 1.1875 -0.046875 C 1.09375 0.015625 0.972656 0.046875 0.828125 0.046875 Z M 0.9375 -0.3125 C 1.0625 -0.3125 1.160156 -0.351562 1.234375 -0.4375 C 1.304688 -0.519531 1.351562 -0.625 1.375 -0.75 L 0.984375 -0.75 C 0.867188 -0.75 0.785156 -0.726562 0.734375 -0.6875 C 0.679688 -0.644531 0.65625 -0.59375 0.65625 -0.53125 C 0.65625 -0.457031 0.679688 -0.398438 0.734375 -0.359375 C 0.785156 -0.328125 0.851562 -0.3125 0.9375 -0.3125 Z M 0.9375 -0.3125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(130.246586, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(132.397322, 141.498385)">
                    <g>
                        <path d="M 1.03125 0.046875 C 0.863281 0.046875 0.71875 0.00390625 0.59375 -0.078125 C 0.46875 -0.160156 0.363281 -0.269531 0.28125 -0.40625 C 0.207031 -0.539062 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.46875 -1.597656 0.59375 -1.671875 C 0.71875 -1.753906 0.863281 -1.796875 1.03125 -1.796875 C 1.164062 -1.796875 1.28125 -1.769531 1.375 -1.71875 C 1.476562 -1.664062 1.5625 -1.597656 1.625 -1.515625 L 1.625 -2.546875 L 2.078125 -2.546875 L 2.078125 0 L 1.671875 0 L 1.625 -0.25 C 1.5625 -0.175781 1.484375 -0.109375 1.390625 -0.046875 C 1.296875 0.015625 1.175781 0.046875 1.03125 0.046875 Z M 1.125 -0.359375 C 1.269531 -0.359375 1.390625 -0.40625 1.484375 -0.5 C 1.578125 -0.59375 1.625 -0.71875 1.625 -0.875 C 1.625 -1.03125 1.578125 -1.15625 1.484375 -1.25 C 1.390625 -1.34375 1.269531 -1.390625 1.125 -1.390625 C 0.988281 -1.390625 0.867188 -1.34375 0.765625 -1.25 C 0.671875 -1.15625 0.625 -1.03125 0.625 -0.875 C 0.625 -0.726562 0.671875 -0.601562 0.765625 -0.5 C 0.867188 -0.40625 0.988281 -0.359375 1.125 -0.359375 Z M 1.125 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(134.703701, 141.498385)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(135.648186, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(137.798922, 141.498385)">
                    <g>
                        <path d="M 0.96875 -0.515625 C 0.882812 -0.515625 0.804688 -0.523438 0.734375 -0.546875 L 0.609375 -0.421875 C 0.640625 -0.398438 0.691406 -0.378906 0.765625 -0.359375 C 0.835938 -0.347656 0.945312 -0.335938 1.09375 -0.328125 C 1.332031 -0.304688 1.503906 -0.25 1.609375 -0.15625 C 1.710938 -0.0703125 1.765625 0.0507812 1.765625 0.21875 C 1.765625 0.320312 1.734375 0.414062 1.671875 0.5 C 1.617188 0.59375 1.535156 0.664062 1.421875 0.71875 C 1.304688 0.78125 1.15625 0.8125 0.96875 0.8125 C 0.71875 0.8125 0.515625 0.765625 0.359375 0.671875 C 0.210938 0.585938 0.140625 0.453125 0.140625 0.265625 C 0.140625 0.109375 0.210938 -0.0234375 0.359375 -0.140625 C 0.316406 -0.171875 0.273438 -0.195312 0.234375 -0.21875 C 0.203125 -0.238281 0.175781 -0.265625 0.15625 -0.296875 L 0.15625 -0.375 L 0.453125 -0.703125 C 0.316406 -0.816406 0.25 -0.96875 0.25 -1.15625 C 0.25 -1.269531 0.273438 -1.375 0.328125 -1.46875 C 0.390625 -1.570312 0.472656 -1.648438 0.578125 -1.703125 C 0.691406 -1.765625 0.820312 -1.796875 0.96875 -1.796875 C 1.070312 -1.796875 1.164062 -1.78125 1.25 -1.75 L 1.90625 -1.75 L 1.90625 -1.46875 L 1.609375 -1.453125 C 1.660156 -1.367188 1.6875 -1.269531 1.6875 -1.15625 C 1.6875 -1.039062 1.65625 -0.929688 1.59375 -0.828125 C 1.539062 -0.734375 1.457031 -0.65625 1.34375 -0.59375 C 1.238281 -0.539062 1.113281 -0.515625 0.96875 -0.515625 Z M 0.96875 -0.875 C 1.0625 -0.875 1.132812 -0.894531 1.1875 -0.9375 C 1.25 -0.988281 1.28125 -1.0625 1.28125 -1.15625 C 1.28125 -1.25 1.25 -1.316406 1.1875 -1.359375 C 1.132812 -1.410156 1.0625 -1.4375 0.96875 -1.4375 C 0.875 -1.4375 0.796875 -1.410156 0.734375 -1.359375 C 0.679688 -1.316406 0.65625 -1.25 0.65625 -1.15625 C 0.65625 -1.0625 0.679688 -0.988281 0.734375 -0.9375 C 0.796875 -0.894531 0.875 -0.875 0.96875 -0.875 Z M 0.546875 0.21875 C 0.546875 0.300781 0.585938 0.363281 0.671875 0.40625 C 0.753906 0.457031 0.851562 0.484375 0.96875 0.484375 C 1.082031 0.484375 1.171875 0.457031 1.234375 0.40625 C 1.304688 0.363281 1.34375 0.300781 1.34375 0.21875 C 1.34375 0.15625 1.320312 0.101562 1.28125 0.0625 C 1.238281 0.0195312 1.144531 -0.00390625 1 -0.015625 C 0.90625 -0.0234375 0.816406 -0.0351562 0.734375 -0.046875 C 0.671875 -0.00390625 0.625 0.0351562 0.59375 0.078125 C 0.5625 0.117188 0.546875 0.164062 0.546875 0.21875 Z M 0.546875 0.21875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(153.321418, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 0.6875 -2.46875 L 0.6875 -0.359375 L 1.78125 -0.359375 L 1.78125 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(155.27052, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 1.15625 -2.46875 C 1.351562 -2.46875 1.515625 -2.4375 1.640625 -2.375 C 1.773438 -2.3125 1.875 -2.21875 1.9375 -2.09375 C 2 -1.976562 2.03125 -1.851562 2.03125 -1.71875 C 2.03125 -1.582031 2 -1.457031 1.9375 -1.34375 C 1.875 -1.226562 1.773438 -1.132812 1.640625 -1.0625 C 1.515625 -0.988281 1.351562 -0.953125 1.15625 -0.953125 L 0.6875 -0.953125 L 0.6875 0 Z M 0.6875 -1.328125 L 1.125 -1.328125 C 1.28125 -1.328125 1.394531 -1.359375 1.46875 -1.421875 C 1.539062 -1.492188 1.578125 -1.59375 1.578125 -1.71875 C 1.578125 -1.832031 1.539062 -1.925781 1.46875 -2 C 1.394531 -2.070312 1.28125 -2.109375 1.125 -2.109375 L 0.6875 -2.109375 Z M 0.6875 -1.328125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(157.417717, 141.498385)">
                    <g />
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(158.259617, 141.498385)">
                    <g>
                        <path d="M 1.359375 0.046875 C 1.109375 0.046875 0.894531 -0.00390625 0.71875 -0.109375 C 0.539062 -0.222656 0.398438 -0.375 0.296875 -0.5625 C 0.203125 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.203125 -1.703125 0.296875 -1.890625 C 0.398438 -2.085938 0.539062 -2.238281 0.71875 -2.34375 C 0.894531 -2.457031 1.109375 -2.515625 1.359375 -2.515625 C 1.648438 -2.515625 1.890625 -2.441406 2.078125 -2.296875 C 2.273438 -2.148438 2.394531 -1.941406 2.4375 -1.671875 L 1.953125 -1.671875 C 1.921875 -1.804688 1.851562 -1.910156 1.75 -1.984375 C 1.644531 -2.066406 1.515625 -2.109375 1.359375 -2.109375 C 1.128906 -2.109375 0.945312 -2.03125 0.8125 -1.875 C 0.6875 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.6875 -0.75 0.8125 -0.59375 C 0.945312 -0.4375 1.128906 -0.359375 1.359375 -0.359375 C 1.515625 -0.359375 1.644531 -0.394531 1.75 -0.46875 C 1.851562 -0.539062 1.921875 -0.640625 1.953125 -0.765625 L 2.4375 -0.765625 C 2.394531 -0.515625 2.273438 -0.316406 2.078125 -0.171875 C 1.890625 -0.0234375 1.648438 0.046875 1.359375 0.046875 Z M 1.359375 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(160.866675, 141.498385)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(163.010333, 141.498385)">
                    <g>
                        <path d="M 0.203125 -0.828125 L 0.203125 -1.21875 L 1.671875 -1.21875 L 1.671875 -0.828125 Z M 0.203125 -0.828125 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(164.874539, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -2.46875 L 0.6875 -2.46875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(165.80841, 141.498385)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(167.959146, 141.498385)">
                    <g>
                        <path d="M 0.703125 0 L 0.0625 -1.75 L 0.53125 -1.75 L 0.984375 -0.421875 L 1.421875 -1.75 L 1.890625 -1.75 L 1.25 0 Z M 0.703125 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(169.915323, 141.498385)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(172.030682, 141.498385)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(173.887814, 141.498385)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(153.321418, 146.325511)">
                    <g>
                        <path d="M 1.390625 0.046875 C 1.148438 0.046875 0.9375 -0.00390625 0.75 -0.109375 C 0.5625 -0.222656 0.414062 -0.375 0.3125 -0.5625 C 0.207031 -0.757812 0.15625 -0.984375 0.15625 -1.234375 C 0.15625 -1.484375 0.207031 -1.703125 0.3125 -1.890625 C 0.414062 -2.085938 0.5625 -2.238281 0.75 -2.34375 C 0.9375 -2.457031 1.148438 -2.515625 1.390625 -2.515625 C 1.640625 -2.515625 1.859375 -2.457031 2.046875 -2.34375 C 2.234375 -2.238281 2.378906 -2.085938 2.484375 -1.890625 C 2.585938 -1.703125 2.640625 -1.484375 2.640625 -1.234375 C 2.640625 -0.984375 2.585938 -0.757812 2.484375 -0.5625 C 2.378906 -0.375 2.234375 -0.222656 2.046875 -0.109375 C 1.859375 -0.00390625 1.640625 0.046875 1.390625 0.046875 Z M 1.390625 -0.359375 C 1.628906 -0.359375 1.816406 -0.4375 1.953125 -0.59375 C 2.097656 -0.75 2.171875 -0.960938 2.171875 -1.234375 C 2.171875 -1.503906 2.097656 -1.71875 1.953125 -1.875 C 1.816406 -2.03125 1.628906 -2.109375 1.390625 -2.109375 C 1.160156 -2.109375 0.972656 -2.03125 0.828125 -1.875 C 0.691406 -1.71875 0.625 -1.503906 0.625 -1.234375 C 0.625 -0.960938 0.691406 -0.75 0.828125 -0.59375 C 0.972656 -0.4375 1.160156 -0.359375 1.390625 -0.359375 Z M 1.390625 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(156.119495, 146.325511)">
                    <g>
                        <path d="M 0.234375 0.78125 L 0.234375 -1.75 L 0.625 -1.75 L 0.6875 -1.5 C 0.738281 -1.582031 0.8125 -1.648438 0.90625 -1.703125 C 1 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.429688 -1.796875 1.578125 -1.753906 1.703125 -1.671875 C 1.835938 -1.585938 1.941406 -1.476562 2.015625 -1.34375 C 2.085938 -1.207031 2.125 -1.050781 2.125 -0.875 C 2.125 -0.695312 2.085938 -0.535156 2.015625 -0.390625 C 1.941406 -0.253906 1.835938 -0.144531 1.703125 -0.0625 C 1.578125 0.0078125 1.429688 0.046875 1.265625 0.046875 C 1.128906 0.046875 1.007812 0.0195312 0.90625 -0.03125 C 0.8125 -0.0820312 0.738281 -0.148438 0.6875 -0.234375 L 0.6875 0.78125 Z M 1.171875 -0.359375 C 1.316406 -0.359375 1.4375 -0.40625 1.53125 -0.5 C 1.625 -0.59375 1.671875 -0.71875 1.671875 -0.875 C 1.671875 -1.03125 1.625 -1.15625 1.53125 -1.25 C 1.4375 -1.34375 1.316406 -1.390625 1.171875 -1.390625 C 1.023438 -1.390625 0.90625 -1.34375 0.8125 -1.25 C 0.71875 -1.15625 0.671875 -1.03125 0.671875 -0.875 C 0.671875 -0.71875 0.71875 -0.59375 0.8125 -0.5 C 0.90625 -0.40625 1.023438 -0.359375 1.171875 -0.359375 Z M 1.171875 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(158.425874, 146.325511)">
                    <g>
                        <path d="M 0.234375 0.78125 L 0.234375 -1.75 L 0.625 -1.75 L 0.6875 -1.5 C 0.738281 -1.582031 0.8125 -1.648438 0.90625 -1.703125 C 1 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.429688 -1.796875 1.578125 -1.753906 1.703125 -1.671875 C 1.835938 -1.585938 1.941406 -1.476562 2.015625 -1.34375 C 2.085938 -1.207031 2.125 -1.050781 2.125 -0.875 C 2.125 -0.695312 2.085938 -0.535156 2.015625 -0.390625 C 1.941406 -0.253906 1.835938 -0.144531 1.703125 -0.0625 C 1.578125 0.0078125 1.429688 0.046875 1.265625 0.046875 C 1.128906 0.046875 1.007812 0.0195312 0.90625 -0.03125 C 0.8125 -0.0820312 0.738281 -0.148438 0.6875 -0.234375 L 0.6875 0.78125 Z M 1.171875 -0.359375 C 1.316406 -0.359375 1.4375 -0.40625 1.53125 -0.5 C 1.625 -0.59375 1.671875 -0.71875 1.671875 -0.875 C 1.671875 -1.03125 1.625 -1.15625 1.53125 -1.25 C 1.4375 -1.34375 1.316406 -1.390625 1.171875 -1.390625 C 1.023438 -1.390625 0.90625 -1.34375 0.8125 -1.25 C 0.71875 -1.15625 0.671875 -1.03125 0.671875 -0.875 C 0.671875 -0.71875 0.71875 -0.59375 0.8125 -0.5 C 0.90625 -0.40625 1.023438 -0.359375 1.171875 -0.359375 Z M 1.171875 -0.359375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(160.732253, 146.325511)">
                    <g>
                        <path d="M 1.0625 0.046875 C 0.894531 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.535156 0.171875 -0.695312 0.171875 -0.875 C 0.171875 -1.050781 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.242188 -1.796875 1.394531 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.488281 1.84375 -1.34375 C 1.925781 -1.207031 1.96875 -1.050781 1.96875 -0.875 C 1.96875 -0.695312 1.925781 -0.535156 1.84375 -0.390625 C 1.769531 -0.253906 1.664062 -0.144531 1.53125 -0.0625 C 1.394531 0.0078125 1.238281 0.046875 1.0625 0.046875 Z M 1.0625 -0.34375 C 1.1875 -0.34375 1.289062 -0.382812 1.375 -0.46875 C 1.46875 -0.5625 1.515625 -0.695312 1.515625 -0.875 C 1.515625 -1.050781 1.46875 -1.179688 1.375 -1.265625 C 1.289062 -1.359375 1.191406 -1.40625 1.078125 -1.40625 C 0.953125 -1.40625 0.847656 -1.359375 0.765625 -1.265625 C 0.679688 -1.179688 0.640625 -1.050781 0.640625 -0.875 C 0.640625 -0.695312 0.679688 -0.5625 0.765625 -0.46875 C 0.847656 -0.382812 0.945312 -0.34375 1.0625 -0.34375 Z M 1.0625 -0.34375 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(162.87591, 146.325511)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.671875 -1.421875 C 0.734375 -1.535156 0.816406 -1.625 0.921875 -1.6875 C 1.035156 -1.757812 1.171875 -1.796875 1.328125 -1.796875 L 1.328125 -1.3125 L 1.1875 -1.3125 C 1.09375 -1.3125 1.003906 -1.296875 0.921875 -1.265625 C 0.847656 -1.234375 0.789062 -1.179688 0.75 -1.109375 C 0.707031 -1.035156 0.6875 -0.929688 0.6875 -0.796875 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(164.276717, 146.325511)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(165.765958, 146.325511)">
                    <g>
                        <path d="M 0.890625 0.046875 C 0.671875 0.046875 0.5 -0.0195312 0.375 -0.15625 C 0.257812 -0.300781 0.203125 -0.503906 0.203125 -0.765625 L 0.203125 -1.75 L 0.65625 -1.75 L 0.65625 -0.8125 C 0.65625 -0.65625 0.679688 -0.535156 0.734375 -0.453125 C 0.796875 -0.378906 0.894531 -0.34375 1.03125 -0.34375 C 1.15625 -0.34375 1.257812 -0.382812 1.34375 -0.46875 C 1.425781 -0.5625 1.46875 -0.6875 1.46875 -0.84375 L 1.46875 -1.75 L 1.90625 -1.75 L 1.90625 0 L 1.515625 0 L 1.484375 -0.296875 C 1.421875 -0.191406 1.335938 -0.109375 1.234375 -0.046875 C 1.140625 0.015625 1.023438 0.046875 0.890625 0.046875 Z M 0.890625 0.046875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(167.916694, 146.325511)">
                    <g>
                        <path d="M 0.234375 0 L 0.234375 -1.75 L 0.625 -1.75 L 0.65625 -1.453125 C 0.71875 -1.554688 0.796875 -1.640625 0.890625 -1.703125 C 0.992188 -1.765625 1.117188 -1.796875 1.265625 -1.796875 C 1.472656 -1.796875 1.640625 -1.726562 1.765625 -1.59375 C 1.890625 -1.457031 1.953125 -1.253906 1.953125 -0.984375 L 1.953125 0 L 1.5 0 L 1.5 -0.953125 C 1.5 -1.097656 1.46875 -1.207031 1.40625 -1.28125 C 1.34375 -1.363281 1.242188 -1.40625 1.109375 -1.40625 C 0.984375 -1.40625 0.878906 -1.359375 0.796875 -1.265625 C 0.722656 -1.179688 0.6875 -1.0625 0.6875 -0.90625 L 0.6875 0 Z M 0.234375 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(170.06743, 146.325511)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(171.011915, 146.325511)">
                    <g>
                        <path d="M 1.015625 0 C 0.828125 0 0.675781 -0.0390625 0.5625 -0.125 C 0.457031 -0.21875 0.40625 -0.378906 0.40625 -0.609375 L 0.40625 -1.375 L 0.109375 -1.375 L 0.109375 -1.75 L 0.40625 -1.75 L 0.453125 -2.21875 L 0.859375 -2.21875 L 0.859375 -1.75 L 1.328125 -1.75 L 1.328125 -1.375 L 0.859375 -1.375 L 0.859375 -0.609375 C 0.859375 -0.523438 0.875 -0.46875 0.90625 -0.4375 C 0.945312 -0.40625 1.007812 -0.390625 1.09375 -0.390625 L 1.3125 -0.390625 L 1.3125 0 Z M 1.015625 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(172.501157, 146.325511)">
                    <g>
                        <path d="M 0.46875 -2.015625 C 0.382812 -2.015625 0.316406 -2.039062 0.265625 -2.09375 C 0.210938 -2.144531 0.1875 -2.207031 0.1875 -2.28125 C 0.1875 -2.351562 0.210938 -2.414062 0.265625 -2.46875 C 0.316406 -2.519531 0.382812 -2.546875 0.46875 -2.546875 C 0.550781 -2.546875 0.617188 -2.519531 0.671875 -2.46875 C 0.722656 -2.414062 0.75 -2.351562 0.75 -2.28125 C 0.75 -2.207031 0.722656 -2.144531 0.671875 -2.09375 C 0.617188 -2.039062 0.550781 -2.015625 0.46875 -2.015625 Z M 0.25 0 L 0.25 -1.75 L 0.703125 -1.75 L 0.703125 0 Z M 0.25 0 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(173.445641, 146.325511)">
                    <g>
                        <path d="M 1.078125 0.046875 C 0.898438 0.046875 0.742188 0.0078125 0.609375 -0.0625 C 0.472656 -0.144531 0.363281 -0.253906 0.28125 -0.390625 C 0.207031 -0.523438 0.171875 -0.679688 0.171875 -0.859375 C 0.171875 -1.046875 0.207031 -1.207031 0.28125 -1.34375 C 0.363281 -1.488281 0.472656 -1.597656 0.609375 -1.671875 C 0.742188 -1.753906 0.898438 -1.796875 1.078125 -1.796875 C 1.253906 -1.796875 1.40625 -1.753906 1.53125 -1.671875 C 1.664062 -1.597656 1.769531 -1.492188 1.84375 -1.359375 C 1.914062 -1.234375 1.953125 -1.09375 1.953125 -0.9375 C 1.953125 -0.90625 1.953125 -0.875 1.953125 -0.84375 C 1.953125 -0.820312 1.953125 -0.796875 1.953125 -0.765625 L 0.625 -0.765625 C 0.632812 -0.628906 0.679688 -0.519531 0.765625 -0.4375 C 0.847656 -0.363281 0.953125 -0.328125 1.078125 -0.328125 C 1.171875 -0.328125 1.25 -0.347656 1.3125 -0.390625 C 1.375 -0.429688 1.421875 -0.484375 1.453125 -0.546875 L 1.90625 -0.546875 C 1.875 -0.441406 1.816406 -0.34375 1.734375 -0.25 C 1.660156 -0.15625 1.566406 -0.0820312 1.453125 -0.03125 C 1.347656 0.0195312 1.222656 0.046875 1.078125 0.046875 Z M 1.078125 -1.421875 C 0.972656 -1.421875 0.875 -1.390625 0.78125 -1.328125 C 0.695312 -1.265625 0.644531 -1.171875 0.625 -1.046875 L 1.5 -1.046875 C 1.488281 -1.160156 1.441406 -1.25 1.359375 -1.3125 C 1.285156 -1.382812 1.191406 -1.421875 1.078125 -1.421875 Z M 1.078125 -1.421875 " />
                    </g>
                    </g>
                </g>
                <g fill="#ffffff" fill-opacity="1">
                    <g transform="translate(175.561, 146.325511)">
                    <g>
                        <path d="M 0.953125 0.046875 C 0.796875 0.046875 0.660156 0.0195312 0.546875 -0.03125 C 0.429688 -0.0820312 0.335938 -0.148438 0.265625 -0.234375 C 0.191406 -0.328125 0.148438 -0.429688 0.140625 -0.546875 L 0.59375 -0.546875 C 0.601562 -0.484375 0.640625 -0.425781 0.703125 -0.375 C 0.765625 -0.332031 0.847656 -0.3125 0.953125 -0.3125 C 1.046875 -0.3125 1.113281 -0.328125 1.15625 -0.359375 C 1.207031 -0.398438 1.234375 -0.445312 1.234375 -0.5 C 1.234375 -0.582031 1.195312 -0.632812 1.125 -0.65625 C 1.0625 -0.6875 0.972656 -0.710938 0.859375 -0.734375 C 0.785156 -0.753906 0.707031 -0.773438 0.625 -0.796875 C 0.550781 -0.816406 0.476562 -0.84375 0.40625 -0.875 C 0.34375 -0.914062 0.289062 -0.960938 0.25 -1.015625 C 0.21875 -1.078125 0.203125 -1.15625 0.203125 -1.25 C 0.203125 -1.394531 0.257812 -1.519531 0.375 -1.625 C 0.5 -1.738281 0.675781 -1.796875 0.90625 -1.796875 C 1.113281 -1.796875 1.273438 -1.742188 1.390625 -1.640625 C 1.515625 -1.546875 1.59375 -1.414062 1.625 -1.25 L 1.1875 -1.25 C 1.164062 -1.375 1.070312 -1.4375 0.90625 -1.4375 C 0.8125 -1.4375 0.742188 -1.421875 0.703125 -1.390625 C 0.660156 -1.359375 0.640625 -1.316406 0.640625 -1.265625 C 0.640625 -1.210938 0.671875 -1.171875 0.734375 -1.140625 C 0.804688 -1.117188 0.898438 -1.09375 1.015625 -1.0625 C 1.128906 -1.03125 1.238281 -1 1.34375 -0.96875 C 1.445312 -0.9375 1.53125 -0.882812 1.59375 -0.8125 C 1.65625 -0.75 1.6875 -0.65625 1.6875 -0.53125 C 1.6875 -0.425781 1.65625 -0.328125 1.59375 -0.234375 C 1.539062 -0.148438 1.457031 -0.0820312 1.34375 -0.03125 C 1.226562 0.0195312 1.097656 0.046875 0.953125 0.046875 Z M 0.953125 0.046875 " />
                    </g>
                    </g>
                </g>
                </svg>`;
    return heatmap_svg;
}