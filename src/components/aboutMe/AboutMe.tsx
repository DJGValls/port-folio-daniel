import React from "react";
import SkillsButton from "../buttons/SkillsButton";
import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { CustomCard } from "../cards/CustomCard";
import { SiPhp } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { SiLivewire } from "react-icons/si";
import { useTranslations } from "next-intl";

interface AboutMeProps {
    lang: string;
}

function AboutMe(props: AboutMeProps) {
    const { lang } = props;
    const t = useTranslations("aboutMe");
    return (
        <CustomCard title={t("title")} id="about">
            <div className="w-full lg:w-1/2 lg:pl-4 lg:pr-12">
                <div className="mt-8 space-y-6">
                    <p>{t("text1")}</p>
                    <p>{t("text2")}</p>
                    <p>
                        <a
                            href={`/${lang}/projects`}
                            className="text-yellow-300/80 hover:text-yellow-300  decoration-2 underline-offset-4 transition-colors duration-300 hover:drop-shadow-[0_0_0.3rem_#fde047]">
                            {t("linkText")}
                        </a>{" "}
                        {t("text3")}
                    </p>
                    <p>{t("text4")}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-4 lg:pl-12">
                <div className="mt-8 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-6 group/list">
                    <SkillsButton icon={BiLogoTypescript} name="TypeScript" />
                    <SkillsButton icon={SiNextdotjs} name="Next.js" />
                    <SkillsButton icon={FaNodeJs} name="Node.js" />

                    <SkillsButton icon={BiLogoJavascript} name="JavaScript" />
                    <SkillsButton icon={BiLogoReact} name="React" />
                    <SkillsButton icon={TbBrandReactNative} name="React Native" />

                    <SkillsButton icon={SiPhp} name="PHP" />
                    <SkillsButton icon={SiLaravel} name="Laravel" />
                    <SkillsButton icon={SiLivewire} name="Livewire" />

                    <SkillsButton icon={AiFillHtml5 as IconType} name="HTML" />
                    <SkillsButton icon={FaCss3Alt} name="CSS" />
                    <SkillsButton icon={BiLogoSass} name="Sass" />
                </div>
            </div>
        </CustomCard>
    );
}

export default AboutMe;
