import React from 'react';
import './style.css';

import Beijinho_prd from '../Cards/ProductsAll/Beijinho_prd';
import Brigadeiro_prd from '../Cards/ProductsAll/Brigadeiro_prd';
import Casadinho_prd from '../Cards/ProductsAll/Casadinho_prd';
import Crocante_prd from '../Cards/ProductsAll/Crocante_prd';
import Cupuacu_prd from '../Cards/ProductsAll/Cupuacu_prd';
import LeiteNinho_prd from '../Cards/ProductsAll/LeiteNinho_prd';
import Mms_prd from '../Cards/ProductsAll/Mms_prd';
import OreoComNinho_prd from '../Cards/ProductsAll/OreoComNinho_prd';
import Ovomaltine_prd from '../Cards/ProductsAll/Ovomaltine_prd';
import Prestigio_prd from '../Cards/ProductsAll/Prestigio_prd';




export default function CarouselProductsAll() {
    return (

        <div className='content-cards-products'>

            <div>
                <Beijinho_prd />
            </div>
            <div>
                <Brigadeiro_prd />
            </div>
            <div>
                <Casadinho_prd />
            </div>
            <div>
                <Crocante_prd />
            </div>
            <div>
                <Cupuacu_prd />
            </div>
            <div>
                <LeiteNinho_prd />
            </div>
            <div>
                <Mms_prd />
            </div>
            <div>
                <OreoComNinho_prd />
            </div>
            <div>
                <Ovomaltine_prd />
            </div>
            <div>
                <Prestigio_prd />
            </div>




        </div>
    );
}
