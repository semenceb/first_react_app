import React, { useState } from "react"
import { IProduct } from "../model"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [more, setMore] = useState(false)

    const btnBgClassName = more ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClsasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div 
        className="border py-2 px-4 rounder flex flex-col items-center mb-2"
        >
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{ product.title }</p>
            <p className="font-bold">{product.price}</p>
            <button
             className={btnClsasses.join(' ')}
             onClick={() => setMore(prev => !prev)}
             >
                { more ? 'Hide' : 'Show more'}
                </button>



                {more && <div>
                    <p>{ product.description }</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
                </div>}
            
            </div>
    )
}