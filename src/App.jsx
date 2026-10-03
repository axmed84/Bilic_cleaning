import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/About'
import Services from './pages/Sevices'
import Whybilic from './pages/Whybilic'
import OurProcess from './pages/OurProcess'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'


const App = () => {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/services"
        element={<Services />}
      />

      {/* ================= SERVICE DETAILS ================= */}

      <Route
        path="/services/:serviceId"
        element={<ServiceDetail />}
      />

      <Route
        path="/why-bilic"
        element={<Whybilic />}
      />

      <Route
        path="/process"
        element={<OurProcess />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

    </Routes>

  )

}


export default App