import { createContext, useContext, useEffect, useState } from "react";


const coffeeContext = createContext()


function CoffeeProvider({ children }) {
    const [coffee, setCoffee] = useState([])
    const [filteredCoffee, setFilteredCoffee] = useState("all")

    const filter = coffee?.filter((c) => c.available )

    function FilteredData() {
        let coffeeFiltered = coffee

        if (filteredCoffee !== "all") return filter;

        return coffeeFiltered;
    }

    const filteredData = FilteredData()

    useEffect(() => {
        async function fectchCoffee() {
            try {
                const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
                if (!response.ok) return;
                const data = await response.json()
                setCoffee(data)
            } catch (error) {
                console.error("unable to fetch data", error);

            }
        }
        fectchCoffee()
    }, [])
    return (
        <coffeeContext.Provider value={{ coffee, filteredData, setFilteredCoffee,filteredCoffee }}>{children}</coffeeContext.Provider>
    )
}



function useCoffeeApi() {
    const context = useContext(coffeeContext)
    if (context === undefined) throw new Error("coffeecontext was used outside of its provider")
    return context
}

export { CoffeeProvider, useCoffeeApi }