import React from "react";

const ShowHide = () => {
    const [show, setShow] = React.useState(false);
    
    return (
        <div>
            {/* <button onClick={() =>setShow(!show)}>show</button> */}
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "show"}</button>
            <h1>{show && "hello!!"}</h1>

        </div>
    )
}
export default ShowHide