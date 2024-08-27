import Header from "../../components/header"
import "../../styles/utility.css"
import Button from "../../components/Button"
import HeroRectangleOne from "../../assets/rectangleOne.png"
import HeroRectangleTwo from "../../assets/rectangleTwo.png"
import "../../styles/hero.css"

export default function Home() {
    return (
        <>
            <Header />

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retângulo dois" />
                </span>
                <img src={HeroRectangleOne} alt="Retângulo um" />

                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.</p>
                    
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>

            </section>

            


        </>
    )
}