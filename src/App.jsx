


import AnimatedRoutes from './components/AnimatedRoutes'
import { AuthContextProvider } from './context/AuthContext'

import './index.css'

import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <div className="App">
     
      <BrowserRouter>
        <AuthContextProvider>
          <AnimatedRoutes/>
        </AuthContextProvider>
         
      </BrowserRouter>
    
   
    </div>
  )
}

export default App
