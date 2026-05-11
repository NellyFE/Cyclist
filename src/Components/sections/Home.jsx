import { Nav } from "../Navbar"
import { Hero } from "../Hero"
import { Demo } from "../Demo"
import { Features } from "../Features"
import { Bgsection } from "../Bgsection"
import { Testimonials } from "../Testimonials"
export const Home = () => {
    return(

        <section id="home">
            <Nav/>
            <Hero/>
            <Demo/>
            <Features/>
            <Bgsection/>
            <Testimonials/>

        </section>
    )
}