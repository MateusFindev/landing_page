import HeroRectangleOne from "../../assets/rectangleOne.png"
import HeroRectangleTwo from "../../assets/rectangleTwo.png"
import Button from "../Button"

export default function Hero() {
    return (
        <section id="hero">
            <span className="desktop-only">
                <img src={HeroRectangleTwo} alt="Retângulo dois" />
            </span>
            <img src={HeroRectangleOne} alt="Retângulo um" />

            <div className="container content">
                <p className="desktop-only">Seja bem vindo!</p>
                <h1>Remuneração Variável ficou fácil e rápido de calcular!</h1>
                <p>Gerencie facilmente sua remuneração variável com cálculos automáticos para comissões, bonificações e prêmios personalizados.</p>

                <div className="flex gap-1">
                    <span><Button text="Cadastre-se" /></span>
                    <span className="desktop-only">
                        <Button text="Veja mais" secondary />
                    </span>
                </div>
            </div>

        </section>

    )
}
