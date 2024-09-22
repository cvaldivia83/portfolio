import SectionTitle from "./SectionTitle"
import React from 'react';
import data from '../assets/jobs.json'

export default function WorkExperience() {
  const [ work, setWork ] = React.useState("");

  console.log(data.deux_trente);
  
  function handleClick(event) {
    // 1 . Select All divs
    // 2. Check if they have the class active
    // 3. Remove active from the old div and add active on new one
  }

  return (
    <div className="work" id="work">
      <SectionTitle title="Where I've worked" order="section-02" />

      <div className="jobs">
        <div role="tablist" aria-label="Job tabs" className="jobs-tab" >
          <button id="tab-0" role="tab" aria-selected="true" className="work-btn border-dPurple" onClick={handleClick}>
            Le Wagon
          </button>

          <button id="tab-1" role="tab" aria-selected="false" className="work-btn" onClick={handleClick}>
            Smartia
          </button>

          <button id="tab-2" role="tab" aria-selected="false" className="work-btn" onClick={handleClick}>
            The Y-Box
          </button>

          <button id="tab-3" role="tab" aria-selected="false" className="work-btn" onClick={handleClick}>
            2-30 Media
          </button>

        </div>

        <div className="jobs-description">

          <div className="le_wagon hidden">
            <p><span><i className="fa-solid fa-caret-right"></i></span>Successfully delivered and led 20 web development batches and achieved 97% positive reviews from recently graduated students.</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span>Plan and deliver daily lectures covering various topics in web development, such as programming basics, regex, parsing, object-oriented programming, relational databases, SQL, HTML, CSS, Bootstrap, Javascript, Ruby on Rails, Ajax, etc.</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span> Conduct code reviews to assess student progress and provide constructive feedback.</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span>Project management for the final web development coding projects developed by students. As a lead teacher, my responsibility was to offer guidance and advice on data modeling, front-end development, minimum viable product prototyping, and agile methodology techniques to improve the workflow and performance of our student teams.</p>
          </div>

          <div className="smartia hidden">
            <p><span><i className="fa-solid fa-caret-right"></i></span>Affiliate prospection, recruiting, and onboarding: increase of 20% in my affiliate portfolio.</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span>Develop, implement, and track local marketing campaigns and KPIs to maximize ROI. Create and execute strategies to enhance affiliate marketing and boost revenue.</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span>Analyze affiliate performance metrics and track KPIs to evaluate the effectiveness and identify areas for improvement.</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span>Generate monthly reports to affiliates stating their monthly earnings through our affiliate program. Review lead generation provided by affiliates, excluding any potentially invalid data.</p>
            
          </div>

          <div className="y_box hidden">
            <p>Responsible for developing the activity on the Brazilian market and managing the website www.gostei.club. 
            My responsibilities involved:</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span>Plan and purchase ad space across media channels such as Google Ads and Facebook Ads. Analyze performance metrics, conversion rates, and return on investment (ROI) to assess the effectiveness of campaigns. Monitor and manage advertising budgets to optimize costs and continuously improve campaign performance and strategies.</p>

            <p><span><i className="fa-solid fa-caret-right"></i></span> Email marketing management: set up a strategy to effectively engage with my product's audience through informative newsletters and promotional emails showcasing special offers. </p>

            <p><span><i className="fa-solid fa-caret-right"></i></span>Web content monetization: set up and manage an advertising plan in partnership with local performance marketing platforms directed toward a Brazilian audience. </p>

            <p><span><i className="fa-solid fa-caret-right"></i></span> I was able to achieve significant results, such as a 30% increase in community member acquisition and a 15% increase in revenue growth, reaching as high as R$55.000 per month.</p>
          </div>

          <div className="2-30">
            <p><span><i className="fa-solid fa-caret-right"></i></span></p>
          </div>
        </div>

      </div>

    </div>
  )
}