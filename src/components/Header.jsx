import React from 'react';
import module from './Header.module.scss'
import Search from '../assets/search.png'
function Header(props) {
    return (
        // <div className={module.sunshine}> <img src={sunshine}/> 
        // </div>

        <header className={module.header}> 
             <div className={module.search}> <button className={module.button}>Enter the city... <img className={module.search_icon} src={Search}/></button>
        </div>
        </header>
    );
}

export default Header;