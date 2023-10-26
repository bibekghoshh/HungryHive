import React from 'react'
import { Link } from 'react-router-dom';
import emptyCart from "../asset/cook.png";

const EmptyCartPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh] gap-6'>
        <div>
            <img className='mt-4 w-72' src={emptyCart} alt="Empty cart Img"/>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-lg font-medium text-slate-600'>Your cart is empty</p>
            <p className='text-sm text-slate-400'>You can go to home page to view more restaurants</p>
        </div>
        <div>
            <Link to="/"><button className='px-4 py-1 font-medium text-white bg-orange-400'>SEE RESTAURANTS NEAR YOU</button></Link>
        </div>
    </div>
  )
}

export default EmptyCartPage;