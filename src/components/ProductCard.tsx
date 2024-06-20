import React from 'react'
import PayButton from './PayButton';

const ProductCard = ({ product }: { product: { image: string, name: string, price: number } }) => {
    return <div className='flex items-center justify-center h-screen w-screen'>
        <div className='mx-auto bg-white rounded-xl shadow-md overflow-hidden w-4/5 lg:w-3/5'>
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={product.image} alt={product.name} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-2xl text-gray-800 font-bold">
                        {product.name}
                    </div>
                    <p className="mt-2 text-gray-700 text-xl font-bold">
                        Ξ {product.price.toLocaleString()}
                    </p>
                    <PayButton price={product.price as number} />
                </div>
            </div>
        </div>
    </div>
}
export default ProductCard;