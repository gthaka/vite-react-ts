import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    storedTheme === null ? "corporate" : storedTheme
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div data-theme={theme} className="h-screen">
      <div className="navbar bottom-4 bg-primary mb-2 flex">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

        <div className="flex-grow justify-end px-1">
          🌛
          <input
            type="checkbox"
            className="toggle rounded-full mx-3"
            onChange={() => {
              setTheme(theme === "black" ? "corporate" : "black");
            }}
            checked={theme !== "black"}
          />
          🌞
        </div>
      </div>
      <div className="flex justify-center">
        <article className="prose">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <div className="">
            <h1>Vite + React</h1>
            <div className="card">
              <button
                className="btn btn-primary rounded-lg p-3"
                onClick={() => setCount((count) => count + 1)}
              >
                count is {count}
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
