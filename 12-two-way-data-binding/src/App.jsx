import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted',title);
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder="enter your name"
          value={title}
          onChange={(e) => {
            setTitle("fenil");
          }}
        />

        <button>submit</button>
      </form>
    </div>
  )
}

export default App