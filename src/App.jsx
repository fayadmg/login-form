import { useState } from "react";
import Form from "./components/Form";

function App() {
  const isTrue = false;
  // const [text, setText] = useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // });

  // function handleChange(newText) {
  //   const { name, value } = event.target;
  //   setInputText((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [name]: value,
  //     };
  //   });
  // }

  return (
    <div className="container">
      <Form isRegisterd={isTrue} />
    </div>
  );
}

export default App;
