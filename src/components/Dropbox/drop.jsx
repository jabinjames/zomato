import React from 'react'
import '../Dropbox/drop.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SelectSmall from './selector'

const Drop = () => {
    return (
        <>
            <div className="dropbox">
            <SelectSmall 
            content='Top Restaurant chains'
            city1='kochi'
            city2='trivandrum'
            city3='delhi'
            city4='goa'
            />

            <SelectSmall 
            city1='kochi'
            city2='trivandrum'
            city3='delhi'
            city4='goa'
            content='Cities We Deliver To'/>
            
            </div>
        </>
    )
}
export default Drop;