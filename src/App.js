import React from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState("");
  function handleSubmit() {
    alert("A Name was submitted : " + value);
  }
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" value={value} onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
}
