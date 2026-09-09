import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Pixell River Employee Directory</h1>
          <p>
            Welcome to the Pixell River Employee Directory!
          </p>
        </div>
      </section>
    </>
  )
}
      
export default App
