import React from 'react'

const App = () => {

  const submithandler =(e) => {
    e.preventdefault()
    console.log('form submitted');
    
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submithandler(e)
      }}>
        <input type="text" placeholder='enter your name' />
        <button>sumbit</button>
      </form>
    </div>
  )
}

export default App
