import "./image-hero.scss";
import Image from "next/image";

const images = [
  {
    src: "/assets/images/libros/colores.jpg",
    alt: "Description 1",
    link: "colores-de-la-memoria",
  },
  {
    src: "/assets/images/libros/griot.jpg",
    alt: "Description 2",
    link: "mi-amigo-el-griot-contador-de-historias",
  },
  {
    src: "/assets/images/libros/rodin.jpg",
    alt: "Description 2",
    link: "august-rodin",
  },
  {
    src: "/assets/images/libros/catalina.jpg",
    alt: "Description 2",
    link: "catalina-de-indias",
  },
  {
    src: "/assets/images/libros/cuerpos.jpg",
    alt: "Description 2",
    link: "cuerpos-de-ebano",
  },
];

function ImageHero() {
  return (
    <div className="image-hero">
      <div className="image-gallery">
        {images.map((image, index) => (
          <a
            href={`/libros/${image.link}`}
            className="image-container"
            key={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              width={80}
              height={80}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ImageHero;
