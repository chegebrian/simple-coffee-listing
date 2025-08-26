import React from 'react'

function Header() {
    return (
        <header className='flex items-center justify-center flex-col gap-4 text-center mb-8'>
            <h1 className='capitalize font-semibold text-[#FEF7EE] text-2xl'>our collection</h1>
            <p className='max-w-lg text-[#6F757C]'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </header>
    )
}

export default Header