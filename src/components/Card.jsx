import React from 'react'
import "./Card.css"

// const Details = ({title, desc}) => {
//     return (
//         <div>
//             <p> <b> {title}</b> {desc}  </p>
//         </div>
//     )
// }

const Card = ({name, state, stack, desc, jobTitle}) => {
    return (
        <div className='card'>
            <p> <b> First name: </b> {name} </p>
            <p> <b> State of Origin: </b> {state} </p>
            <p> <b> Stack: </b> {stack} </p>
            <p> <b> About Me: </b></p>
            <p> {desc} </p>
            <p> <b> Description:</b> {jobTitle}</p>
            <p></p>
        </div>
    )
}

export default Card