import { useEffect } from "react";
import "./Chatbot.sass";

function Chatbot() {
  useEffect(() => {
    window.CollectId = "61aa8a45ba60cc741a634e1e";
    const head = document.head || document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.src = "https://collectcdn.com/launcher.js";
    head.appendChild(script);
  }, []);

  return null;
}

export default Chatbot;
