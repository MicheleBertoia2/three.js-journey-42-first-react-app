import {useEffect, useState} from 'react'

export default function Clicker()
{
  //not destructured
  // const countState = useState(0)
  // const count = countState[0]
  // const setCount = countState[1]

  const [count, setCount] = useState(parseInt(localStorage.getItem('count') ?? 0))

  useEffect(() =>
  {
   
  }, [])

  useEffect(() =>
  {
    localStorage.setItem('count', count);
  }, [count])

  const buttonClick = () =>
  {
    setCount(count + 1)
  }  

  return <div>
    <div>Clicks count: {count}</div>
    <button onClick={ buttonClick }>Click me</button>
  </div> 
}