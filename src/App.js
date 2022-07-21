import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
// import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;