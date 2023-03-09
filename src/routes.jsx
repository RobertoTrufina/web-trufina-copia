import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Home from './pages/Home/index';


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
