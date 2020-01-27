import React from 'react';


export const Header = () => {
    return(
        <div id="welcome-section" className="header">
        <nav id="navbar" className="menu">
              <a href="#myname" className="menu_item">
                  <span>About</span>
                  <img alt='menu_img' className="menu_img" src={`https://img.icons8.com/bubbles/100/000000/man-with-beard-in-jacket.png`} />
              </a>
              <a href="#projects" className="menu_item">
                  <span>Work</span>
                  <img alt='menu_img' className="menu_img" src={`https://img.icons8.com/officel/80/000000/system-information.png`} />
              </a>
              <a href="#adress" id="contact" className="menu_item">
                  <span>Contact</span>
                        <img alt='menu_img' className="menu_img" src={`https://img.icons8.com/officel/80/000000/mailbox-closed-flag-up.png`} />
              </a> 
        </nav>
        <h1  className="text_myname">
                <p>Hey i'am Dima.<br /> 
                      <small>a web developer</small>
            <img alt='' src={`images/work3.png`} className="hdr_pictures" width="150" />
              </p>

      </h1>

</div> 
    );
}
