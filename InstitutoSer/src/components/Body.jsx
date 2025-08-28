import Grp from "../assets/images/Grupo.jpeg";
import event from "../assets/images/event.jpg";
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
    flexWrap: "wrap", // lets them stack on small screens
  },
  title: {
    marginLeft: "100px",
    padding: 50,
    whitespace: "nowrap",
    textoverflow: "ellipsis",
  },
};

function Body() {
  return (
    <div>
      {/* 📱 Mobile-specific overrides */}
      <style>
        {`
          @media (max-width: 768px) {
            img[alt="Grp"] {
              width: 100% !important;
              height: auto !important;
            }
            img[alt="Event"] {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
            }
            .row.featurette {
              flex-direction: column !important;
              text-align: center;
            }
            .w3-container {
              padding: 16px !important;
            }
          }
        `}
      </style>

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
              <img style={styles.pic} src={Grp} alt="Grp" className="" />
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
              <h3>Nuestro correo electrónico es</h3>
              <a href="mailto:info@institutoserinc.com">
                info@institutoserinc.com
              </a>
              <h3>Direction</h3>
              <a
                href="https://maps.app.goo.gl/YdScaDwzbCG2vgwKA"
                rel="noreferrer"
              >
                3830 Pacheco Blvd., Suite C Martinez, CA, United States,
                California 94553
              </a>
            </section>
            <section className="contact">
              <h2>Directora General</h2>
              <h3>Claudia Avalos</h3>
              <a href="tel:+14082066337">(408) 206-6337</a>
            </section>
            <section className="contact">
              <h2>Directora de Marketing</h2>
              <h3>Johanna Penuela</h3>
              <a href="tel:+19257050461">(925)705-0461</a>
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
