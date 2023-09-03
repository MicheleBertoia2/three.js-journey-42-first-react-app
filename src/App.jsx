import { useState } from "react";
import Clicker from "./components/Clicker";

export default function App()
{
  const [hasClicker, setHasClicker] = useState(true)

  const toggleClickerClick = () =>
  {
    setHasClicker(!hasClicker)
  }

  useState(() =>
  {

  }, [])

  return <>
    <h1>My App</h1>
    <button onClick={toggleClickerClick}>{ hasClicker ? 'Hide' : 'Show' } Clicker</button>
    { hasClicker ? <Clicker/> : null }
    {/** trick { hasClicker && <Clicker /> } */}
  </> 
}