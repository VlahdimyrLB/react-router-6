import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Error from "./Pages/Error";
import SharedLayout from "./Pages/SharedLayout";
import SingleProducts from "./Pages/SingleProducts";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Pages/ProtectedRoute";
import SharedProductsLayout from "./Pages/SharedProductsLayout";

function App() {
  const [user, setUser] = useState(null);
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
        <Route path="/" element={<SharedLayout />}>
          {/* This is the default page or index which is the / */}
          <Route index element={<Home />} />

          <Route path="About" element={<About />} />

          {/* <Route path="Products" element={<Products />} /> */}
          {/* Reading URL Params - React Router extracts the parameter values as strings*/}
          {/* <Route path="Products/:productId" element={<SingleProducts />} /> */}

          {/* Same as Quoted Above but a Nested Routes */}
          <Route path="Products" element={<SharedProductsLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProducts />} />
          </Route>

          <Route path="Login" element={<Login setUser={setUser} />} />

          {/* Protected Route - here we can use context API rather passing props repeatedly */}
          <Route
            path="Dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          {/* Error Page path is asterisk */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
