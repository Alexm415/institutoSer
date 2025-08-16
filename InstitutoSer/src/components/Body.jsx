import Grp from "../assets/images/Grupo.jpeg";
import event from "../assets/images/event.jpeg";

import { Link } from "react-router-dom";

const styles = {
  pic: {
    width: 1000,
    height: 462,
  },
  eventpic: {
    height: 500,
    width: 500,

    margin: "20px", // Add some space between the image and the text
  },
  flexContainer: {
    display: "flex",
    alignItems: "center", // Align items vertically centered
  },
  title: {
    marginLeft: "100px",
    padding: 50,
    whitespace: "nowrap",

    textoverflow: "ellipsis",
  },
};
styles.flexContainer = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap", // lets them stack on small screens
};

function Body() {
  return (
    <div>
      <main className="body">
        <div className="hero">
          <div className="row featurette">
            <div className="w3-container w3-padding-32">
              <h1>Un Poco de nos</h1>
              <div>
                <p>
                  En Instituto SER, una idea que nació de la pasión por el
                  crecimiento humano se ha convertido en un espacio donde
                  personas de todas las edades y contextos rediseñan la forma en
                  que viven, se relacionan y toman decisiones. Más que un centro
                  de entrenamiento, somos una comunidad que se expande cada día
                  con quienes eligen transformar su vida y aportar al mundo
                  desde una nueva versión de sí mismos.
                </p>
                <p className="">
                  En Instituto SER transformamos vidas a través de
                  entrenamientos vivenciales que te llevan a descubrir y superar
                  tus propios límites. En un ambiente seguro y retador,
                  aprenderás a liberar patrones que frenan tu potencial, ganar
                  confianza, fortalecer tus relaciones y crear resultados
                  extraordinarios en las áreas más importantes de tu vida.
                </p>
              </div>
            </div>
            <section>
              <img
                style={styles.pic}
                src={Grp} // Replace with your actual file path (e.g., import logo from './assets/logo-similar.png'; then src={logo})
                alt="Grp"
                className="" // Add 'spinning-logo' to enable the animation
              />
            </section>
            <section className="events">
              <div className="event-card">
                <h2>Nuestros próximos eventos</h2>
                <img style={styles.eventpic} src={event} alt="Event" />
              </div>
              {/* Add more event cards as needed */}
            </section>
            <section className="contact">
              <h2>Contactanos</h2>
              <p>A</p>
              <p>Dirección General: </p>
              <p>Administración: </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Body;

/*import Me from "../../../images/me.jpeg";
const styles = {
  profileImg: {
    height: 250,
    width: 250,
    borderRadius: 100,
    display: "flex",
  },
  border: {
    display: "flex",
  },
};
function Body() {
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">Hello My Name is Alexander</h1>
          <img className="display-4" src={Me} style={styles.profileImg} />
          <p className="lead my-3">
            I am a full stack develpor, from San Francisco. 😎
          </p>
          <p className="lead mb-0">
            <a href="/aboutme" className="text-body-emphasis fw-bold">
              Continue reading about me...
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
export default Body;
*/
