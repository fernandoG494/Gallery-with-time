import { useState } from "react";
import { HomePage } from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-3" style={{ minWidth: "50em" }}>
      <h1>Gallery</h1>
      <hr />

      <HomePage />
    </div>
  );
}

export default App;
