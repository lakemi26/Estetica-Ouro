import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Toggle from "./toggle";
import NavItem from "../ui/navItem";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between md:hidden">
        {/* mobile */}
        <Link href={"/"}>
          <div className="text-2xl tracking-wide text-begeEscuro">
            Estética <br /> Ouro
          </div>
        </Link>
        <Menu />
      </div>
      {/* bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="absolute ">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide text-begeEscuro">
              Estética <br /> Ouro
            </div>
          </Link>
        </div>
        {/* right */}
        <div className="m-auto flex items-center justify-between">
          <div className="text-begeEscuro flex items-center justify-center gap-8 text-xl ">
            <NavItem path="sobre" />
            <NavItem path="serviços" />
            <NavItem path="galeria" />
            <NavItem path="contato" />
          </div>
          <div className="absolute md:right-11 lg:right-15 xl:right-20">
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

//

export default Navbar;
