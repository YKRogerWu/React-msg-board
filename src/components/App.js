import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";
import Note from "./Note";


function App() {
  const [notes, setNotes] = useState([])

  function handleNewNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
  })
  }

  function handleDelete(id) {
    setNotes(prevValue => 
      prevValue.filter((note, index) => 
        index !== id
      )
    )
  }

  return (
    <div>
      <Header />
      <Form
        addNote={handleNewNote}
      />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={handleDelete}
          />)
      }
      )}
      <Footer />
    </div>
  )
}

export default App;
