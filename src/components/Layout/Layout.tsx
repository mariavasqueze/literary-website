import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Layout({
  type,
  children,
}: {
  type?: "blue";
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar type={type} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
