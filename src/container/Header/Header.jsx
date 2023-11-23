import "./Header.css";

import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Start your new life" />
        <h1 className="app__header-h1">Neat Fit Coulple</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Conoce a Neat Fit Couple, tu dúo dinámico en nutrición y
          entrenamiento. Comprometidos con un estilo de vida saludable,
          ofrecemos planes personalizados y asesoramiento experto para
          transformar tu bienestar. Juntos, haremos de tu viaje de fitness una
          experiencia inspiradora y efectiva.
        </p>
        <button className="custom__button"> Get Started</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
