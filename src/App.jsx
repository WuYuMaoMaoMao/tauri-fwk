import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Login from './views/login';
import router from "./router/index";
import { RouterProvider } from "react-router-dom"
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");


  return (
    <main className="container">

      <RouterProvider router={router} />
    </main>
  );
}

export default App;
