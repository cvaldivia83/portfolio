import SectionTitle from "./SectionTitle"
import React from 'react';
import data from '../assets/jobs.json'

export default function WorkExperience() {
  const [ work, setWork ] = React.useState("le_wagon");

  return (
    <div className="work" id="work">
      <SectionTitle title="Where I've worked" order="section-02" />

      <div className="jobs">
        <div role="tablist" aria-label="Job tabs" className="jobs-tab" >

          <button id="tab-0" role="tab" aria-selected="true" className={`${"work-btn"} ${work === "le_wagon" && "border-dPurple"}`} onClick={() => setWork('le_wagon')}>
            Le Wagon
          </button>

          <button id="tab-1" role="tab" aria-selected="false" className={`${"work-btn"} ${work === "smartia" && "border-dPurple"}`} onClick={() => setWork("smartia")}>
            Smartia
          </button>

          <button id="tab-2" role="tab" aria-selected="false" className={`${"work-btn"} ${work === "y-box" && "border-dPurple"}`} onClick={() => setWork("y-box")}>
            The Y-Box
          </button>

          <button id="tab-3" role="tab" aria-selected="false" className={`${"work-btn"} ${work === "deux_trente" && "border-dPurple"}`} onClick={() => setWork("deux_trente")}>
            2-30 Media
          </button>

        </div>

        

          <div className="job-description">
          {
            data[work].map((job) => {
              return (
              <p key={job.id} className="job-paragraph">
                <span className="jobs-icon"><i className="fa-solid fa-caret-right"></i></span>
                {job.item}
              </p>
              )
            })
          }
       
          </div>

      </div>

    </div>
  )
}