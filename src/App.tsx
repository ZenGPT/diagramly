import { useEffect, useRef } from "react";
import "./App.css";
import ZenUml from "@ZenUML/core";

function App() {
  const zenumlElm = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const zenUml = new ZenUml(zenumlElm.current);
    zenUml.render("A.method", "theme-blue");
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{ width: "50%", height: "100%", borderRight: "1px solid white" }}
      >
        Upload Image
      </div>
      <div
        ref={zenumlElm}
        id="zenuml-iframe"
        style={{ width: "50%", height: "100%", border: "none" }}
      ></div>
    </div>
  );
}

export default App;
