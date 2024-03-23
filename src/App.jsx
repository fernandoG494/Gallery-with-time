import { useState } from "react";
import { HomePage } from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Gallery</h1>
      <hr />

      <HomePage />
    </>
  );
}

export default App;
