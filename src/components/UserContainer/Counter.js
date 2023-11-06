import {useState} from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
        setResult(0);
    };

    return (
        <>
            <div>counter</div>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
        </>
    );
}