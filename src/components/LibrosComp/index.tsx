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
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="libros-comp">
      <h3 className="blue-title">Libros</h3>
      <button className="">
        Ver Más <img src="/assets/images/arrow-thin.svg" />
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
        src={`/assets/images/${book.img}`}
        alt={book.title}
        width={200}
        height={300}
      />
      <h4>{book.title}</h4>
      <p>{book.shortDesc}</p>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div>
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
  const { className, style, onClick } = props;
  return (
    <div>
      <Image
        src="/assets/images/arrow-left.svg"
        alt="Next"
        width={50}
        height={50}
      />
    </div>
  );
}
