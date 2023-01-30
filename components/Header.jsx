import React from 'react';
import module from './Header.module.scss'
import Search from '../assets/search.png'
function Header(props) {
    const API_KEY = '61bc73c8c41d2744b9c31e118c2b1f12'
    const URL = 'https://api.openweathermap.org/data/2.5/forecast/daily'
    
    let city = ''
    React.useEffect(() => {
        console.log(props)
    }, [props.weatherState])
        
    async function loadingData() {
        let responce = await fetch ('${URL}/?q=${city}&units=metric&cnt=78appd=${API_KEY}')
        let data = await responce.json()
        props.setWeatherState(data)
    }

    function setCity(event) {
        city = event.target.value
    }

    return (
        <header className={module.header}> 
        <form>
            <input onClick={setCity} type='text' placeholder='Enter the city...'/>
        </form>
        <button className={module.button} onClick={loadingData}><img className={module.search_icon} src={Search}/></button>
        </header>
    );
}

export default Header;