import React from 'react'
import Filter from '../ui/Filter'
import { useCoffeeApi } from '../contexts/CoffeeApi'
import CoffeeCard from './CoffeeCard'

function Main() {
   const {coffee, filteredData} = useCoffeeApi()
    return (
        <main className='flex items-center flex-col gap-8'>
            <Filter />
            <section className='grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 px-8'>
                {filteredData?.map((item) => <CoffeeCard coffee={item} key={item.id}/>)}
            </section>
        </main>
    )
}

export default Main