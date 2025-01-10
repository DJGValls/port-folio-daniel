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



function AboutMe() {
    // const lang = params.lang || 'en';
    const lang = "en";
    return (
        <CustomCard title="SOBRE MI" id="about">
            <div className="w-full lg:w-1/2 lg:pl-4 lg:pr-12">
                <div className="mt-8 space-y-6">
                    <p>
                        Soy un desarrollador web full-stack apasionado por crear soluciones web efectivas y accesibles.
                        Me especializo en tecnologías como HTML, CSS, JavaScript, TypeScript, Php, React, Next.js, Laravel, Blade, Livewire, AlpineJs, Tailwind, Bootstrap, trabajando tanto en el front-end como en el
                        back-end para desarrollar aplicaciones completas.
                    </p>
                    <p>
                        Mi experiencia no se limita solo a la web; también desarrollo aplicaciones móviles
                        multiplataforma utilizando React Native, lo que me permite crear soluciones que funcionan tanto
                        en iOS como en Android manteniendo una base de código única y eficiente.
                    </p>
                    <p>
                        En{" "}
                        <a
                            href={`/${lang}/projects`}
                            className="text-yellow-300/80 hover:text-yellow-300  decoration-2 underline-offset-4 transition-colors duration-300 hover:drop-shadow-[0_0_0.3rem_#fde047]">
                            mis proyectos
                        </a>{" "}
                        podrás encontrar ejemplos de interfaces pensadas para el usuario, donde combino diseño y
                        funcionalidad. En el lado del servidor, trabajo con Node.js, Express, Php y Laravel, enfocándome
                        en crear aplicaciones seguras y mantenibles.
                    </p>
                    <p>
                        Me encanta aprender y mantenerme al día con las nuevas tecnologías y mejores prácticas del
                        desarrollo web y móvil. Disfruto colaborando en equipo y enfrentando nuevos retos que me
                        permitan seguir creciendo como desarrollador. Siempre busco aportar soluciones prácticas y
                        eficientes en cada proyecto.
                    </p>
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
