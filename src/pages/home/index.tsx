import Header from "../../components/Header"
import "../../styles/utility.css"

import Hero from "../../components/sections/Hero"
import Solution from "../../components/sections/Solution"
import Testimonials from "../../components/sections/Testimonials"
import Pricing from "../../components/sections/Pricing"
import { Contact } from "../../components/sections/Contact"

import "../../styles/hero.css"
import "../../styles/solution.css"
import "../../styles/testimonials.css"
import "../../styles/pricing.css"
import "../../styles/contact.css"

export default function Home() {
    return (
        <>
            <Header />

            <Hero/>

            <Solution/>

            <Testimonials/>

            <Pricing/>

            <Contact />
        </>
    )
}