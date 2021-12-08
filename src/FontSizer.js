import React from "react";

const FontSizer = () => {
  const [size, setSize] = React.useState(9);

  return (
    <div>
      <button onClick={() => setSize(size + 5)}>Grow</button>
      <button onClick={() => setSize(size - 5)}>Shrink</button>
          <p style={{ fontSize: `${size}px` }}>{size}px</p>
    </div>
  );
};
export default FontSizer;
