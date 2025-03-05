import "../css/Home.css";

export default function Accueil() {
  return (
    <>
      <div className="background">
        <div className="container">
          <h1 className="title">PUZZEN</h1>
          <p className="explication">
            Bienvenue dans notre jeu ! Détendez-vous et profitez des magnifiques
            paysages naturels tout en s'amusant
          </p>
          <select className="select-theme">
            <option value="">Lotus</option>
            <option value="">Plage</option>
            <option value="">Cascade</option>
            <option value="">Méditation</option>
          </select>
        </div>
      </div>
    </>
  );
}
