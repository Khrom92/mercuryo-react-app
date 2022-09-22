import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      window.mercuryoWidget.run({
        widgetId: "5df1dbc8-637a-4c6b-a538-5f1b50fc0fed",
        host: ref.current,
      });
    }
  }, []);

  return (
    <div className="App">
      <div ref={ref}></div>
    </div>
  );
}

export default App;
