import { Routes, Route } from "react-router-dom"
import Content from "./Content"
import Home from "./homes/Home"
import Service from "./services/Service"
import About from "./abouts/About"
import Contact from "./contacts/Contact"
function Client({ isAdmin }) {

  return (
    <Routes>
      <Route path="/" element={<Content />} >
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default Client