"use client";

import "./libros-comp.scss";

import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";
import { books } from "./books";
import Link from "next/link";

export type Book = {
  id: string;
  img: string;
  title: string;
  shortDesc: string;
  description: string;
  link: string;
  category: string;
  award?: string;
  details?: any[];
};

export interface BookItemProps {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="libros-comp">
      <h3 className="blue-title libros-title">Libros</h3>
      <Slider {...settings}>
        {books.map((book, index) => {
          return <BookItem book={book} key={index} />;
        })}
      </Slider>
      <Link href="/libros" className="right-side">
        <button>
          <span>Ver Todos</span>
        </button>
      </Link>
    </div>
  );
}

export default LibrosComponent;

function BookItem({ book }: BookItemProps) {
  const router = useRouter();
  return (
    <div
      className="book-wrapper"
      onClick={() => router.push(`/libros/${book.id}`)}
    >
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
    <div className={"arrow-next"} onClick={onClick}>
      <Image
        src="/assets/images/arrow-right.png"
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
    <div className={"arrow-prev"} onClick={onClick}>
      <Image
        src="/assets/images/arrow-right.png"
        alt="Next"
        width={50}
        height={50}
      />
    </div>
  );
}
