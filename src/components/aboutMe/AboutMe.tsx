import React from "react";
import SkillsButton from "../buttons/SkillsButton";
import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { CustomCard } from "../cards/CustomCard";

function AboutMe() {
    // const lang = params.lang || 'en';
    const lang = "en";
    return (
        <CustomCard title="SOBRE MI" id="about">
            <div className="w-full lg:w-1/2 lg:pl-4 lg:pr-12">
                <div className="mt-8 space-y-6">
                    <p>
                        Soy un desarrollador web full-stack apasionado por crear soluciones web efectivas y accesibles.
                        Me especializo en tecnologías como HTML, CSS, JavaScript, TypeScript, Php, React, Next.js, React
                        Native, Laravel, Blade, Livewire y AlpineJs, trabajando tanto en el front-end como en el
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
                            className="text-red-300/80 decoration-red-300 decoration-wavy hover:underline">
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
                <h3 className="text-bunker-200 font-medium text-2xl mt-8 lg:mt-0">HABILIDADES</h3>
                <div className="mt-8 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-6 group/list">
                    <SkillsButton icon={AiFillHtml5 as IconType} name="HTML" />
                    <SkillsButton icon={FaCss3Alt} name="CSS" />
                    <SkillsButton icon={BiLogoSass} name="Sass" />
                    <SkillsButton icon={BiLogoJavascript} name="JavaScript" />
                    <SkillsButton icon={BiLogoTypescript} name="TypeScript" />
                    <SkillsButton icon={BiLogoReact} name="React" />
                    <SkillsButton icon={SiNextdotjs} name="Next.js" />
                </div>
            </div>
        </CustomCard>
    );
}

export default AboutMe;
