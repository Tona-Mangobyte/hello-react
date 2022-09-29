import React, { useState } from "react";

const main = {
    width: '100px',
    height: '25px',
};

export function CounterActionComponent() {
    const [count, setCount] = useState(0);

    const handlerClick = () => {
        setCount((count) => count + 1);
    }

    return (
        <div>
            <button onClick={handlerClick} style={main}>{count}</button>
        </div>
    );
}
