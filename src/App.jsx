import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Main from './pages'
import Train from './pages/Train'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/train/:id' element={<Train/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  
  )
}

export default App
