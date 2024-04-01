import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
