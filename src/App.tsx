import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-center text-3xl font-bold underline">
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="border border-2 rounded-lg p-3"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
