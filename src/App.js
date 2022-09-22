import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      window.mercuryoWidget.run({
        widgetId: "c3732a62-a0d6-4602-ac4c-0d7bccd80e22",
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
