import { useState } from "react";

function ToDoList()
{
    const [task, setTask]=useState("");
    const [items, setItems] = useState([]);

    function handleItems()
    {
        setItems([...items, task]);
        setTask("")
    }
    return(<>
        <input 
        type="text"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        placeholder="Write task to add in to do list"
        ></input>
        <br />
        <button onClick={handleItems}>Add Items</button>
        <h3>{items.map((val,i)=>
        {
            return <li> number {i+1} Items {val} </li>
        })}</h3>
    </>)
}
export default ToDoList;