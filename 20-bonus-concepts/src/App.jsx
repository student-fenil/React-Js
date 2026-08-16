import { useState } from 'react'
import navbar from './components/navbar'

const App = () => {

  const [theme,settheme] = useState('dark')
  return (
    <div>
      <h1>theme is {theme}</h1>

      <navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
