"use client";
import Image from "next/image";
import React from "react";
import CustomChipLinkButton from "../buttons/CustomChipLinkButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useTranslations } from "next-intl";
import meImage from "/public/me.jpeg";

function CustomHome() {
    const t = useTranslations(`home`);
    return (
        <div className="max-w-xl lg:max-w-3xl px-4 container mx-auto flex flex-col  justify-center items-center absolute inset-0 text-center">
            <Image
                priority={true}
                quality={100}
                draggable={false}
                src={meImage}
                alt="logo"
                width={300}
                height={300}
                className="image-container-home rounded-full mb-8 h-48 w-48 lg:h-64 lg:w-64 md:h-52 md:w-52 object-cover"
                onError={(e) => console.error("Error loading image:", e)}
            />
            <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Daniel Jiménez</h1>

            <p className="text-white text-lg md:text-xl lg:text-2xl">
                {t("textInfoPosition")}
                <span className="text-yellow-300/80 "> {t("textInfoExperience")}</span> {t("textInfoResume")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <CustomChipLinkButton href="https://github.com/DJGValls" label="GitHub" icon={GitHubIcon} />
                <CustomChipLinkButton
                    href="https://www.linkedin.com/in/daniel-j-g"
                    label="LinkedIn"
                    icon={LinkedInIcon}
                />
                <CustomChipLinkButton href="/CV-Daniel-Jimenez-Gallego-2024.pdf" label="Curriculum" icon={ListAltIcon} />
            </div>
        </div>
    );
}

export default CustomHome;
