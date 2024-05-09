"use client";

import { useRouter } from "next/navigation";
import "./navbar.scss";
import Image from "next/image";

interface NavBarProps {
  type?: "blue";
}

function NavBar({ type }: NavBarProps) {
  const router = useRouter();
  return (
    <nav className={`navbar ${type ? "blue-nav" : ""}`}>
      <Image
        src="/assets/images/mainLogo.svg"
        className={`logo ${type ? "blue-logo" : ""}`}
        alt="Logo"
        width={80}
        height={80}
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="right-side">
        <a className="nav-link" href="/libros">
          Libros
        </a>
        <a className="nav-link" href="/autor">
          Autor
        </a>
        <a className="nav-link" href="/blog">
          Blog
        </a>
        <a className="nav-link" href="/contact">
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
