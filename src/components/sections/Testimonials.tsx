
import ProfileImageOne from "../../assets/ProfileImageOne.png"
import ProfileImageTwo from "../../assets/ProfileImageTwo.png"
import ProfileImageThree from "../../assets/ProfileImageThree.png"
import CardCarousel from "../../components/CardCarousel"

export default function Testimonials() {
    return (
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
                        starCloseNumber={4}
                        nameCostumer="Pablo Vitar"
                        ocupationCostumer="Bilionário e josé rico"
                    />
                    <CardCarousel
                        comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                        urlProfileImage={ProfileImageTwo}
                        starCloseNumber={3}
                        nameCostumer="Nhonho"
                        ocupationCostumer="Agressor"
                    />
                    <CardCarousel
                        comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                        urlProfileImage={ProfileImageThree}
                        starCloseNumber={2}
                        nameCostumer="Boules"
                        ocupationCostumer="Cheirador"
                    />
                </div>
                <div className="carousel-content">
                    <CardCarousel
                        comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                        urlProfileImage={ProfileImageOne}
                        starCloseNumber={4}
                        nameCostumer="Pablo Vitar"
                        ocupationCostumer="Bilionário e josé rico"
                    />
                    <CardCarousel
                        comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                        urlProfileImage={ProfileImageTwo}
                        starCloseNumber={3}
                        nameCostumer="Nhonho"
                        ocupationCostumer="Agressor"
                    />
                    <CardCarousel
                        comentary="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
                        urlProfileImage={ProfileImageThree}
                        starCloseNumber={2}
                        nameCostumer="Boules"
                        ocupationCostumer="Cheirador"
                    />
                </div>
            </section>
        </section>
    )
}