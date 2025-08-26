import React from 'react'

//   {
//     "id": 1,
//     "name": "Cappuccino",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
//     "price": "$5.20",
//     "rating": 4.7,
//     "votes": 65,
//     "popular": true,
//     "available": true
//   },

function CoffeeCard({coffee}) {
    const {id, name, image, price, rating, votes, popular, available} = coffee;
    return (
        <div className='max-w-64'>
            
            <img src={image} alt={name} className='rounded-lg object-contain'/>
            <div className='flex flex-col gap-3 py-4'>
                <div className='flex items-center justify-between'>
                    <h3>{name}</h3>
                    <span className='font-semibold'>{price}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="/images/Star_fill.svg" alt="star-icon-image" />
                    <span>{rating}</span>
                    <span>({votes} votes)</span>
                </div>

            </div>
        </div>
    )
}

export default CoffeeCard