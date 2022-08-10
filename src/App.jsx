import { useState } from "react";
import "./App.scss";
import DragdScreen from "./components/DragdScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DragdScreen />
    </div>
  );
}

export default App;
