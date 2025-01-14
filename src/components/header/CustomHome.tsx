import Image from "next/image";
import React from "react";
import CustomChipLinkButton from "../buttons/CustomChipLinkButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useTranslations } from "next-intl";

function CustomHome() {
    const t = useTranslations('portfolio');
    return (
            <div className="max-w-xl lg:max-w-3xl px-4 container mx-auto flex flex-col  justify-center items-center absolute inset-0 text-center">
                <Image
                    src="/me.jpeg"
                    alt="logo"
                    width={300}
                    height={300}
                    className="rounded-full mb-8 h-48 lg:h-56 w-56"
                />

                <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-bunker-100">
                    Daniel Jiménez
                </h1>

                <p className="text-bunker-300 text-lg md:text-xl lg:text-2xl">
                    Desarrollador Web Full-Stack con
                    <span className="text-yellow-300/80 "> +3 años de experiencia.</span> Amante de la programación y el
                    aprendizaje.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    <CustomChipLinkButton href="https://github.com/DJGValls" label="GitHub" icon={GitHubIcon} />
                    <CustomChipLinkButton
                        href="https://www.linkedin.com/in/daniel-j-g"
                        label="LinkedIn"
                        icon={LinkedInIcon}
                    />
                    <CustomChipLinkButton href="/resume.pdf" label="Curriculum" icon={ListAltIcon} />
                </div>
            </div>
    );
}

export default CustomHome;
