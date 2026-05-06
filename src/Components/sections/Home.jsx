import { Nav } from "../Navbar"
import { Hero } from "../Hero"
import { Demo } from "../Demo"
import { Features } from "../Features"
export const Home = () => {
    return(

        <section id="home">
            <Nav/>
            <Hero/>
            <Demo/>
            <Features/>

        </section>
    )
}