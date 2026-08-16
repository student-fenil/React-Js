import React from 'react'

const navbar = (props) => {

    function changeTheme(){
        console.log('Theme change',theme);
        props.setTheme('dark')
        
    }
    
  return (
    <div>
      <button onChange={changeTheme}>change Theme</button>
    </div>
  )
}

export default navbar
