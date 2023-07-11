import React from 'react'

export const box1Title="Try Scrolling"
export const box2Title = "BayHacks Hackathon 2023"
export const box2Body = `Join our hackathon to collaborate with like-minded student and professionals, develop a project from scratch, and showcase your skills to industry experts.

With cutting-edge tools and technologies, mentorship, prizes, and just 48 hours to create the most innovative solution, it's an adrenaline-pumping experience that could kickstart your career or startup.

Don't miss out on this exciting opportunity!`
export const box3Title="Last Year's Hackathon"
export const box3Body = (
  <iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/fEXdLheZW6k" title="Hackathon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
)
export const box4Title="F.A.Q."
export const box4Body = `WHO:
Participants: Students, programmers, developers, and tech enthusiasts.

WHAT: 
A hackathon is a competition where teams collaborate to develop a software, hardware, or other technology-based solution over a weekend

WHY:
The purpose of a hackathon is to encourage creativity, innovation, and problem-solving skills. Hackathons provide participants with an opportunity to network, gain valuable technical experience, and potentially even launch their own startup.
`

export const box5Title = "Schedule"
export const box5Body = `The event date is currently TBA

Early - Mid October, 2023

The event will be over a full weekend, Friday, Saturday and Sunday`
export const btn1 = "RSVP"
export const btn2 = "Location"
export const btn3 = "Prizes"

export const modal1 = (
  <div style={{fontSize: '1em'}}>
    <p>You can RSVP by filling out the form below:</p>
    <p>placeholder, due to this being a sample site.</p>
  </div>
)
export const modal2 = (
  <>
    <p style={{fontSize: '1.4em'}}>The event will be held at TBD</p>
    {/* <iframe width="100%" height="470" style={{border: '0px'}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=17&center=27.9612,-82.4637&key=${process.env.REACT_ENV_KEY}"></iframe> */}
  </>
)
export const modal3 = (
  <>
    <h4>Prizes</h4>
    <ul>
      <li>1st place $500</li>
      <li>2nd place $300</li>
      <li>3rd place $200</li>
    </ul>
    <h4>Judge Criteria</h4>
    <p>This is a score based event. In order to achieve the highest score you will need to meet certain criteria. The list of criteria for which attendants will be judged on can be found below. The judges will be looking for whoever can fit the theme and additional criteria which will be revealed when the event starts</p>
    <ul>
      <li>
        <a href="#">Sponsor Link 1</a>
      </li>
      <li>
        <a href="#">Sponsor Link 2</a>
      </li>
    </ul>
  </>
)

export const credit = (
  <div style={{fontSize: '.6em', marginBottom: '16em'}}>
    <h1 className="text-muted mt-5">Credits</h1>
    <p className="text-muted">This project was constructed with models generously published for public use. This is a list of all the source material which has made this project possible.</p>
    <ul className="text-muted mb-5">
      <li><a href="https://sketchfab.com/3d-models/pirate-viva-34f6cb31cf264b79b8f023f769057fd0" style={{color: 'rgb(158, 150, 137)'}}>Ship Model and CC license</a>. Changes made: the model was simplified and has some minor additions</li>
      <li><a href="https://sketchfab.com/3d-models/low-poly-pirate-sword-89bb2ffcd83043a29c5886d920497086" style={{color: 'rgb(158, 150, 137)'}}>Sword Model and CC license</a></li>
      <li><a href="https://sketchfab.com/3d-models/cool-styled-pirate-map-603e993445b54ed8b1474268d77836ba" style={{color: 'rgb(158, 150, 137)'}}>Map Model and CC license</a></li>
      <li><a href="https://github.com/JMBeresford/lab/blob/main/LICENSE" style={{color: 'rgb(158, 150, 137)'}}>Water and sky shaders with MIT license</a></li>
    </ul>
  </div>
)