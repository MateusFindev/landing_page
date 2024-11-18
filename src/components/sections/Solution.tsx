import Card from "../Card"
import IconAutomate from "../../assets/cpu.svg"
import IconReport from "../../assets/file-text.svg"
import IconFlex from "../../assets/zap.svg"

export default function Solution() {
    return (
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
    )
}
