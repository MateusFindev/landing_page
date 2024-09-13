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

            <section id="solution">
                <div className="container">
                    <div className="solution-title">
                        <p className="desktop-only">Soluções</p>
                        <h2>Sob medida para você!</h2>
                        <p>Inovação é com a gente! A <span>Remunera</span> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.</p>
                    </div>

                    <div className="solution-content">
                            <Card 
                                urlIcon="src/assets/zap.svg"
                                title="Flexibilidade"
                                text="Adapte facilmente o sistema a diferentes regras de remuneração, atendendo a qualquer modelo de negócios."
                            />

 
                            <Card 
                                urlIcon="src/assets/file-text.svg"
                                title="Relatórios Detalhados"
                                text="Gere relatórios personalizados com métricas de desempenho, facilitando o acompanhamento dos resultados."
                            />

                        

                            <Card 
                                urlIcon="src/assets/cpu.svg"
                                title="Automação"
                                text="Calcule comissões e prêmios automaticamente, economizando tempo e eliminando erros manuais."
                            />

                    </div>
                </div>
            </section>
        </>
    )
}