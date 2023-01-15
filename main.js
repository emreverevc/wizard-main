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

var fund_attributes_rank = 0;

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
    
    [selection_description, selection_svg, selection_long_description] = change_selection(element.id);
    
    
    document.querySelector('.selection-short-description').innerHTML = selection_description;
    document.querySelector('.selection-svg').innerHTML = selection_svg;
    document.querySelector('.more-info-text-content').innerHTML = selection_long_description;
  }
}

function selection_clicked_attributes(element) {

  if (element.classList.contains('active')) {
    fund_attributes_rank--;
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

    fund_attributes_rank++;

    element.classList.add('active');
    element.childNodes[1].innerHTML = "";
    element.childNodes[1].style.visibility = "visible";
    
    switch (fund_attributes_rank) {
      case 1:
        element.childNodes[1].innerHTML = one_svg;
        break;
      case 2:
        element.childNodes[1].innerHTML = two_svg;
        break;
      case 3:
        element.childNodes[1].innerHTML = three_svg;
        break;
      case 4:
        element.childNodes[1].innerHTML = four_svg;
        break;
      case 5:
        element.childNodes[1].innerHTML = five_svg;
        break;
    }
        
    
    [selection_description, selection_svg, selection_long_description] = change_selection(element.id);
    
    
    document.querySelector('.selection-short-description').innerHTML = selection_description;
    document.querySelector('.selection-svg').innerHTML = selection_svg;
    document.querySelector('.more-info-text-content').innerHTML = selection_long_description;
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
    case 5:

      for (var item in document.querySelectorAll('.selection-item')) {
        try {
          if (document.querySelectorAll('.selection-item')[item].classList.contains('active')) {
            fund_attributes_selections.push(document.querySelectorAll('.selection-item')[item].id);
          }
        } catch {}
      }
      
      document.getElementById("gold-bar").style.width = "698";

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
  var long_description = "";
  switch (selection) {
    case "Idea":
      description = "Funds that invest in pre-revenue companies tackling large addressable market opportunities with a disruptive technological solution.";
      svg = idea_svg;
      long_description = "Funds that invest in pre-revenue companies tackling large addressable market opportunities with a disruptive technological solution. Although commercialization proof points are still being tested, companies have the lowest valuation–and highest upside–at this stage. These types of startups are often considered high-risk, high-reward opportunities and are typically only suitable for early-stage investors who are comfortable taking on more risk in exchange for potentially larger returns. However, it's important to note that not all startups in this stage will succeed, and thorough due diligence is crucial to identifying those with the best chance of success."
      break;
    case "Early":
      description = "Funds that invest in fast-growing companies that have product-market-fit and early customers.";
      svg = early_svg;
      long_description = 'Funds that invest in fast-growing companies that have product-market-fit and early customers. These companies face heightened competition due to multiple players operating in the same target market. Valuation ranges can be highly volatile, but market and tech risks have been largely mitigated. Early stage startups have typically demonstrated a viable business model and have shown traction in their target market. This stage is characterized by rapid growth and scaling, and companies at this stage may be looking for funding to support expansion and hiring. Early stage startups may also be looking to enter new markets or launch new products. Investing in these companies can provide investors with more visibility and predictability than in idea stage startups, but also increased competition with other investors.'
      break;
    case "Growth":
      description = "Funds that invest in established companies operating in clearly-defined markets.";
      svg = growth_svg;
      long_description = "Funds that invest in established companies operating in clearly-defined markets. Valuations here are closely correlated with public market comparables, and the time to exit is predictable. In a race to become market leaders, companies at this stage must start to grapple with the growth vs. profitability equation. These companies are generating significant revenue and have a proven track record of growth, with a clear path to profitability. They have a stable and experienced management team, and have solidified their position in the market. Investors at this stage have a lower risk profile, but also have a lower potential upside. These companies are often looking for funding to support expansion, acquisitions, or to build out their product and service offerings.";
      break;

    case "Low":
      description = "Your style is to invest in fund managers that consider risk management a core principle in their investment strategy.";
      svg = low_svg;
      long_description = "Does this sound like your persona? <br><br> You are a structured thinker who understands diversification and timing; you have a data-driven mindset. You value repeatable and scalable investment processes and abhor shoot-from-the-hip diligence. Stable, a lover of solid track records, you separate the wheat from the chaff. You're interested in broad-based exposure to established VC franchises vs. betting on the hot-shot manager looking for the next Facebook. To you, allocating to venture capital funds is a deployment exercise, not the consumption of a romance novel."
      break;
    case "Moderate":
      description = "Your style is to invest in fund managers willing to take calculated risks to increase the portfolio's return potential.";
      svg = moderate_svg;
      long_description = "Does this sound like your persona? <br><br> You're a practical, big-picture thinker and don't have time for anything but the best. But you understand that getting the best requires taking risks. You're the kind of person to read about flying cars, drones that combat climate change, ethical supply chains, empowering minority entrepreneurs, or veteran employment technology and want to invest. Taking deep dives into innovation trends excites you. Thematic investing, not spray-and-pray, perfectly balances the upside and downside."
      break;
    case "High":
      description = "Your style is to invest in fund managers with the conviction to bet on ideas and trends that are non-consensus today but could be foundational industries in the future.";
      svg = high_svg;
      long_description = "Does this sound like your persona? <br><br> You're all about high-octane companies and funds. Deep tech, Web3, brain-machine interfaces and transhumanistic technologies aren't just buzzwords. You have been indoctrinated into the notion that venture capital is a game of outliers and want to find outlier managers investing in moonshots. To you, venture capital is buying a piece of the future."
      break;

    case "Consumer":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'This industry is made up of companies that offer products and services to individual customers for personal use or consumption. In this market, the buyers of the product are the consumers themselves. Consumer companies may deliver physical goods to individuals as well as products and services through software programs that operate on computers and mobile devices. <br><br>A few examples of successful consumer startups include Uber, Airbnb, and Spotify.';
      break;
    case "Enterprise":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'This industry is made up of companies that offer products and services not to individuals, but to large and complicated organizations, each with many different processes and connections. Enterprise companies create software and hardware to streamline workflows, improve communication, and provide access to data, making otherwise complicated business tasks more simple. <br><br>A few examples of successful enterprise startups include Salesforce, Zoom, and Workday.';
      break;
    case "Deep-Tech":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'This industry is made up of companies that create technology based on tangible engineering innovation or scientific advances and discoveries. Deep Tech companies use the latest technological advances to jumpstart new industries and solve bottlenecks in existing sectors. Their core focus is to pioneer new solutions that solve society’s biggest issues; including chronic disease, climate change, clean energy, and food production.<br><br>A few examples of successful Deep Tech startups include DeepMind (Google), OpenAI, and Nutonomy (acquired by Delphi Automotive).';
      break;
    case "FinTech":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'This industry, which combines the terms “financial” and “technology”, is made up of companies that utilize technology to enhance or automate financial services and processes. FinTech companies create software, mobile applications, and other technologies to improve and automate traditional forms of finance for businesses and consumers alike. Notable examples include mobile banking, peer-to-peer payment services (i.e Venmo, CashApp), automated portfolio managers (I.e Wealthfront, Betterment), and trading platforms such as Robinhood.<br><br>A few examples of successful FinTech startups include Stripe, Square, and Robinhood.';
      break;
    case "Impact":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'This industry is made up of companies that have a mission or intent on achieving a specific social or environmental outcome, predominantly through their core products or services. Impact companies address the world’s most pressing challenges in sectors such as sustainable agriculture, renewable energy, conservation, microfinance, and affordable and accessible basic services (I.e. housing, healthcare, and education). Impact investors make investments into impact companies with the intention of generating positive, measurable social and environmental impact alongside a financial return. <br><br>A few examples of successful Impact startups include Tesla, Arcadia Power, and CarbonCure Technologies.';
      break;
    case "Life-Sciences":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'This industry is made up of companies that are dedicated to protecting and improving organism life through higher education and innovation, as well as the development of pharmaceuticals, medical technology products and treatments. The Life Sciences sector spans different interests and markets, including biomedicine, pharmaceuticals, biophysics, neuroscience, cell biology, biotechnology, and food processing. Specific areas of application in which Life Science companies are active include artificial intelligence, skin scanning, lasik, and patient monitoring. <br><br>A few examples of successful life sciences startups include Moderna, 23andMe, and Ginkgo Bioworks.';
      break;
    case "Web3":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'This industry is made up of companies that are developing a third generation of web technologies. This new form of internet is being built using decentralized blockchains - the shared ledger systems used by cryptocurrencies like Bitcoin and Etherium. Web3 companies, unlike their predecessors in the era of Web2, give businesses total control and ownership, pushing out the middleman or intermediary, and making services more efficient. Decentralization, privacy, security, and machine learning are early principles of this growing industry. <br><br>A few examples of successful Web3 startups include Ethereum, Chainlink and Uniswap.';
      break;
    case "Agnostic":
      description = "Companies that are just starting out";
      svg = sector_svg;
      long_description = 'Sector Agnostic Funds do not specialize in a specific industry sector. Instead, they represent any company that applies its knowledge, products, and technologies in various industries instead of only one specific industry. Similarly, Sector Agnostic investors are not subject matter experts in any one industry, and will invest in a variety of startups with very different markets, different models, and different technologies. Taking a Sector Agnostic approach in investing means not advocating for one industry only at the exclusion of the others.';
      break;
    

    case "Team":
      description = "A strong team dynamic ensures that investment decisions are made consistently and in line with the experience and track record of the team.";
      svg = sector_svg;
      long_description = 'Some sub-categories we drill down into include:<br><div align="left" style="padding-top: 1%;"><table><col style="width:20%"><col style="width:80%"><tbody><tr><td>Operating</td><td>Does the manager have operating experience (including in the specific investment categories)?</td></tr><tr><td>Investing</td><td>Does the manager have investment experience (including in the particular investment categories)?</td></tr><tr><td>Decision Making</td><td>What is the firm&apos;s investment process for due diligence, investment decisions, and portfolio monitoring?</td></tr><tr><td>Bench</td><td>Beyond the key partners, who else is on the investment team? Is there an active advisor and/or operating network?</td></tr></tbody></table></div>'
      break;
    case "Value-Add":
      description = "VCs who can drive value for their portfolio companies post-investment effectively deliver returns in real-time.";
      svg = sector_svg;
      long_description = 'Some sub-categories we drill down into include:<br><div align="left" style="padding-top: 1%;"><table><col style="width:20%"><col style="width:80%"><tbody><tr><td>Fundraising</td><td>An aggregate amount of how much follow-on the capital they have helped portfolio companies secure from introductions either same round or after.</td></tr><tr><td>Revenue Generation</td><td>Specific to helping portfolio companies, how does the manager informally/formally generate customer interest or conversion of leads?</td></tr><tr><td>Growth Levers</td><td>How does the manager provide tools for supplementing existing internal resources around HR and GTM-related activities?</td></tr><tr><td>Community Building</td><td>Does the manager have an extended network that can be leveraged and unlocked to help portfolio companies?</td></tr></tbody></table></div>';
      break;
    case "Sourcing":
      description = "A large part of being a successful VC is sourcing the right opportunities and identifying the signal from the noise."
      svg = sector_svg;
      long_description = 'Some sub-categories we drill down into include:<br><div align="left" style="padding-top: 1%;"><table><col style="width:20%"><col style="width:80%"><tbody><tr><td>Channels</td><td>Where is the manager sourcing their deals? Does the VC have any unique channels, and how does this help the quality and quantity of deals?</td></tr><tr><td>Funnel Process</td><td>What is the manager&#39;s funnel, and is there a logical/structured process for narrowing opportunities?</td></tr><tr><td>Winning</td><td>How often do they hit their target ownership % OR target check size?</td></tr><tr><td>Signal</td><td>Are they leading deals, and are you taking board seats? Do they have a relationship with these downstream VCs?</td></tr></tbody></table></div>';
      break;
    case "Track-Record":
      description = "In the end, the numbers don't lie. Historical performance is a strong indicator of future success.";
      svg = sector_svg;
      long_description = 'Some sub-categories we drill down into include:<br><div align="left" style="padding-top: 1%;"><table><col style="width:20%"><col style="width:80%"><tbody><tr><td>Historical</td><td>What is the performance of past funds, including track record that might be from previous positions/angel activity?</td></tr><tr><td>Co-investor Strength</td><td>Who are the notable co-investors that have invested alongside the fund manager? What is the manager&#39;s rep within this community?</td></tr><tr><td>Outlier Capture</td><td>This is a specific drill-down of track record that focuses on the manager&#39;s ability to find outliers that drive a large part of the performance. While this is tilted more towards early-stage strategies, it&#39;s translatable to growth and late-stage around the consistency of good returners.</td></tr><tr><td>Follow-on Ratio</td><td>Have any companies received a follow-on round and for how much?</td></tr></tbody></table></div>';
      break;
    case "Firm-Management":
      description = "Good fund managers have substantial fund operating procedures and actively build alignment with their investors.";
      svg = sector_svg;
      long_description = 'Some sub-categories we drill down into include:<br><div align="left" style="padding-top: 1%;"><table><col style="width:20%"><col style="width:80%"><tbody><tr><td>Portfolio Management</td><td>What is portfolio construction? How often do they stay true to this?</td></tr><tr><td>LP Alignment</td><td>How often is the VC sending LP updates? What are the fund terms?</td></tr><tr><td>Firm Branding</td><td>What is the VC doing in terms of branding for themselves or the fund specifically? This can include speaking events, social media engagements, blogging, etc.</td></tr><tr><td>LP Co-investing</td><td>How is the VC doing co-investing (typically SPVs, opportunity funds or direct checks/same round co-investing)?</td></tr></tbody></table></div>';
      break;
      
  }

  return [description, svg, long_description];

}

var idea_svg = '<svg width="200" height="200" viewBox="0 0 200 200" fill="none"><g id="Frame 1"><g id="Vector 6"><path d="M96.0031 140C117.029 140.707 122.89 147.335 123.503 169.5C114.173 170.269 109.338 169.296 102.003 163C94.7097 155.218 93.9159 150.072 96.0031 140Z" fill="#D9D9D9"/><path d="M133.003 169C135.188 140.359 143.453 130.632 171.003 130C170.397 158.052 162.495 166.968 133.003 169Z" fill="#D9D9D9"/></g><path id="Vector 2" d="M85 213.5C83.9737 208.525 84.4738 206.257 87 203C90.1468 199.192 93.0951 198.59 99.5 199C104.481 186.665 109.396 184.018 121 185C125.216 185.575 126.429 186.576 127.5 189C135.814 188.806 138.141 191.843 141 199C148.825 198.777 152.898 198.905 156 202.5C159.023 206.325 159.539 208.769 159 213.5M81 213.5H167.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector 3" d="M124 185.5C124.799 168.12 130.455 161.315 142 150" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector 4" d="M125.5 174L109 156.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><g id="Vector 5"><path d="M91.5 137.5C112.526 138.207 118.387 144.835 119 167C109.669 167.769 104.835 166.796 97.5 160.5C90.2066 152.718 89.4128 147.572 91.5 137.5Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M128.5 166.5C130.685 137.859 138.95 128.132 166.5 127.5C165.894 155.552 157.992 164.468 128.5 166.5Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>';
var early_svg ='<svg width="200" height="200" viewBox="0 0 200 200" fill="none"></svg>';
var growth_svg ='<svg width="200" height="200" viewBox="0 0 200 200" fill="none"></svg>';

var low_svg ='<svg width="200" height="200" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4232 86.1583H38.2614C38.4467 86.1583 38.6271 86.1778 38.8074 86.2144C38.9878 86.2485 39.1633 86.3021 39.3339 86.3728C39.5021 86.4435 39.663 86.5288 39.8166 86.6312C39.9701 86.7336 40.1115 86.8481 40.2407 86.9798C40.3699 87.109 40.4869 87.2503 40.5892 87.4015C40.6892 87.555 40.7769 87.7159 40.8476 87.8865C40.9159 88.0547 40.9695 88.2302 41.0061 88.4106C41.0426 88.5909 41.0597 88.7738 41.0597 88.9566V102.375H14.625V88.9566C14.625 88.7738 14.6421 88.5909 14.6786 88.4106C14.7152 88.2302 14.7688 88.0547 14.8371 87.8865C14.9077 87.7159 14.9955 87.555 15.0954 87.4015C15.1978 87.2503 15.3148 87.109 15.444 86.9798C15.5732 86.8481 15.7146 86.7336 15.8681 86.6312C16.0217 86.5288 16.1826 86.4435 16.3507 86.3728C16.5214 86.3021 16.6969 86.2485 16.8772 86.2144C17.0576 86.1778 17.238 86.1583 17.4232 86.1583Z" fill="#F4D297"/><path d="M48.0797 76.7812H68.9203C69.1031 76.7812 69.2859 76.7983 69.4663 76.8349C69.6467 76.8714 69.8222 76.9251 69.9904 76.9933C70.161 77.064 70.3219 77.1518 70.4754 77.2517C70.6266 77.3541 70.7679 77.4711 70.8971 77.6003C71.0287 77.7294 71.1433 77.8708 71.2457 78.0244C71.3481 78.1779 71.4334 78.3388 71.5041 78.507C71.5747 78.6776 71.6284 78.8531 71.6625 79.0335C71.6991 79.2139 71.7161 79.3942 71.7161 79.5771V102.375H45.2814V79.5771C45.2814 79.3942 45.3009 79.2139 45.3375 79.0335C45.3716 78.8531 45.4252 78.6776 45.4959 78.507C45.5666 78.3388 45.6519 78.1779 45.7543 78.0244C45.8567 77.8708 45.9712 77.7294 46.1029 77.6003C46.2321 77.4711 46.3734 77.3541 46.5246 77.2517C46.6781 77.1518 46.839 77.064 47.0096 76.9933C47.1778 76.9251 47.3533 76.8714 47.5337 76.8349C47.7141 76.7983 47.8969 76.7812 48.0797 76.7812Z" fill="#E1BD7D"/><path d="M78.7361 64.0746H99.5767C99.762 64.0746 99.9424 64.0941 100.123 64.1306C100.303 64.1648 100.479 64.2184 100.649 64.2891C100.817 64.3598 100.978 64.4451 101.132 64.5475C101.285 64.6498 101.427 64.7644 101.556 64.896C101.685 65.0252 101.802 65.1666 101.905 65.3177C102.004 65.4713 102.092 65.6321 102.163 65.8028C102.231 65.971 102.285 66.1465 102.321 66.3268C102.358 66.5072 102.375 66.69 102.375 66.8728V102.375H75.9403V66.8728C75.9403 66.69 75.9574 66.5072 75.9939 66.3268C76.0305 66.1465 76.0841 65.971 76.1524 65.8028C76.2231 65.6321 76.3108 65.4713 76.4107 65.3177C76.5131 65.1666 76.6301 65.0252 76.7593 64.896C76.8885 64.7644 77.0299 64.6498 77.1834 64.5475C77.337 64.4451 77.4979 64.3598 77.6661 64.2891C77.8367 64.2184 78.0122 64.1648 78.1926 64.1306C78.3729 64.0941 78.5533 64.0746 78.7361 64.0746Z" fill="#E1BD7D"/></svg>';
var moderate_svg ='<svg width="200" height="200" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M62 38.9217L39.762 61.1261C39.536 61.3537 39.2965 61.5697 39.0493 61.7742C38.8001 61.9767 38.5413 62.1696 38.2747 62.347C38.0062 62.5264 37.732 62.6903 37.448 62.8427C37.1641 62.9932 36.8724 63.1301 36.5769 63.2536C36.2794 63.377 35.9762 63.485 35.6691 63.5776C35.36 63.6721 35.049 63.7493 34.7323 63.8129C34.4174 63.8746 34.1006 63.9228 33.78 63.9537C33.4594 63.9846 33.1387 64 32.8162 64C32.4955 64 32.1729 63.9846 31.8542 63.9537C31.5336 63.9228 31.2149 63.8746 30.9001 63.8129C30.5852 63.7493 30.2723 63.6721 29.9652 63.5776C29.6561 63.485 29.3548 63.377 29.0574 63.2536C28.7599 63.1301 28.4702 62.9932 28.1862 62.8427C27.9023 62.6903 27.6261 62.5264 27.3595 62.347C27.091 62.1696 26.8341 61.9767 26.585 61.7742C26.3358 61.5697 26.0982 61.3537 25.8703 61.1261C25.6424 60.9004 25.428 60.6632 25.2251 60.4144C25.0204 60.1655 24.8292 59.909 24.6515 59.6409C24.4738 59.3747 24.3077 59.0989 24.157 58.8173C24.0063 58.5338 23.8692 58.2445 23.7456 57.9474C23.622 57.6504 23.5138 57.3495 23.4211 57.0428C23.3284 56.7342 23.2511 56.4237 23.1874 56.1093C23.1256 55.7949 23.0773 55.4766 23.0464 55.1584C23.0155 54.8382 23 54.518 23 54.1978C23 53.8777 23.0155 53.5575 23.0464 53.2373C23.0773 52.919 23.1256 52.6008 23.1874 52.2864C23.2511 51.972 23.3284 51.6615 23.4211 51.3529C23.5138 51.0462 23.622 50.7453 23.7456 50.4483C23.8692 50.1512 24.0063 49.8619 24.157 49.5784C24.3077 49.2968 24.4738 49.0209 24.6515 48.7548C24.8292 48.4867 25.0204 48.2301 25.2251 47.9813C25.428 47.7325 25.6424 47.4953 25.8703 47.2677L41.4 31.7755C41.6202 31.5557 41.85 31.3473 42.0915 31.1506C42.3329 30.9539 42.5821 30.7687 42.8409 30.597C43.0997 30.4254 43.3663 30.2653 43.6425 30.1187C43.9168 29.9721 44.1969 29.841 44.4847 29.7214C44.7725 29.6018 45.0661 29.4976 45.3635 29.4089C45.661 29.3183 45.9623 29.243 46.2675 29.1813C46.5727 29.1215 46.8798 29.0752 47.1908 29.0463C47.4998 29.0154 47.8108 29 48.1218 29C48.4328 29 48.7437 29.0154 49.0528 29.0463C49.3638 29.0752 49.6709 29.1215 49.9761 29.1813C50.2813 29.243 50.5826 29.3183 50.88 29.4089C51.1775 29.4976 51.4711 29.6018 51.7589 29.7214C52.0467 29.841 52.3268 29.9721 52.6011 30.1187C52.8773 30.2653 53.1438 30.4254 53.4027 30.597C53.6615 30.7687 53.9107 30.9539 54.1521 31.1506C54.3935 31.3473 54.6234 31.5557 54.8436 31.7755L62 38.9217Z" fill="#E1BD7D"/><path d="M69.4556 25L73.769 29.3996L64.2221 38.9798C64.0553 39.1472 63.8655 39.2761 63.6489 39.3665C63.4323 39.455 63.2061 39.5012 62.9703 39.5012C62.7364 39.5012 62.5102 39.455 62.2936 39.3665C62.0769 39.2761 61.8872 39.1472 61.7204 38.9798L53.0937 30.323C52.7448 29.9729 52.3671 29.6612 51.9569 29.3861C51.5486 29.111 51.1153 28.8783 50.661 28.6878C50.2047 28.4993 49.737 28.355 49.252 28.2588C48.7689 28.1626 48.2819 28.1145 47.7873 28.1145C47.2947 28.1145 46.8077 28.1626 46.3246 28.2588C45.8396 28.355 45.3719 28.4993 44.9156 28.6878C44.4613 28.8783 44.028 29.111 43.6197 29.3861C43.2095 29.6612 42.8318 29.9729 42.4829 30.323L34 38.8221L49.2692 54.0581L56.4581 61.2721C56.6747 61.4876 56.899 61.6934 57.1348 61.8858C57.3706 62.0801 57.616 62.2609 57.869 62.4302C58.1221 62.5995 58.3828 62.7573 58.6512 62.9015C58.9215 63.0439 59.1956 63.1747 59.4774 63.2921C59.7592 63.4075 60.0449 63.5114 60.3363 63.5999C60.6277 63.6884 60.9229 63.7615 61.2219 63.8211C61.521 63.8807 61.822 63.925 62.1249 63.9558C62.4278 63.9846 62.7307 64 63.0355 64C63.3403 64 63.6451 63.9846 63.948 63.9558C64.2509 63.925 64.5518 63.8807 64.8509 63.8211C65.148 63.7615 65.4433 63.6884 65.7347 63.5999C66.026 63.5114 66.3136 63.4075 66.5954 63.2921C66.8753 63.1747 67.1513 63.0439 67.4197 62.9015C67.6881 62.7573 67.9488 62.5995 68.2038 62.4302C68.4568 62.2609 68.7003 62.0801 68.9361 61.8858C69.1719 61.6934 69.3981 61.4876 69.6128 61.2721L76.8017 54.0581L87.6867 43.2217L92 47.6232V25H69.4556Z" fill="#E1BD7D"/><path d="M17.4232 86.1583H38.2614C38.4467 86.1583 38.6271 86.1778 38.8074 86.2144C38.9878 86.2485 39.1633 86.3021 39.3339 86.3728C39.5021 86.4435 39.663 86.5288 39.8166 86.6312C39.9701 86.7336 40.1115 86.8481 40.2407 86.9798C40.3699 87.109 40.4869 87.2503 40.5892 87.4015C40.6892 87.555 40.7769 87.7159 40.8476 87.8865C40.9159 88.0547 40.9695 88.2302 41.0061 88.4106C41.0426 88.5909 41.0597 88.7738 41.0597 88.9566V102.375H14.625V88.9566C14.625 88.7738 14.6421 88.5909 14.6786 88.4106C14.7152 88.2302 14.7688 88.0547 14.8371 87.8865C14.9077 87.7159 14.9955 87.555 15.0954 87.4015C15.1978 87.2503 15.3148 87.109 15.444 86.9798C15.5732 86.8481 15.7146 86.7336 15.8681 86.6312C16.0217 86.5288 16.1826 86.4435 16.3507 86.3728C16.5214 86.3021 16.6969 86.2485 16.8772 86.2144C17.0576 86.1778 17.238 86.1583 17.4232 86.1583Z" fill="#F4D297"/><path d="M48.0797 76.7812H68.9203C69.1031 76.7812 69.2859 76.7983 69.4663 76.8349C69.6467 76.8714 69.8222 76.9251 69.9904 76.9933C70.161 77.064 70.3219 77.1518 70.4754 77.2517C70.6266 77.3541 70.7679 77.4711 70.8971 77.6003C71.0287 77.7294 71.1433 77.8708 71.2457 78.0244C71.3481 78.1779 71.4334 78.3388 71.5041 78.507C71.5747 78.6776 71.6284 78.8531 71.6625 79.0335C71.6991 79.2139 71.7161 79.3942 71.7161 79.5771V102.375H45.2814V79.5771C45.2814 79.3942 45.3009 79.2139 45.3375 79.0335C45.3716 78.8531 45.4252 78.6776 45.4959 78.507C45.5666 78.3388 45.6519 78.1779 45.7543 78.0244C45.8567 77.8708 45.9712 77.7294 46.1029 77.6003C46.2321 77.4711 46.3734 77.3541 46.5246 77.2517C46.6781 77.1518 46.839 77.064 47.0096 76.9933C47.1778 76.9251 47.3533 76.8714 47.5337 76.8349C47.7141 76.7983 47.8969 76.7812 48.0797 76.7812Z" fill="#E1BD7D"/><path d="M78.7361 64.0746H99.5767C99.762 64.0746 99.9424 64.0941 100.123 64.1306C100.303 64.1648 100.479 64.2184 100.649 64.2891C100.817 64.3598 100.978 64.4451 101.132 64.5475C101.285 64.6498 101.427 64.7644 101.556 64.896C101.685 65.0252 101.802 65.1666 101.905 65.3177C102.004 65.4713 102.092 65.6321 102.163 65.8028C102.231 65.971 102.285 66.1465 102.321 66.3268C102.358 66.5072 102.375 66.69 102.375 66.8728V102.375H75.9403V66.8728C75.9403 66.69 75.9574 66.5072 75.9939 66.3268C76.0305 66.1465 76.0841 65.971 76.1524 65.8028C76.2231 65.6321 76.3108 65.4713 76.4107 65.3177C76.5131 65.1666 76.6301 65.0252 76.7593 64.896C76.8885 64.7644 77.0299 64.6498 77.1834 64.5475C77.337 64.4451 77.4979 64.3598 77.6661 64.2891C77.8367 64.2184 78.0122 64.1648 78.1926 64.1306C78.3729 64.0941 78.5533 64.0746 78.7361 64.0746Z" fill="#E1BD7D"/></svg>';
var high_svg ='<svg width="200" height="200" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.8381 32.1384L35.7752 60.1989C35.49 60.4866 35.1877 60.7596 34.8757 61.0179C34.5613 61.2739 34.2347 61.5176 33.8983 61.7419C33.5595 61.9686 33.2134 62.1758 32.8551 62.3683C32.4967 62.5584 32.1287 62.7315 31.7557 62.8875C31.3804 63.0435 30.9977 63.18 30.6101 63.297C30.2201 63.4164 29.8277 63.5139 29.4279 63.5944C29.0306 63.6724 28.6309 63.7333 28.2262 63.7723C27.8216 63.8113 27.417 63.8308 27.0099 63.8308C26.6053 63.8308 26.1982 63.8113 25.7961 63.7723C25.3914 63.7333 24.9892 63.6724 24.5919 63.5944C24.1946 63.5139 23.7997 63.4164 23.4122 63.297C23.0222 63.18 22.6419 63.0435 22.2666 62.8875C21.8912 62.7315 21.5256 62.5584 21.1672 62.3683C20.8089 62.1758 20.4604 61.9686 20.124 61.7419C19.7852 61.5176 19.461 61.2739 19.1466 61.0179C18.8321 60.7596 18.5323 60.4866 18.2447 60.1989C17.9571 59.9138 17.6865 59.6139 17.4306 59.2995C17.1722 58.9851 16.9309 58.6609 16.7066 58.3221C16.4824 57.9857 16.2727 57.6371 16.0826 57.2813C15.8925 56.9229 15.7194 56.5573 15.5634 56.1819C15.4074 55.8066 15.2709 55.4263 15.1539 55.0388C15.0369 54.6488 14.9394 54.2563 14.859 53.859C14.781 53.4617 14.7201 53.0595 14.6811 52.6573C14.6421 52.2527 14.6226 51.8481 14.6226 51.4434C14.6226 51.0388 14.6421 50.6342 14.6811 50.2296C14.7201 49.8274 14.781 49.4252 14.859 49.0279C14.9394 48.6306 15.0369 48.2381 15.1539 47.8481C15.2709 47.4606 15.4074 47.0803 15.5634 46.7049C15.7194 46.3296 15.8925 45.9639 16.0826 45.6056C16.2727 45.2498 16.4824 44.9012 16.7066 44.5648C16.9309 44.226 17.1722 43.9018 17.4306 43.5874C17.6865 43.2729 17.9571 42.9731 18.2447 42.6855L37.8422 23.1075C38.1201 22.8296 38.4101 22.5664 38.7148 22.3178C39.0195 22.0691 39.3339 21.8351 39.6606 21.6182C39.9872 21.4013 40.3236 21.1989 40.6721 21.0137C41.0182 20.8284 41.3717 20.6627 41.7349 20.5116C42.0981 20.3604 42.4686 20.2288 42.8439 20.1167C43.2193 20.0021 43.5996 19.9071 43.9847 19.8291C44.3698 19.7535 44.7574 19.695 45.1498 19.6584C45.5398 19.6194 45.9322 19.5999 46.3247 19.5999C46.7171 19.5999 47.1096 19.6194 47.4996 19.6584C47.892 19.695 48.2796 19.7535 48.6647 19.8291C49.0498 19.9071 49.4301 20.0021 49.8054 20.1167C50.1808 20.2288 50.5513 20.3604 50.9145 20.5116C51.2777 20.6627 51.6311 20.8284 51.9772 21.0137C52.3258 21.1989 52.6622 21.4013 52.9888 21.6182C53.3154 21.8351 53.6299 22.0691 53.9346 22.3178C54.2392 22.5664 54.5293 22.8296 54.8072 23.1075L63.8381 32.1384Z" fill="#E1BD7D"/><path d="M85 14.625L79.1944 20.1996L67.0556 32.3383C66.8436 32.5504 66.6023 32.7137 66.3268 32.8283C66.0514 32.9404 65.7638 32.9989 65.4639 32.9989C65.1666 32.9989 64.8789 32.9404 64.6035 32.8283C64.3281 32.7137 64.0868 32.5504 63.8747 32.3383L52.9059 21.3696C52.4623 20.9259 51.9821 20.5311 51.4605 20.1825C50.9413 19.8339 50.3904 19.539 49.8128 19.2977C49.2326 19.0588 48.6379 18.876 48.0212 18.7541C47.4069 18.6322 46.7878 18.5713 46.1589 18.5713C45.5325 18.5713 44.9134 18.6322 44.2991 18.7541C43.6824 18.876 43.0877 19.0588 42.5076 19.2977C41.9299 19.539 41.379 19.8339 40.8598 20.1825C40.3382 20.5311 39.858 20.9259 39.4144 21.3696L28.6284 32.1384L48.0431 51.4434L57.1838 60.5841C57.4592 60.8571 57.7444 61.1179 58.0442 61.3616C58.344 61.6078 58.656 61.8369 58.9778 62.0514C59.2995 62.2659 59.631 62.4658 59.9723 62.6486C60.3159 62.829 60.6645 62.9948 61.0228 63.1434C61.3811 63.2897 61.7443 63.4213 62.1148 63.5334C62.4853 63.6456 62.8607 63.7382 63.2409 63.8138C63.6212 63.8893 64.0039 63.9454 64.389 63.9844C64.7741 64.0209 65.1593 64.0404 65.5468 64.0404C65.9344 64.0404 66.3219 64.0209 66.7071 63.9844C67.0922 63.9454 67.4749 63.8893 67.8551 63.8138C68.2329 63.7382 68.6083 63.6456 68.9788 63.5334C69.3493 63.4213 69.7149 63.2897 70.0733 63.1434C70.4291 62.9948 70.7801 62.829 71.1214 62.6486C71.4626 62.4658 71.7941 62.2659 72.1183 62.0514C72.4401 61.8369 72.7496 61.6078 73.0494 61.3616C73.3493 61.1179 73.6369 60.8571 73.9099 60.5841L83.0505 51.4434L83.5 50.9975L96.8906 37.713L101.5 32.3383L102.375 14.625L85 14.625Z" fill="#E1BD7D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M92.1388 7.57456L86.6544 2H115.319V30.665L109.835 25.088L96.4444 38.3725L80 19.7133L92.1388 7.57456Z" fill="#E1BD7D"/><path d="M17.4232 86.1583H38.2614C38.4467 86.1583 38.6271 86.1778 38.8074 86.2144C38.9878 86.2485 39.1633 86.3021 39.3339 86.3728C39.5021 86.4435 39.663 86.5288 39.8166 86.6312C39.9701 86.7336 40.1115 86.8481 40.2407 86.9798C40.3699 87.109 40.4869 87.2503 40.5892 87.4015C40.6892 87.555 40.7769 87.7159 40.8476 87.8865C40.9159 88.0547 40.9695 88.2302 41.0061 88.4106C41.0426 88.5909 41.0597 88.7738 41.0597 88.9566V102.375H14.625V88.9566C14.625 88.7738 14.6421 88.5909 14.6786 88.4106C14.7152 88.2302 14.7688 88.0547 14.8371 87.8865C14.9077 87.7159 14.9955 87.555 15.0954 87.4015C15.1978 87.2503 15.3148 87.109 15.444 86.9798C15.5732 86.8481 15.7146 86.7336 15.8681 86.6312C16.0217 86.5288 16.1826 86.4435 16.3507 86.3728C16.5214 86.3021 16.6969 86.2485 16.8772 86.2144C17.0576 86.1778 17.238 86.1583 17.4232 86.1583Z" fill="#F4D297"/><path d="M48.0797 76.7812H68.9203C69.1031 76.7812 69.2859 76.7983 69.4663 76.8349C69.6467 76.8714 69.8222 76.9251 69.9904 76.9933C70.161 77.064 70.3219 77.1518 70.4754 77.2517C70.6266 77.3541 70.7679 77.4711 70.8971 77.6003C71.0287 77.7294 71.1433 77.8708 71.2457 78.0244C71.3481 78.1779 71.4334 78.3388 71.5041 78.507C71.5747 78.6776 71.6284 78.8531 71.6625 79.0335C71.6991 79.2139 71.7161 79.3942 71.7161 79.5771V102.375H45.2814V79.5771C45.2814 79.3942 45.3009 79.2139 45.3375 79.0335C45.3716 78.8531 45.4252 78.6776 45.4959 78.507C45.5666 78.3388 45.6519 78.1779 45.7543 78.0244C45.8567 77.8708 45.9712 77.7294 46.1029 77.6003C46.2321 77.4711 46.3734 77.3541 46.5246 77.2517C46.6781 77.1518 46.839 77.064 47.0096 76.9933C47.1778 76.9251 47.3533 76.8714 47.5337 76.8349C47.7141 76.7983 47.8969 76.7812 48.0797 76.7812Z" fill="#E1BD7D"/><path d="M78.7361 64.0746H99.5767C99.762 64.0746 99.9424 64.0941 100.123 64.1306C100.303 64.1648 100.479 64.2184 100.649 64.2891C100.817 64.3598 100.978 64.4451 101.132 64.5475C101.285 64.6498 101.427 64.7644 101.556 64.896C101.685 65.0252 101.802 65.1666 101.905 65.3177C102.004 65.4713 102.092 65.6321 102.163 65.8028C102.231 65.971 102.285 66.1465 102.321 66.3268C102.358 66.5072 102.375 66.69 102.375 66.8728V102.375H75.9403V66.8728C75.9403 66.69 75.9574 66.5072 75.9939 66.3268C76.0305 66.1465 76.0841 65.971 76.1524 65.8028C76.2231 65.6321 76.3108 65.4713 76.4107 65.3177C76.5131 65.1666 76.6301 65.0252 76.7593 64.896C76.8885 64.7644 77.0299 64.6498 77.1834 64.5475C77.337 64.4451 77.4979 64.3598 77.6661 64.2891C77.8367 64.2184 78.0122 64.1648 78.1926 64.1306C78.3729 64.0941 78.5533 64.0746 78.7361 64.0746Z" fill="#E1BD7D"/></svg>';

var sector_svg ='<svg width="130" height="130" viewBox="0 0 130 130" fill="none"></svg>';

var one_svg = '<svg width="22" height="39" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.45252V19.8113H1.4225V1.55879H18.61L20.0325 0.142548H0V21.2275H21.1781V6.03629L19.755 7.45252Z" fill="white"/><path d="M7.2041 14.9258H9.72656V7.19141L6.97559 8.95801L5.92969 7.04199L10.21 4.30859H12.5127V14.9258H14.9473V17H7.2041V14.9258Z" fill="white"/></svg>';
var two_svg = '<svg width="22" height="39" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M5.75391 14.6602C7.30078 13.4121 8.47266 12.4336 9.26953 11.7246C10.0664 11.0157 10.6904 10.3506 11.1416 9.72952C11.5928 9.10257 11.8184 8.50784 11.8184 7.94534C11.8184 7.39456 11.625 6.95804 11.2383 6.63577C10.8574 6.30765 10.3477 6.14359 9.70898 6.14359C9.42188 6.14359 9.15527 6.16995 8.90918 6.22269C8.66309 6.26956 8.46387 6.31937 8.31152 6.3721C8.16504 6.42484 8.07422 6.45706 8.03906 6.46878L7.86328 7.99808H5.96484L5.87695 4.67581C5.98242 4.64066 6.23438 4.56448 6.63281 4.4473C7.03125 4.33011 7.52051 4.21878 8.10059 4.11331C8.68652 4.00784 9.2666 3.95511 9.84082 3.95511C11.3994 3.95511 12.6064 4.22757 13.4619 4.77249C14.3232 5.31741 14.7539 6.22562 14.7539 7.4971C14.7539 8.29984 14.5576 9.07034 14.165 9.80862C13.7783 10.5469 13.2334 11.2793 12.5303 12.0059C11.8271 12.7325 10.8691 13.6172 9.65625 14.6602H15.0615V16.8575H5.75391V14.6602Z" fill="white"/></svg>';
var three_svg = '<svg width="22" height="39" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M14.4814 7.18948C14.4814 7.95706 14.2881 8.61038 13.9014 9.14944C13.5205 9.68265 12.9639 10.043 12.2314 10.2305C12.9873 10.4004 13.5967 10.7461 14.0596 11.2676C14.5225 11.7891 14.7539 12.3926 14.7539 13.0782C14.7539 14.0039 14.5107 14.7657 14.0244 15.3633C13.5381 15.961 12.9023 16.3975 12.1172 16.6729C11.3379 16.9424 10.4941 17.0772 9.58594 17.0772C8.90039 17.0772 8.26172 17.0039 7.66992 16.8575C7.08398 16.711 6.59473 16.5557 6.20215 16.3916C5.81543 16.2217 5.62207 16.125 5.62207 16.1016L6.37793 14.1241C6.45996 14.1592 6.65918 14.2383 6.97559 14.3614C7.29785 14.4785 7.69629 14.5957 8.1709 14.7129C8.64551 14.8242 9.11719 14.8799 9.58594 14.8799C10.3184 14.8799 10.8809 14.7246 11.2734 14.4141C11.6719 14.0977 11.8711 13.6407 11.8711 13.043C11.8711 12.4922 11.6484 12.0616 11.2031 11.751C10.7578 11.4346 10.1279 11.2764 9.31348 11.2764H7.90723V9.38675H9.40137C10.1455 9.38675 10.7227 9.24026 11.1328 8.9473C11.543 8.65433 11.748 8.2178 11.748 7.63773C11.748 7.18069 11.5723 6.81741 11.2207 6.54788C10.875 6.27835 10.3887 6.14359 9.76172 6.14359C9.49805 6.14359 9.23438 6.16702 8.9707 6.2139C8.70703 6.25491 8.49023 6.29593 8.32031 6.33694C8.15625 6.37796 8.05078 6.40433 8.00391 6.41605L7.81934 7.85745H5.92969L5.8418 4.71097C5.95898 4.67581 6.22559 4.59671 6.6416 4.47366C7.05762 4.35062 7.56445 4.23343 8.16211 4.1221C8.75977 4.01077 9.32227 3.95511 9.84961 3.95511C12.9316 3.95511 14.4756 5.03323 14.4814 7.18948Z" fill="white"/></svg>';
var four_svg = '<svg width="22" height="39" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M13.7695 16.8575H10.9922V14.2998H5.39355L5.12988 12.1817L6.74707 9.79984C8.16504 7.70218 9.50391 5.73343 10.7637 3.89359L13.7695 4.16605V12.085H15.5713V14.2998H13.7695V16.8575ZM7.82812 12.085H11.0273V7.3389L7.82812 12.085Z" fill="white"/></svg>';
var five_svg = '<svg width="22" height="39" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.755 7.30997V19.6687H1.4225V1.41625H18.61L20.0325 0H0V21.085H21.1781V5.89374L19.755 7.30997Z" fill="white"/><path d="M6.54492 14.1241C6.62695 14.1592 6.82617 14.2383 7.14258 14.3614C7.46484 14.4785 7.86035 14.5957 8.3291 14.7129C8.79785 14.8242 9.26367 14.8799 9.72656 14.8799C10.3242 14.8799 10.8164 14.7217 11.2031 14.4053C11.5898 14.083 11.7832 13.6407 11.7832 13.0782C11.7832 12.4043 11.502 11.9151 10.9395 11.6104C10.3828 11.3057 9.54785 11.1534 8.43457 11.1534H6.49219L6.7998 4.16605H14.1738L14.1211 6.38089H9.34863L9.22559 9.07913C10.9658 9.07913 12.3252 9.40726 13.3037 10.0635C14.2822 10.7139 14.7715 11.628 14.7715 12.8057C14.7715 13.6963 14.5518 14.4639 14.1123 15.1084C13.6729 15.7471 13.0928 16.2364 12.3721 16.5762C11.6572 16.9102 10.8721 17.0772 10.0166 17.0772C9.2959 17.0772 8.61914 17.0039 7.98633 16.8575C7.35938 16.711 6.83203 16.5557 6.4043 16.3916C5.98242 16.2217 5.77148 16.125 5.77148 16.1016L6.54492 14.1241Z" fill="white"/></svg>'