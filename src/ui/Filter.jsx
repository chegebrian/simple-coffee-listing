import React from 'react'
import Button from './Button'


function Filter() {
    

    return (
        <div className='flex items-center gap-8'>
            <Button value="all">all products</Button>
            <Button value="available">available now</Button>
        </div>
    )
}

export default Filter