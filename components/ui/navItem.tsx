import Link from "next/link";
import React from "react";

const NavItem = ({ path }: { path: string }) => {
  return (
    <Link className="capitalize relative group" href={`/${path.toLowerCase()}`}>
      {path}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-begeEscuro dark:bg-begeClaro transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </Link>
  );
};

export default NavItem;

//
