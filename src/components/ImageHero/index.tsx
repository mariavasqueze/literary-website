import "./image-hero.scss";

const images = [
  {
    src: "/assets/images/catalina-1.png",
    alt: "Description 1",
    link: "link-to-page-1",
  },
  {
    src: "/assets/images/catalina-1.png",
    alt: "Description 2",
    link: "link-to-page-2",
  },
  {
    src: "/assets/images/catalina-1.png",
    alt: "Description 2",
    link: "link-to-page-2",
  },
  {
    src: "/assets/images/catalina-1.png",
    alt: "Description 2",
    link: "link-to-page-2",
  },
  {
    src: "/assets/images/catalina-1.png",
    alt: "Description 2",
    link: "link-to-page-2",
  },
];

function ImageHero() {
  return (
    <div className="image-hero">
      <div className="image-gallery">
        {images.map((image, index) => (
          <a href={image.link} className="image-container" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ImageHero;
