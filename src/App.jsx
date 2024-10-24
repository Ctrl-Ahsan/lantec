import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Footer />
        </>
    )
}

export default App
