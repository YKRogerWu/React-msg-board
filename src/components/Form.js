import React, { useState } from 'react'

export default function Form(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function updateNote(event) {
    const { name, value } = event.target
    setNote(prevValue =>(
      {
        ...prevValue,
        [name]: value
      }
    ))
  }

  function onSubmit(event){
    props.addNote(note)
    setNote({
      title:"",
      content:""
    })
    event.preventDefault()
  }

  return (
    <form>
      <input
        name='title'
        value={note.title}
        onChange={updateNote}
        placeholder='Title' />
      <textarea
        name='content'
        value={note.content}
        onChange={updateNote}
        placeholder='Enter a note...'
      />
      <button onClick={onSubmit}>Add</button>
    </form>
  )
}
