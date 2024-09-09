import "../styles/utility.css"
import "../styles/card.css"

interface ICardProps {
    title: string;
    text: string;
    urlIcon: string;
}

export default function Card ( {title, text, urlIcon}: ICardProps) {

    return (
        <div className="card">
            <img src={urlIcon} alt="Ícone da solução" />
            <h4>{title}</h4>
            <p className="description-card">{text}</p>
        </div>
    )
}