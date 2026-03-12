import React, { useState } from 'react';
import HookF from './HookF';
import HookT from './HookT';

const HookFT = () => {
    const [product,setProduct] = useState([]);
    const handleProduct = newProduct=>{
        const newProducts = [...product,newProduct];
        
        setProduct(newProducts)
    }
    return (
        <div>
            <HookF handleProduct={handleProduct}></HookF>
            <HookT product={product}></HookT>
        </div>
    );
};

export default HookFT;