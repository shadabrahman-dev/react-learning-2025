import { useState } from "react";

function InputFrom() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        placeholder="Apna naam likho"
        onChange={(e) => setName((e.target.value).toUpperCase())}></input>
    </>
  );
}
export default InputFrom;
