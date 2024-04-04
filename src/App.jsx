import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Error from "./Pages/Error";

function App() {
  return (
    // BrowserRouter connects to the browser
    <BrowserRouter>
      {/* Routes - parent for all the routes */}
      <Routes>
        {/* 
        Route - setup route for every page with two props
        path = url
        element - what we want to render 
        */}
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="About" element={<About />} />

        {/* Error Page path is asterisk */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
