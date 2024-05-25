"use client";

import "./carousel-top.scss";

import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";
import { books } from "../LibrosComp/books";
import { BookItemProps } from "../LibrosComp";

function CarouselTop() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-top-wrap">
      <Slider {...settings}>
        {books.map((book, index) => {
          return <BookCarouselItem book={book} key={index} />;
        })}
      </Slider>
    </div>
  );
}

function BookCarouselItem({ book }: BookItemProps) {
  const router = useRouter();
  return (
    <div
      className="book-carousel-item"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/assets/images/libros/${book.img})`,
      }}
    >
      <Image
        src={`/assets/images/libros/${book.img}`}
        alt={book.title}
        className="item-main-img"
        width={200}
        height={200}
        onClick={() => {
          router.push(`/libros/${book.id}`);
        }}
      />
    </div>
  );
}

export default CarouselTop;
