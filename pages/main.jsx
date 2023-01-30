import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Section from '../components/Section.jsx'
import Header from '../components/Header.jsx'
function main(props) {
    const[weatherState, setWeatherState] = react.useState([])
    return (
        <div>
            <h1>W E A T H E R</h1>
            <Header weatherState={weatherState} setWeatherState={setWeatherState}/>
            <Navbar weatherState={weatherState} setWeatherState={setWeatherState}/>
        </div>
    );
}

export default main;