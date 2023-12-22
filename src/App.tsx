import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const iframe = document.getElementById("zenuml-iframe");
    const message = {
      action: "eval",
      args: {
        code: "ZenUML.Hello",
        style: "#diagram { background-color: red; width: 100%; height: 100% }",
        theme: "blue",
        css: "",
      },
    };
    setTimeout(() => {
      if (iframe) iframe.contentWindow.postMessage(message, "*");
    }, 1000);
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
      <div style={{ width: "50%", height: "100%" }}>Upload Image</div>
      <iframe
        src="https://embed.zenuml.com/embed.html"
        id="zenuml-iframe"
        style={{ width: "50%", height: "100%", border: "none" }}
      ></iframe>
    </div>
  );
}

export default App;
