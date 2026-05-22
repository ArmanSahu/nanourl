import { Footer } from "../components/footer"
import { Hero } from "../components/hero"
import { Navbar } from "../components/navbar"


export const Main = () => {
    return <div className="bg-primary-bg">
        <Navbar />
        <Hero />
        <Footer />
    </div>
}