import React from 'react';

import jsimage from './images/jsimage.png';
import react from './images/react.png';
import redux from './images/redux.png';

export const Containerone = () => {
    return(
        <div className="container_one" id="myname">
						<img alt='' src={"https://img.icons8.com/officel/80/000000/physics.png"} />
						<ul className="container_one-text"><p className="top_text">I received three certificates from freeCodeCamp.org</p>
      				<li><p>Responsive Web Design Certification (300 hours)</p></li>
      				<li><p>JavaScript Algorithms and Data <br />Structures Certification (300 hours)</p></li>
      				<li><p>Front End Libraries Certification (300 hours)</p></li>
      			</ul>
      			<ul className="container_one-text second_content"><p className="top_text">In my projects, I prefer to use:</p>
      				<li>
      					<img alt='' src={"http://getdrawings.com/free-icon/sass-icon-53.png"} width="50" />
      					<p>SCSS</p>
      				</li>
      				<li>
      					<img alt='jsimage' src={jsimage} width="50" />
      					<p>JS</p>
      				</li>  
      				<li>
                <img alt='' src={react} width="50" />
                <p>React</p>
              </li>
      				<li>
                <img alt='' src={redux} width="50" />
                <p>Redux</p>
              </li>
      			</ul>
      	</div> 
    );
}