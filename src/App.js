import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      window.mercuryoWidget.run({
        widgetId: "a8c1dead-ed5f-4740-b9ce-c4ea7721c93b",
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
