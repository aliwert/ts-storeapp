import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritePage from "./pages/FavoritePage";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Flip, ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default App;
