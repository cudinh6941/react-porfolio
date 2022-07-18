import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/index.js'
import Home from './Components/Home/Index.js'
import About from './Components/About/Index'
import Contact from './Components/Contact/Index'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
