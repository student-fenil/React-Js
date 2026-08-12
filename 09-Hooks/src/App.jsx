import React, { useState } from 'react'

const App = () => {

 const [num, setnum] =useState(2)

function increasesnum(){
  setnum(num+1)
  
}
function decreasesnum(){
    setnum(num-1)

}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasesnum}>increases</button>
      <button onClick={decreasesnum}>decreases</button>

    </div>
  )
}

export default App