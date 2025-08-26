import React from 'react'
import { useCoffeeApi } from '../contexts/CoffeeApi';


function Button({ children, value }) {

    const { setFilteredCoffee,filteredCoffee } = useCoffeeApi()


    return (
        <button className={`${filteredCoffee === value ? "bg-[#4D5562] px-3 py-1 rounded-lg" : ""} capitalize cursor-pointer font-semibold text-[#FEF7EE] text-sm`} value={value} onClick={(e) => {
            setFilteredCoffee(e.target.value);
        }}>{children}</button>
    )
}

export default Button