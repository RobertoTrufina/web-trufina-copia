import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";


import Contact from "./pages/Contact";
import Home from './pages/Home/index';
import Products from "./pages/Products";


export default function ProjectRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/fale-conosco" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
