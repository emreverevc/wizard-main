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

    var selection_indexes = JSON.parse(window.location.href.split("?")[1]);
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
    
    var whole_fund_container = document.createElement('div');
    whole_fund_container.className = "whole-fund-container";
    whole_fund_container.innerHTML = `<div class="fund-whole-row">
                                        <div class="fund-row" onclick="expand_row(this)">
                                        <div class="fund-logo-container">
                                            <div class="fund-logo" style="background: url(https://images.squarespace-cdn.com/content/v1/62b5eda255f9940094bf5de2/b3c81f34-7419-479a-ac53-5b89c18d5571/No+background.png); background-size: cover;"></div>
                                        </div>
                                        <div class="fund-name">Blahblah</div>
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
                                            <div class="Sector">Sector:&emsp;<span class="pill">Impact</span></div>
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
                                                <img src="https://revereoneimgs.s3.us-west-1.amazonaws.com/wizard-images/ClimateCapitalheatmap.png">                                    
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
                                                    <div>
                                                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="13.5" cy="15" r="10.5" fill="#182C50"/>
                                                            <path d="M6.4782 15.7805C6.08767 15.3899 6.08767 14.7568 6.4782 14.3663L12.8422 8.0023C13.2327 7.61177 13.8658 7.61177 14.2564 8.0023C14.6469 8.39282 14.6469 9.02599 14.2564 9.41651L8.59952 15.0734L14.2564 20.7302C14.6469 21.1207 14.6469 21.7539 14.2564 22.1444C13.8658 22.535 13.2327 22.535 12.8422 22.1444L6.4782 15.7805ZM19.3728 16.0734H7.1853V14.0734H19.3728V16.0734Z" fill="white"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="4.46133" cy="4.46133" r="4.46133" fill="#182C50"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="4.63296" cy="4.46133" r="4.46133" fill="#919AAB"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="4.63296" cy="4.46133" r="4.46133" fill="#919AAB"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="13.5" cy="15" r="10.5" fill="#182C50"/>
                                                            <path d="M20.0799 15.7806C20.4704 15.3901 20.4704 14.7569 20.0799 14.3664L13.7159 8.00242C13.3254 7.61189 12.6923 7.61189 12.3017 8.00242C11.9112 8.39294 11.9112 9.02611 12.3017 9.41663L17.9586 15.0735L12.3017 20.7303C11.9112 21.1209 11.9112 21.754 12.3017 22.1446C12.6923 22.5351 13.3254 22.5351 13.7159 22.1446L20.0799 15.7806ZM7.1853 16.0735H19.3728V14.0735H7.1853V16.0735Z" fill="white"/>
                                                        </svg> 
                                                    </div>
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
    
    for (i = 0; i < funds_index_list.length; i++) {
        var fund_info = getDictionaryEntry(funds_array, funds_index_list[i]);

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