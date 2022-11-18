//
import React from 'react';
// import { ReactDOM } from 'react';



function Note(props) {
    function handleClick(e) {
        props.onDelete(e)
    }

    return <div className='note' id={props.id} >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button index={props.index} onClick={handleClick}>
            <i id={props.id} className="fa-solid fa-trash"></i>
        </button>
    </div>

}

export default Note;