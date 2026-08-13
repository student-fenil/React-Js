import React, { useEffect, useState } from 'react';

const App = () => {
  
  const [num,setnum] =  useState(0)
  const [num2,setnum2] =  useState(100)


  useEffect(function() {
    console.log("use effect of running...");
  });

  return (
    <div>
      <h1>value of num is{num}</h1>
      <h1>value of num2 is{num2}</h1>

      <button onClick={()=>{
        setnum(num+1)
        setnum(num+10)

      }}>click</button>
    </div>
  );
};

export default App;