import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa";
import CustomLinkButton from "../buttons/CustomLinkButton";

function CustomHeader() {
    return (
        <header id="header" className="full-screen flex items-center">
            {/* <Navbar /> */}

            <div className="mt-14 max-w-xl lg:max-w-3xl px-4 container mx-auto flex flex-col  justify-center items-center absolute inset-0 text-center">
                <Image
                    src="/gato.jpeg"
                    alt="logo"
                    width={300}
                    height={300}
                    className="rounded-full mb-8 h-48 lg:h-60 w-auto"
                />

                <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-bunker-100">
                    Daniel Jiménez
                </h1>

                <p className="text-bunker-300 text-lg md:text-xl lg:text-2xl">
                    Desarrollador Web Full-Stack con
                    <span className="text-yellow-300/80 "> +3 años de experiencia.</span> Amante de
                    la programación y el aprendizaje.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    <CustomLinkButton href="https://github.com/DJGValls" external>
                        <AiFillGithub className="text-2xl mr-2" />
                        GitHub
                    </CustomLinkButton>

                    <CustomLinkButton href="https://www.linkedin.com/in/daniel-j-g" external>
                        <AiFillLinkedin className="text-2xl mr-2" />
                        LinkedIn
                    </CustomLinkButton>

                    <CustomLinkButton href="/resume.pdf" external>
                        <FaFilePdf className="text-2xl mr-2" />
                        Curriculum
                    </CustomLinkButton>
                </div>
            </div>
        </header>
    );
}

export default CustomHeader;
