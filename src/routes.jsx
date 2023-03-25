import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Contact from "./pages/Contact";
import Home from './pages/Home/index';
import Login from "./pages/Login";
import Geleias from "./pages/Products/Geleias";
import Products from "./pages/Products/Trufas";
import Register from "./pages/register";


export default function ProjectRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trufas" element={<Products />} />
                <Route path="/geleias" element={<Geleias />} />
                <Route path="/fale-conosco" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
