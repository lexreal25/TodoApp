import React from 'react'
import './List.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move' //react animation 

export default function ListItems(props) {
    const items = props.items
    const listitems = items.map(item =>{
        return <div className="list" key={item.key}>
            <p>{/*{item.text} converting this into input field to 
            make the text editable*/ } 
            <input type='text'
                id={item.key} 
                value={item.text}
                onChange={ (e) => props.editItem(e.target.value, item.key)}
            />
                <span>
                    <FontAwesomeIcon className='faicon' icon='trash'
                    onClick={ () => props.deleteItem(item.key)}/>
                </span>
            </p>
        </div>
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
            {listitems}
            </FlipMove>
        </div>
    )
}
