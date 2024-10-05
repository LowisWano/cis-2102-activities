import Dashboard from './components/Dashboard'
import ManageAccount from './components/ManageAccount'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <> 
      <Header/>
      <Navbar/>
      <main className='p-5 flex flex-col gap-5'>
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard/> } />
            <Route path='/manage-account' element={<ManageAccount />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </main>
      <Footer />
       
    </>
  )
}

export default App
