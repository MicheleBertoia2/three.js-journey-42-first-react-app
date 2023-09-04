import {useEffect, useState} from 'react'

export default function Clicker({keyName, color = 'darkOrchid', increment})
{
  //not destructured
  // const countState = useState(0)
  // const count = countState[0]
  // const setCount = countState[1]

  const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

  useEffect(() =>
  {
    //console.log('first render');
    return ()=>
   {
    //console.log('component disposed');
    localStorage.removeItem(keyName)
   } 
  }, [])

  useEffect(() =>
  {
    localStorage.setItem(keyName, count);
  }, [count])

  const buttonClick = () =>
  {
    setCount(count + 1)
    increment()
  }  

  return <div>
    <div
      style={ {color} }
    >Clicks count: {count}</div>
    <button onClick={ buttonClick }>Click me</button>
  </div> 
}