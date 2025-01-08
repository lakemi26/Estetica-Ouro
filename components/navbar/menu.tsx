"use client";

import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Toggle from "./toggle";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className=" ">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={50}
        color="#664022"
        duration={0.8}
      />
      {isOpen && (
        <div className="absolute bg-begeClaro text-begeEscuro left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/sobre">Sobre</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/contato">Contato</Link>
          <div className="mt-4">
            <Toggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
