// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "@picocss/pico";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
