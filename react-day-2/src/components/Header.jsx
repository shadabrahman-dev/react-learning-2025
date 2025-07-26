import { useState, useEffect } from "react";
import "./Header.css";

function Header(props) {
  const [count, setCount] = useState(0);

  useEffect(()=>
{   
    alert("useEffect called")
},[])

  function updateClick() {
    setCount(count + 1);
  }
  function minClick()
  {
    setCount(count-1);
  }
  return (
    <>
      <h1>Counter App dev by {props.name} </h1>
      <h2>counter Value :- {count} </h2>
      <button onClick={updateClick}>Pluse +</button>
      <button onClick={minClick}>Min - </button>
    </>
  );
}

export default Header;
