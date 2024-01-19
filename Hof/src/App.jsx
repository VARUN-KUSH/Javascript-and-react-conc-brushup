import { useState } from 'react'
import Posts from './Posts'
import Users from './UsersList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Users />
      
    </>
  )
}

export default App
