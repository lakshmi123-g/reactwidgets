import React from "react";

const Color = () => {
    const [red, setRed] = React.useState(0);
    const [green, setGreen] = React.useState(0);
    const [blue, setBlue] = React.useState(0);
    return (
        <div>

            <div style={{ height: 50, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
            <input type="range"
                min="0"
                max="255"
                value={red}
                onChange={e => setRed(e.target.value)} />
            <input type="range"
                min="0"
                max="255"
                value={green}
                onChange={e => setGreen(e.target.value)} />
            <input type="range"
                min="0"
                max="255"
                value={blue}
                onChange={e => setBlue(e.target.value)} />



        </div>
    );
};
export default Color;
