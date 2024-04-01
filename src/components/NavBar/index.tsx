"use client";

import { useRouter } from "next/navigation";
import "./navbar.scss";
import Image from "next/image";

function NavBar() {
  const router = useRouter();
  return (
    <nav className="navbar">
      <Image
        src="/assets/images/mainLogo.svg"
        className="logo"
        alt="Logo"
        width={80}
        height={80}
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="right-side">
        <a href="/libros">Libros</a>
        <a href="/autor">Autor</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contacto</a>
      </div>
    </nav>
  );
}

export default NavBar;
