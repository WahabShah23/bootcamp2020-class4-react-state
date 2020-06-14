import React, { useState } from 'react';
import './Room.css';

// import light_bulb_off from './images/light_bulb_off.png';
import light_bulb_white from './images/light_bulb_white.png';
import light_bulb_yellow from './images/light_bulb_yellow.png';

function Room() {

    //const state = useState(true);
    //console.log("State = ",state);
    let [isLit, setLit] = useState(false);
    // let [age , setAge] = useState(24);

    let [isOn, toggleSwitch] = useState(false);
    let [temp, setTemp] = useState(22);

    // const imgUrl = "../public/images/";
    // const bulb_off = "light_bulb_off.png";
    // const bulb_white = "light_bulb_white.png";
    // const bulb_yellow = "light_bulb_yellow.png";

    //let hello = 'Hello '+ isLit +'World';
    //let hello = `Hello ${isLit} World`;

    // const decreaseAge = () => { setAge(--age); }

    const decreaseTemp = () => { setTemp(--temp); };

    return (
    <div className={`room alignment ${isLit? "lit": "dark"}`}>
        {/* <h2> React State At Your Service </h2> */}
        <h2>For the { isLit ? 'Code' : 'Night'} Is {isLit ? "Lit but": "Dark and"} Full Of { isLit ? 'Errors! xD' : 'Terrors! :('} </h2>
        <br/>
    <button className="d-inline" onClick={()=> setLit(!isLit) } >Switch to { !isLit ? 'Day' : 'Night'} Mode</button>
        <br/>

        <div>
            <img src={ isOn ? light_bulb_yellow : light_bulb_white} width="150" alt="" />
            <br/>
            <button className="d-inline" onClick={()=> toggleSwitch(!isOn) } >Toggle Light</button>
        </div>

        <br/>
        {/* <p> Age: Well, {age} is just a number! </p>
        <br/>
        <div>
            <button className="d-inline" onClick={ ()=> {
                            console.log("Increase age arrow function");
                            setAge(++age);
                            }}>
                Increase Age
            </button>
            <button className="d-inline" onClick={ decreaseAge }>
                Decrease Age
            </button>
        </div> */}

    <h3> Room Temperature: Current Temp is {temp} &#730;C! </h3>
        <br/>
        <div>
            <button className="d-inline" onClick={ ()=> {
                            console.log("Increase Temp");
                            setTemp(++temp);
                            }}>
                Increase Temp
            </button>
            <button className="d-inline" onClick={ decreaseTemp }>
                Decrease Temp
            </button>
        </div>

    </div>
    );
}

export default Room;
