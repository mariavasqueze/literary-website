import "../styles/home-page.scss";
import Layout from "@/components/Layout/Layout";
import { Cinzel_Decorative } from "next/font/google";
import ImageHero from "@/components/ImageHero";
import LibrosComponent from "@/components/LibrosComp";
import BlogComponent from "@/components/BlogComp";

import Image from "next/image";
import Suscribete from "@/components/Suscribete";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal"],
});

export default function Home() {
  return (
    <Layout>
      <ImageHero />
      <section className="author-name">
        <p className={`${cinzel.className} name`}>Carlos Vasquez-Zawadski</p>
      </section>
      <section className="escribiendo">
        <Image
          src="/assets/images/escritor.png"
          className="main-img"
          alt="Escribiendo"
          width={800}
          height={600}
        />
        <div className="right-content">
          <p className="blue-title">Escribiendo con Carlos</p>
          <div className="yellow-divider" />
          <p className="grey-desc">
            All the Lorem Ipsum generators on the Internet tend to repeated
            predefined chunks as necessary, making this the first true value
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </p>
          <div className="metrics">
            <div className="metric">
              <p className="number">42</p>
              <p className="desc">Libros Publicados</p>
            </div>
            <div className="vertical-divider" />
            <div className="metric">
              <p className="number">31</p>
              <p className="desc">Premios Literarios</p>
            </div>
            <div className="metric">
              <p className="number">101</p>
              <p className="desc">Mundos Creados</p>
            </div>
          </div>
        </div>
      </section>
      <LibrosComponent />
      <section className="contacto">
        <Image
          src="/assets/images/reading-graphic.png"
          className="reading-img"
          alt="Contacto"
          width={800}
          height={600}
        />
        <div className="contacto-info">
          <p className="contacto-title">Ponte en Contacto</p>
          <div className="yellow-divider" />
          <p className="contacto-desc">
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </p>
          <button className="yellow-white-btn">Contactanos</button>
        </div>
      </section>
      <BlogComponent />
      <Suscribete />
    </Layout>
  );
}
