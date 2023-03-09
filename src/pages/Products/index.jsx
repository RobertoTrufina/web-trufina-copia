import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// Bootstrap
import CarouselProducts from "../../components/CarouselProducts";



export default function Products() {
    return (
        <div id='container'>

            {/* Header */}
            <Header />
            <h3 className="text-best">Trufas</h3>

            {/* product carousel */}
            <CarouselProducts />
            <h3 className="text-best">Geleias</h3>
            <CarouselProducts />

            {/* Footer */}
            <Footer />




        </div>

    )
}