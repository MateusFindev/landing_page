import IconFlex from "../../assets/zap.svg"
import CardPrice from "../../components/CardPrice"

export default function Pricing() {
    return (
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
    )
}