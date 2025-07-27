import { useState } from "react";

function Counter()
{
    const [count, setCount]=useState(0);
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )
}

export default Counter;