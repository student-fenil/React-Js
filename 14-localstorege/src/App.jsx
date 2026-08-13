import React from 'react'

const App = () => {

    const user = {
      username:'fenil',
      age:18,
      city:'surat'
    }

    localStorage.setitem('user',JSON.stringify(user))
    return (
    <div>
      App
    </div>
  )
}

export default App
