import { useState } from 'react'
import './App.css'


const ClickTracker =({value, onDate}) => {
  return <button onClick={onDate}>Click ME {value}</button>;
  
}

export default function App() {
 const [count, setCount] = useState(0)

 const [isOpen, setIsOpen] = useState(false);




const upDate = () => {
setCount (count + 1)
  }
  


  return (
    <>
    <div>
      <button>Open/Close</button>
      {isOpen && (<p>Lorem ipsum dolor sit amet.</p>)}
    </div>
    <ClickTracker value ={count} onDate ={upDate}/>
    <ClickTracker value ={count} onDate ={upDate}/>


    </>
  )
}


