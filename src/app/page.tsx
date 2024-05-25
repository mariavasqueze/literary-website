"use client";

import "../styles/home-page.scss";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/navigation";
import { Cinzel_Decorative } from "next/font/google";

import ImageHero from "@/components/ImageHero";
import LibrosComponent from "@/components/LibrosComp";
import BlogComponent from "@/components/BlogComp";
import CarouselTop from "@/components/CarouselTop";
import Suscribete from "@/components/Suscribete";

import Image from "next/image";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal"],
});

export default function Home() {
  const router = useRouter();

  const handleLeerMasClick = () => {
    router.push("/autor");
  };
  return (
    <Layout>
      <ImageHero />
      <CarouselTop />
      <section className="author-name">
        <p className={`${cinzel.className} name`}>Carlos Vasquez-Zawadzki</p>
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
            Tumaco (Colombia). Estudios de Literatura en Universidades del
            Valle, Toulouse y Bordeaux. Investigador y académico. Periodista.
            Editor. Traductor. Intervenciones/ invitaciones en Universidades de
            Francia, Cuba, Italia, U.S.A., España, Canadá, Ecuador, Polonia,
            Egipto, Túnez, México y Republica Checa...{" "}
            <span className="leer-mas" onClick={handleLeerMasClick}>
              Leer Más
            </span>
          </p>
          <div className="metrics">
            <div className="metric">
              <p className="number">50</p>
              <p className="desc">Libros Publicados</p>
            </div>
            <div className="vertical-divider" />
            <div className="metric">
              <p className="number">10</p>
              <p className="desc">Premios Literarios</p>
            </div>
            <div className="metric">
              <p className="number">1000</p>
              <p className="desc">Mundos Creados</p>
            </div>
          </div>
        </div>
      </section>
      <LibrosComponent />
      {/* <section className="contacto">
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
      </section> */}
      <BlogComponent />
      <Suscribete />
    </Layout>
  );
}
