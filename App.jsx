import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <nav>
      
        <div>
          <button className='btn1'>Login</button>
          <button   className='btn2'>Register</button>
          </div>
            <h1 className='logo'>Resume</h1>
      </nav>
      <main>
          <h1 className='heding'>Free Online <br></br>
          Resume Builder
          </h1>
          <div className='imgg'>
            <img src='./images/mobile.jpg' height={200} width={300}></img>
          </div>
          <div>
            <button className='submit'>Build My Resume</button>
          </div>
      </main>
    </div>
  )
}

export default App
