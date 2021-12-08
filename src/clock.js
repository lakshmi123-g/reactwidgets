import React from "react";

const Clock = () => {
    const [time, setTime] = React.useState(new Date());
    React.useEffect(() => {
        let interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <h1 >{time.toLocaleTimeString()}</h1>
        </div>
    );
};
export default Clock;
