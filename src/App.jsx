import { useState } from "react";
import Form from "./components/Form";

function App() {
  const isTrue = true;

  return (
    <div className="container">
      <Form isRegisterd={isTrue} />
    </div>
  );
}

export default App;
