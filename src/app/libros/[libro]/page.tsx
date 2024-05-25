"use client";

import "./libro.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Layout from "@/components/Layout/Layout";
import LibrosComponent from "@/components/LibrosComp";

import { books } from "@/components/LibrosComp/books";

function BookPage() {
  const pathname = usePathname();

  const libro = pathname.replace("/libros/", "");
  const book = books.find((book) => book.id === libro);

  const EMAIL = process.env.EMAIL;
  const SUBJECT = `Pedido de ${book?.title} desde tu pagina web`;
  const BODY = `Hola Carlos, me gustaría comprar tu libro, ${book?.title} y obtener más información sobre el proceso`;

  return (
    <Layout type="blue">
      <div className="book-page-wrap">
        <section className="top-section">
          <div className="book-info">
            <h3 className="book-title">{book?.title}</h3>
            {book?.award && <p className="award-text">{book?.award}</p>}
            <p className="book-desc">{book?.description}</p>
            <Link
              className="button bubble-button"
              href={
                book?.sellOnContact
                  ? `mailto:${EMAIL}?subject=${encodeURIComponent(
                      SUBJECT
                    )}&body=${encodeURIComponent(BODY)}`
                  : book?.link
                  ? book.link
                  : ""
              }
              target="_blank"
            >
              <div className="btn btn-three">
                <span>
                  {book?.sellOnContact ? "Contáctanos para obtener" : "COMPRAR"}
                </span>
              </div>
            </Link>

            <div className="yellow-divider full-width" />
            <div className="details-section">
              {book?.details &&
                book.details.map((detail, index) => {
                  return (
                    <div key={index} className="details-item">
                      <p className="name">{detail.type}:</p>
                      <p className="value">{detail.content}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="book-img-wrap">
            <Image
              className="cover-img"
              src={`/assets/images/libros/${book?.img}`}
              alt="book cover"
              width={200}
              height={300}
            />
          </div>
        </section>
        <LibrosComponent />
      </div>
    </Layout>
  );
}

export default BookPage;
