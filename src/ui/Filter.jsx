import React from 'react'
import Button from './Button'

function Filter() {
    return (
        <div className='flex items-center gap-8'>
            <Button>all products</Button>
            <Button>available now</Button>
        </div>
    )
}

export default Filter