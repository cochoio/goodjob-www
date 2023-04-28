import { GlobalStyle } from "@/styles/GlobalStyle";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Parameter = {
  children: React.ReactNode;
};

export default function Layout({ children }: Parameter) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
