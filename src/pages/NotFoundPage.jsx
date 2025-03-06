import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import logo from "../assets/icons/lotus-tattoo-5084493_640.png"


export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <section className="not-found-page-container">
            <h2>Désolée, la page que vous recherchez est introuvable</h2>
            <img
                className="lotus-img"
                src={logo}
                alt="retour accueil"
                onClick={handleClick}
            />
            <span>Pour retourner à l'accueil, cliquez sur l'image.</span>
        </section>
    );
}
