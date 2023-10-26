import React from 'react'
import {useSelector} from "react-redux";

const ItemCart = () => {
  const items=useSelector((store)=>store.cart.items);
  // const {}
  return (
    <div className='flex items-center justify-center border-4'>
      <div>
        <div>
          <p></p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default ItemCart;