import React from "react";

const ChangeColor = () => {
    const [color, setColor] = React.useState("black");
    const [text, setText] = React.useState("");
    return (
        <div>
            <input
                type="text"
                placeholder="color"
                value={text}
                onChange={event=>setText(event.target.value)}
                />
            <button onClick={()=>setColor(text)}>Change</button>
            <h1 style={{ color }}>{color}</h1>
        </div>
    );
};
export default ChangeColor;
