import React from "react";

const Align = () => {
  const [alignment, setAlignment] = React.useState("right");
  return (
    <div>
      <h1 style={{ textAlign: alignment }}>Align me</h1>
      <button onClick={() => setAlignment("left")}>Left</button>
      <button onClick={() => setAlignment("center")}>center</button>
      <button onClick={() => setAlignment("right")}>Right</button>
    </div>
  );
};
export default Align;
