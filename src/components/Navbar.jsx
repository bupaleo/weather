import React from 'react';
import module from './Navbar.module.scss'
import DaySnow from '../assets/DaySnow.png'
import location from '../assets/location.png'
function Section(props) {
    return (
        <navbar className={module.lol}>
           <div className={module.info}> <h1> Tehran </h1> </div>
          <div className={module.info}>  <h4> Today - Wednesday, February 01  </h4>  </div> 
           <div className={module.info}> <img className={module.DaySnow} src={DaySnow}/>  </div>
           <div className={module.info}> <h1>-3.29°C </h1> </div>           
           <div className={module.info}><h4>Clouds, snow  </h4></div> 

        </navbar>
    );
}

export default Section;