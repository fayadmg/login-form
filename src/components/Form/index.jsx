import { useState } from "react";
import "./index.css";

function Form(props) {
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <h1>Welcome {inputText.name}</h1>
      <p>{inputText.email}</p>
      {!props.isRegisterd && <p>{inputText.password}</p>}
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          onChange={handleChange}
          value={inputText.name}
        />
        <input
          type="text"
          name="email"
          placeholder="enter your email"
          onChange={handleChange}
          value={inputText.email}
        />
        {!props.isRegisterd ? (
          <input
            type="text"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
            value={inputText.password}
          />
        ) : null}
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          login
        </button>
      </form>
    </div>
  );
}

export default Form;
