import Link from "next/link";
import React from "react";

function CustomNavbar() {
    return (
        <div className="fixed h-fit inset-0 z-30 px-4 mt-4">
            <div className="container max-w-lg mx-auto">
                <ul className="w-full h-10  text-bunker-200 font-medium flex text-md">
                    <li className="grow">
                        <Link
                            href="#home"
                            className="pl-2 w-full h-full flex items-center justify-center hover:text-yellow-300/80">
                            Inicio
                        </Link>
                    </li>
                    <li className="grow">
                        <Link
                            href="#about"
                            className="w-full h-full flex items-center justify-center hover:text-yellow-300/80">
                            Sobre mi
                        </Link>
                    </li>
                    <li className="grow">
                        <Link
                            href="#projects"
                            className="w-full h-full flex items-center justify-center hover:text-yellow-300/80">
                            Proyectos
                        </Link>
                    </li>
                    <li className="grow">
                        <Link
                            href="#contact"
                            className="pr-2 w-full h-full flex items-center justify-center hover:text-yellow-300/80">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CustomNavbar;
