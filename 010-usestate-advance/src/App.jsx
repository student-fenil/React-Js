import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:'fenil',age:18})

  const btnClicked = () => {
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click me</button>
    </div>
  )
}

export default App

