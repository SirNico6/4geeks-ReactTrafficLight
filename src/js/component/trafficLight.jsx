import React, { useState } from "react";
import '../../styles/index.css';

const TrafficLight = () => {
    const [lights, setLights] = useState(["red", "yellow", "green"]);
    const [activeLight, setActiveLight] = useState(null);

    const addLight = () => {
        setLights([...lights, "purple"]);
    };

    const toggleLight = (index) => {
        let nextIndex = (index + 1) % lights.length;
        while (nextIndex === index) {
            nextIndex = (nextIndex + 1) % lights.length;
        }
        setActiveLight(nextIndex);
    };

    const restartLights = () => {
        setLights(["red", "yellow", "green"])
    }

    const handleLightClick = (index) => {
        setActiveLight(index);
    };

    return (
        <div>
            <div className="pole"></div>
            <div className="traffic-light">
                {lights.map((color, index) => (
                    <div
                        key={index}
                        className={`light ${activeLight === index ? 'active' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleLightClick(index)}
                    />
                ))}
            </div>
            <button className="btn btn-primary mt-3" onClick={addLight}>Add purple light</button>
            <button className="btn btn-warning mt-3 ms-2" onClick={() => toggleLight(activeLight !== null ? activeLight : 0)}>Toggle light</button>
            <button className="btn btn-secondary mt-3 ms-2" onClick={restartLights}>Restart</button>
        </div>
    );
};

export default TrafficLight;
