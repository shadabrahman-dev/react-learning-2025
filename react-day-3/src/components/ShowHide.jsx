import { useState } from "react";

function ShowHide()
{   
    const [show, setShow]=useState(true);

    function handleHide()
    {
        setShow(false);
    }
    return(
        <>
            <h1>{show ? "button show " : " hide button"}</h1>
            <button onClick={handleHide}>Hide</button>
        </>
    )
}

export default ShowHide;