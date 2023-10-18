import React from 'react'
import {CDN_URL} from "../utils/constrains";

const ItemCards = ({items}) => {
    const {name,price,description,imageId}=items.card.info;
    // console.log(items);
  return (
    <div className='flex justify-between mx-4'>
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
        <div className="flex" >
            <button className='absolute px-4 py-2 text-white bg-black rounded-2xl'>Add +</button>
            <img className='object-cover w-32 h-28' src={CDN_URL+imageId} alt="Dish Photo" />
        </div>
    </div>
  )
}

export default ItemCards;