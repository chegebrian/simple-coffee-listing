import React from 'react'
import Filter from '../ui/Filter'
import { useCoffeeApi } from '../contexts/CoffeeApi'
import CoffeeCard from './CoffeeCard'

function Main() {
   const {coffee} = useCoffeeApi()
    return (
        <main>
            <Filter />
            <section>
                {coffee?.map((item) => <CoffeeCard coffee={item} key={item.id}/>)}
            </section>
        </main>
    )
}

export default Main