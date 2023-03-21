import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// Bootstrap
import CarouselProductsAll from "../../components/CarouselProductsAll";



export default function Products() {
    return (
        <div id='container'>

            {/* Header */}
            <Header />
            <h3 className="text-best">Trufas</h3>

            {/* product carousel */}
            <CarouselProductsAll />

            {/* Footer */}
            <Footer />




        </div>

    )
}