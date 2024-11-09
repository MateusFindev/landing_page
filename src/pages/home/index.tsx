import Header from "../../components/Header"
import "../../styles/utility.css"
import Button from "../../components/Button"
import Card from "../../components/Card"
import HeroRectangleOne from "../../assets/rectangleOne.png"
import HeroRectangleTwo from "../../assets/rectangleTwo.png"
import IconAutomate from "../../assets/cpu.svg"
import IconReport from "../../assets/file-text.svg"
import IconFlex from "../../assets/zap.svg"
import ProfileImageOne from "../../assets/ProfileImageOne.png"
import ProfileImageTwo from "../../assets/ProfileImageTwo.png"
import ProfileImageThree from "../../assets/ProfileImageThree.png"
import CardCarousel from "../../components/CardCarousel"
import CardPrice from "../../components/CardPrice"
import Input from "../../components/Input"
import "../../styles/hero.css"
import "../../styles/solution.css"
import "../../styles/testimonials.css"
import "../../styles/pricing.css"

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
                            urlIcon={IconFlex}
                            title="Flexibilidade"
                            text="Adapte facilmente o sistema a diferentes regras de remuneração, atendendo a qualquer modelo de negócios."
                        />

                        <Card
                            urlIcon={IconReport}
                            title="Relatórios Detalhados"
                            text="Gere relatórios personalizados com métricas de desempenho, facilitando o acompanhamento dos resultados."
                        />

                        <Card
                            urlIcon={IconAutomate}
                            title="Automação"
                            text="Calcule comissões e prêmios automaticamente, economizando tempo e eliminando erros manuais."
                        />

                    </div>
                </div>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only bold">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                    Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                    comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <CardCarousel
                            comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                            urlProfileImage={ProfileImageOne}
                            starCloseNumber= {4}
                            nameCostumer="Pablo Vitar"
                            ocupationCostumer="Bilionário e josé rico"
                        />
                        <CardCarousel
                            comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                            urlProfileImage={ProfileImageTwo}
                            starCloseNumber= {3}
                            nameCostumer="Nhonho"
                            ocupationCostumer="Agressor"
                        />
                        <CardCarousel
                            comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                            urlProfileImage={ProfileImageThree}
                            starCloseNumber= {2}
                            nameCostumer="Boules"
                            ocupationCostumer="Cheirador"
                        />
                    </div>
                    <div className="carousel-content">
                        <CardCarousel
                            comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                            urlProfileImage={ProfileImageOne}
                            starCloseNumber= {4}
                            nameCostumer="Pablo Vitar"
                            ocupationCostumer="Bilionário e josé rico"
                        />
                        <CardCarousel
                            comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                            urlProfileImage={ProfileImageTwo}
                            starCloseNumber= {3}
                            nameCostumer="Nhonho"
                            ocupationCostumer="Agressor"
                        />
                        <CardCarousel
                            comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                            urlProfileImage={ProfileImageThree}
                            starCloseNumber= {2}
                            nameCostumer="Boules"
                            ocupationCostumer="Cheirador"
                        />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos Planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <CardPrice
                        plan="Básico"
                        description="Baixe o ferramenta e comece a utilizar agora mesmo!"
                        price="Grátis"
                        benefits={[
                            { description: "Com anúncios", urlIcon: IconFlex },
                            { description: "Até 10 produtos por dia", urlIcon: IconFlex },
                            { description: "Utilize sem limitação X", urlIcon: IconFlex }
                        ]}
                    />

                    <CardPrice
                        plan="Premium"
                        description="Para quem deseja utilizar nossa ferramenta sem limitações!"
                        price="R$ 19,90"
                        method="/mês"
                        benefits={[
                            { description: "Sem interrupção de anúncios", urlIcon: IconFlex },
                            { description: "Utilize quantas vezes quiser", urlIcon: IconFlex },
                            { description: "Utilize todos os produtos disponíveis na plataforma", urlIcon: IconFlex }
                        ]}
                        premium
                    />

                    <CardPrice
                        plan="Empresarial"
                        description="Utilize nossa soiução na sua empresa. Aprimore seu fluxo."
                        price="R$ 12,90"
                        method="/mês por dev"
                        benefits={[
                            { description: "Com anúncios", urlIcon: IconFlex },
                            { description: "Até 10 produtos por dia", urlIcon: IconFlex },
                            { description: "Utilize sem limitação X", urlIcon: IconFlex }
                        ]}
                    />

                </section>
            </section>

            <section id="contact">
                <header>
                    <h2>Entre em contato</h2>
                    <p>Entre em contato, estamos dispostos a tirar qualquer dúvida😎.</p>
                </header>
                <div className="content-contact">
                    <Input placeholder="Seu melhor Email" type="email"></Input>
                    <Input placeholder="Motivo do contato. Ex qual o valor de x?" type="text"></Input>
                    <Button text="Enviar" ></Button>
                </div>
            </section>
        </>
    )
}