import React, { useState } from 'react'

const App = () => {

 const [num, setnum] =useState(2)

function increasesnum(){
  setnum(num+1)
  
}
function decreasesnum(){
    setnum(num-1)


  }
  function jump5num(){
    setnum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasesnum}>increases</button>
      <button onClick={decreasesnum}>decreases</button>
      <button onClick={decreasesnum}>increases by 5</button>
    </div>
  )
}

export default App