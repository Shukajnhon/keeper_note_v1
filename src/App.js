//
import React, { useState } from 'react';
// import { ReactDOM } from 'react';


import './styles.css'

import Header from './components/Header';
import Footer from './components/Footer';
import CreateArea from './components/CreateArea';
import Note from './components/Note';


function App() {

  const [notes, setNotes] = useState([])

  // AddNote
  function addNote(newNote) {
    if (!(newNote.title === "") && !(newNote.content === "")) {
      // console.log('newNote.title: ', newNote.title)
      // console.log('newNote.content: ', newNote.content)
      setNotes(prevNotes => {
        return [
          ...prevNotes,
          newNote
        ]
      })
    } else {
      console.log('Title or Content is empty')
    }

  }

  // DeleteNote
  function deleteNote(event) {
    const id = +event.target.id

    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
    console.log("Deleted", id)

  }


  return (
    <div className='app'>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}

      <Footer />
    </div>
  );
}

export default App;
