import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./app/login";

function App() {
  return (
    <div >
        <BrowserRouter basename="">
          <header >
            roadtrips
          </header>
            <Routes>
                <Route path="/" element ={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
