import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';



function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    // HandleChange
    function handleChange(event) {
        const { name, value } = event.target
        // console.log("Name: ", name)
        // console.log("Value: ", value)

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })

    }


    // SubmitNote
    function submitNote(event) {
        event.preventDefault()
        props.onAdd(note)

        setNote({
            title: "",
            content: ""
        })
    }

    // Expand
    function expand() {
        setExpanded(true)
    }

    return (
        <div>
            <form>
                {isExpanded ? (
                    <input
                        onChange={handleChange}
                        name="title" value={note.title}
                        placeholder="Title"
                        type="text"></input>
                ) : null}
                <textarea
                    onClick={expand}
                    onChange={handleChange}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..." rows={isExpanded ? 3 : 1}></textarea>

                <Zoom in={isExpanded ? true : false}>
                    <button onClick={submitNote}>
                        <AddIcon />
                    </button>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea