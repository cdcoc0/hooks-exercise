import React, { useState } from "react";
import "./styles.css";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    //console.log(event.target);
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => !value.includes("@");
  //value.length <= 10;
  const name = useInput("Ms.", maxLen);
  return (
    <div className="App">
      <h1>Hey</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}
