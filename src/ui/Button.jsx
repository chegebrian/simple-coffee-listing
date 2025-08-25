import React from 'react'
import { useCoffeeApi } from '../contexts/CoffeeApi';


function Button({ children, value }) {

    const { setFilteredCoffee } = useCoffeeApi()


    return (
        <button className='capitalize cursor-pointer font-semibold' value={value} onClick={(e) => {
            setFilteredCoffee(e.target.value);
        }}>{children}</button>
    )
}

export default Button