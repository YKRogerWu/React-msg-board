import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function Form(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const [isExpanded, setExpanded] = useState(false)

  function expansionOn() {
    setExpanded(true)
  }

  function updateNote(event) {
    const { name, value } = event.target
    setNote(prevValue => (
      {
        ...prevValue,
        [name]: value
      }
    ))
  }

  function onSubmit(event) {
    props.addNote(note)
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault()
  }

  return (
    <form className='create-note'>

      {isExpanded &&
        <input
          name='title'
          value={note.title}
          onChange={updateNote}
          placeholder='Title' />
      }
      <textarea
        name='content'
        value={note.content}
        onChange={updateNote}
        onClick={expansionOn}
        rows={isExpanded ? "3" : "1"}
        placeholder='Enter a note...'
      />

      <Zoom in={isExpanded}>
        <Fab onClick={onSubmit}>
          <AddIcon />
        </Fab>
      </Zoom>


    </form>
  )
}
