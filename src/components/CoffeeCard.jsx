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

function CoffeeCard({ coffee }) {
    const { name, image, price, rating, votes, popular, available } = coffee;
    return (
        <div className='max-w-64 relative'>

            <img src={image} alt={name} className='rounded-lg object-contain' />
            {popular && <span className='absolute top-2 left-4 px-2 rounded-sm font-semibold text-sm bg-[#F6C768]'>Popular</span>}
            <div className='flex flex-col gap-3 py-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-semibold text-[#FEF7EE]'>{name}</h3>
                    <span className='font-semibold bg-[#BEE3CC] px-2 rounded-sm'>{price}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={rating ? "/images/Star_fill.svg" : "/images/Star.svg"} alt="star-icon-image" />
                    {rating ? <><span className='text-[#FEF7EE]'>{rating}</span><span className='text-[#6F757C]'>({votes} votes)</span></> : <span className='text-[#6F757C]'>No rating</span>}
                    {!available && <span className='text-[#ED735D]'>Sold out</span>}
                </div>

            </div>
        </div>
    )
}

export default CoffeeCard