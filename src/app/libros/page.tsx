"use client";

import Layout from "@/components/Layout/Layout";
import "./libros.scss";
import { books } from "@/components/LibrosComp/books";
import { useRouter } from "next/navigation";
import { BookItemProps } from "@/components/LibrosComp";

function BooksPage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="all-books-page">
        <div className="top-banner">
          <div className="background-picture">
            <Image
              className="book-img"
              src={`/assets/images/libros/minutauro.jpg`}
              alt="book cover"
              width={500}
              height={750}
            />
          </div>
          <div className="content-wrap">
            <Image
              className="book-img"
              src={`/assets/images/libros/minutauro.jpg`}
              alt="book cover"
              width={260}
              height={365.82}
            />
            <div className="banner-content">
              <p className="banner-title">Minutauro</p>
              <p className="banner-desc">
                he point of using Lorem Ipsum hiter of that using making it look
                like others readable will get end. he point of using Lorem Ipsum
                hiter of that using making it look like others readable will get
                end.
              </p>
              <Link className="button bubble-button" href={"libros/minutauro"}>
                <div className="btn btn-three">
                  <span>VER MÁS</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="all-books-wrap">
          {books.map((book, index) => {
            return <BookItem key={index} book={book} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

import Image from "next/image";
import Link from "next/link";

function BookItem({ book }: BookItemProps) {
  const router = useRouter();
  return (
    <div className="book-item">
      <div
        className="book-img-wrap"
        onClick={() => router.push(`libros/${book.id}`)}
      >
        <Image
          className="book-img"
          src={`/assets/images/libros/${book.img}`}
          alt="book cover"
          width={277.5}
          height={365.82}
        />
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-desc">{book.description}</p>
        <div className="category-wrap">
          <div className="dot" />
          <p className="name">{book.category}</p>
        </div>
      </div>
    </div>
  );
}

export default BooksPage;
