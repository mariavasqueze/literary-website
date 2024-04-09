"use client";

import "./libros-comp.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

import { books } from "./books";

type Book = {
  id: number;
  img: string;
  title: string;
  shortDesc: string;
  description: string;
  link: string;
};

interface BookItemProps {
  book: Book;
}

function LibrosComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="libros-comp">
      <h3 className="blue-title">Libros</h3>
      <button className="yellow-btn">
        Ver Más{" "}
        <Image
          src="/assets/images/arrow-thin.svg"
          alt={""}
          width={30}
          height={30}
        />
      </button>
      <Slider {...settings}>
        {books.map((book, index) => {
          return <BookItem book={book} key={index} />;
        })}
      </Slider>
    </div>
  );
}

export default LibrosComponent;

function BookItem({ book }: BookItemProps) {
  return (
    <div className="book-wrapper">
      <Image
        className="book-img"
        src={`/assets/images/libros/${book.img}`}
        alt={book.title}
        width={200}
        height={300}
      />
      <h4 className="book-title">{book.title}</h4>
      <p className="book-desc">{book.shortDesc}</p>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={() => onClick()}>
      <Image
        src="/assets/images/arrow-right.svg"
        alt="Next"
        width={50}
        height={50}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={() => onClick()}>
      <Image
        src="/assets/images/arrow-left.svg"
        alt="Next"
        width={50}
        height={50}
      />
    </div>
  );
}
