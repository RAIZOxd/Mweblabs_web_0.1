import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import AnimatedLayout from "./components/AnimatedLayout"
import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AnimatedLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </AnimatedLayout>
    </Router>
  )
}

export default App
