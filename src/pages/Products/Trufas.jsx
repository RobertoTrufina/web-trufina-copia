import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import AllProducts from "../../components/AllProducts";





export default function Trufas() {
    return (
        <div id='container'>

            {/* Header */}
            <Header />
            <h3 className="text-best">Trufas</h3>

            {/* product carousel */}
            <AllProducts />

            {/* Footer */}
            <Footer />




        </div>

    )
}