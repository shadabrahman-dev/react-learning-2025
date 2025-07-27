import { useState } from "react"


function BgColor()
{
    const [color, setColor]=useState("red");
    return(
        <>
            <h1 style={{color:color}}>hello useState </h1>
            <button onClick={()=>setColor("blue")}>click</button>
        </>
    )
}

export default BgColor;