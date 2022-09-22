import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      window.mercuryoWidget.run({
        widgetId: "d6195496-9652-421f-86e9-0e7cfab24719",
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
