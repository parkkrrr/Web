import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState(0);
    const [unit, setUnit] = useState('C');
    const [convertedTemperature, setConvertedTemperature] = useState(0);

    const handleTemperatureChange = (e) => {
        setTemperature(e.target.value);
    }

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    }

    const convertTemperature = () => {
        if (unit === 'C') {
            setConvertedTemperature(temperature * 9 / 5 + 32);
        } else {
            setConvertedTemperature((temperature - 32) * 5 / 9);
        }
    }

    return (
        <div>
            <h1>Temperature Converter</h1>
            <input type="number" placeholder="Enter temperature" onChange={handleTemperatureChange} />
            <select onChange={handleUnitChange}>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
            </select>
            <button onClick={convertTemperature}>Convert</button>
            <p>Converted temperature: {convertedTemperature}</p>
        </div>
    );
}

export default TemperatureConverter;
