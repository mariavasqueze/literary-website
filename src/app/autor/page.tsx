import "./autor.scss";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

import LibrosComponent from "@/components/LibrosComp";
import Layout from "@/components/Layout/Layout";

function AutorPage() {
  const EMAIL = "vasquezzawadzkicarlos@gmail.com";
  const SUBJECT = "Contacto desde tu pagina web";
  const BODY = "Hola Carlos, me gustaría contactarte para...";

  return (
    <Layout type="blue">
      <div className="autor-page">
        <div className="title-section">
          <h3 className="articulos-title">Sobre el Autor</h3>
          <div className="yellow-divider" />
          <p className="articulos-desc">Detalles biográficos del autor</p>
        </div>

        <div className="autor-content">
          <Image
            src="/assets/images/escritor.png"
            className="main-img"
            alt="Escribiendo"
            width={800}
            height={600}
          />{" "}
          <div className="social-media">
            <SocialIcon
              url="https://www.instagram.com/carlos_vasquez_zawadzki?igsh=MTc4dTVyMGE3bTM2cA=="
              className="social-icon"
            />
            <SocialIcon
              url="https://www.facebook.com/share/whSgGA2Vmp3paxrb/?mibextid=LQQJ4d"
              className="social-icon"
            />
            <SocialIcon
              url={`mailto:${process.env.EMAIL}`}
              className="social-icon"
            />
          </div>
          <div className="autor-desc">
            <h3 className="autor-name">Nombre del Autor</h3>
            <p className="normal-text">
              <span className="square" />
              Tumaco (Colombia). Estudios de Literatura en Universidades del
              Valle, Toulouse y Bordeaux. Investigador y académico. Periodista.
              Editor. Traductor.
            </p>
            <p className="normal-text">
              <span className="square" />
              Intervenciones/ invitaciones en Universidades de Francia, Cuba,
              Italia, U.S.A., España, Canadá, Ecuador, Polonia, Egipto, Túnez,
              México y Republica Checa.
            </p>
            <p className="normal-text">
              <span className="square" />
              Publicaciones, entre otras: Diario para Beatriz, La oreja erótica
              de Van Gogh, Tercer laberinto –cartografías poéticas,
              Liberaciones, Sol partido en la naranja, Tiresias y su cayado y
              otros poemas, Rotaciones, Amares, Percusiones (Premio
              Internacional de literatura ‘Gustavo Adolfo Bécquer’).
            </p>
            <p className="normal-text">
              <span className="square" />
              Ensayos de teoría literaria, El reino de los orígenes,
              Cartografías culturales, Colores de la memoria – 50 poetas Caribe
              y Pacífico, Peregrino de luz y mar – Antología de Guillemo
              Payán-Archer, Escritura de luz –Vida y obra de Bella Clara Ventura
              (ensayos).
            </p>
            <p className="normal-text">
              <span className="square" />
              Estanislao Zawadzki, Auguste Rodin, pensar con las manos
              (biografías).
            </p>
            <p className="normal-text">
              <span className="square" />
              Una tarde impura de verano, Cuerpos de ébano, Un hombre milenario,
              Puerto azul, Bocas de agua y fuego (narraciones).
            </p>
            <p className="normal-text">
              <span className="square" />
              La abuela perdió un recuerdo, Rafico y su potrillo de mar, La
              línea soñada del horizonte, Mi amigo el griot, cuenta historias,
              El conejo blanco de Santi, Travesuras de Cósimo (relatos para
              jóvenes).
            </p>
            <p className="normal-text">
              <span className="square" />
              Director, editor de revistas: Poligramas, Caliartes, Plumadas,
              Ecos.
            </p>
            <p className="normal-text">
              <span className="square" />
              Jurado en concursos literarios a niveles nacional e internacional.
            </p>
            <p className="normal-text">
              <span className="square" />
              Trabajos suyos han sido traducidos al inglés, italiano, francés,
              hebreo, portugués, polaco, griego y lituano. Premios en Cuba,
              España y Colombia.
            </p>
            <p className="normal-text">
              <span className="square" />
              Presidente del PEN Colombia de escritores.
            </p>
          </div>
          <Link
            className="bubble-button"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(
              SUBJECT
            )}&body=${encodeURIComponent(BODY)}`}
          >
            <div className="btn btn-three">
              <span>CONTACTAR</span>
            </div>
          </Link>
        </div>
        <LibrosComponent />
      </div>
    </Layout>
  );
}

export default AutorPage;
