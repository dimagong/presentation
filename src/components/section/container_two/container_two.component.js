import React from 'react';

import clockpomodoro from './images/clock-pomodoro.jpg';
import monsters from './images/monsters.png';
import calculator from './images/Calculator.jpg';
import markdown from './images/Markdown.jpg';
import drum from './images/Drum.jpg';
import mgid from './images/Mgid.jpg';
import form from './images/Form.jpg';

export const Containertwo = () => { 
    return(
        <div className="container_two" id="projects">
      			<h2>These are some of my projects.. </h2>
            <div className="block_projects">
                 <a href="https://codepen.io/dimagong/pen/zYxdmwj?editors=0110" id="" className="project" >
                    <img  className="project-pic" src={clockpomodoro} alt='project' />
                    <p className="project-title">Pomodoro Clock <br /> (SCSS, React, Redux)</p>
                 </a>
                 <a href="https://dimagong.github.io/monsters-rolodex/" id="" className="project" >
                    <img  className="project-pic" src={monsters} alt='project' />
                    <p className="project-title">Monsters <br /> (JS, React)</p>
                 </a>
                 <a href="https://codepen.io/dimagong/pen/BaaryYB" id="" className="project" >
                    <img  className="project-pic" src={calculator} alt='project' />
                    <p className="project-title">Calculator <br /> (JS, React)</p>
                 </a>
                 <a href="https://codepen.io/dimagong/pen/XWroLzG" id="" className="project" >
                    <img  className="project-pic" src={markdown} alt='project' />
                    <p className="project-title">Markdown Previewr <br /> (React)</p>
                 </a>
                 <a href="https://codepen.io/dimagong/pen/WNNRPOp" id="" className="project" >
                    <img  className="project-pic" src={drum} alt="project" />
                    <p className="project-title">Drum Machine <br /> (React)</p>
                 </a>
                 <a href="https://promo.mgid.com/newyearpromo" id="" className="project" >
                    <img  className="project-pic" src={mgid} alt="project" />
                    <p className="project-title">Landing page <br /> (development and <br />creation template)</p>
                 </a>
    				    <a href="https://codepen.io/dimagong/pen/aaREWX" id="profile-link" className="project" >
          					<img  className="project-pic" src={form} alt="project" />
          					<p className="project-title">Form<br />(HTML, CSS)</p>
      			     </a>
                       </div>
                       </div> 
    );
}