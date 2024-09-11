import Header from "../../components/Header"
import "../../styles/utility.css"
import Button from "../../components/Button"
import Card from "../../components/Card"
import HeroRectangleOne from "../../assets/rectangleOne.png"
import HeroRectangleTwo from "../../assets/rectangleTwo.png"
import "../../styles/hero.css"
import "../../styles/solution.css"

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

            <section id="solution">
                <div className="container">
                    <div className="solution-title">
                        <p className="desktop-only">Soluções</p>
                        <h2>Sob medida para você!</h2>
                        <p>Inovação é com a gente! O <span>KM Fácil</span> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.</p>
                    </div>

                    <div className="solution-content">
                            <Card 
                                urlIcon="src\assets\award 1.svg"
                                title="Produto Vencedor"
                                text="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
                            />

 
                            <Card 
                                urlIcon="src\assets\award 1.svg"
                                title="Produto Vencedor"
                                text="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
                            />

                        

                            <Card 
                                urlIcon="src\assets\award 1.svg"
                                title="Produto Vencedor"
                                text="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
                            />

                    </div>
                </div>
            </section>

            
            

        </>
    )
}