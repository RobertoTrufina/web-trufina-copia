import React from 'react';

import Brigadeiro_prd from '../Cards/CardsProducts/Brigadeiro_prd';
import Crocante_prd from '../Cards/CardsProducts/Crocante_prd';
import Cupuacu_prd from '../Cards/CardsProducts/Cupuacu_prd';
import LeiteNinho_prd from '../Cards/CardsProducts/LeiteNinho_prd';
import Mms_prd from '../Cards/CardsProducts/Mms_prd';
import OreoComNinho_prd from '../Cards/CardsProducts/OreoComNinho_prd';
import Ovomaltine_prd from '../Cards/CardsProducts/Ovomanine_prd';
import Prestigio_prd from '../Cards/CardsProducts/Prestigio_prd';

import Beijinho_prd from '../Cards/CardsProducts/Beijinho_prd';
import Casadinho_prd from '../Cards/CardsProducts/Casadinho_prd';



function Products() {
    return (
        <>

            <div className='card-product'>
                <Beijinho_prd />
                <Brigadeiro_prd />
                <Casadinho_prd />
                <Crocante_prd />
                <Cupuacu_prd />
            </div>
            <div className='card-product'>
                <LeiteNinho_prd />
                <OreoComNinho_prd />
                <Mms_prd />
                <Ovomaltine_prd />
                <Prestigio_prd />


            </div>
        </>
    );
}

export default Products;