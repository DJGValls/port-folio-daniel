import React from "react";
import SkillsButton from "../buttons/SkillsButton";
import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

function AboutMe() {
    return (
        <div id="about" className="h-screen flex items-center justify-center">
            <div>
                <h3 className="text-5xl font-bold text-yellow-300/80 px-4">SOBRE MI</h3>
                <div id="about" className="container mx-auto mt-5 px-4">
                    <div className="bg-bunker-950/50 px-6 lg:px-10 py-16 rounded-md ring-1 ring-bunker-500/20 flex flex-wrap">
                        <div className="w-full lg:w-1/2 lg:pl-4 lg:pr-12">
                            <div className="mt-8 space-y-6">
                                <p>
                                    Como desarrollador web full-stack, mi historial demuestra el desarrollo de
                                    aplicaciones web de alta calidad que satisfacen las necesidades de los clientes.
                                    Poseo competencia en diversas tecnologías, como HTML, CSS, JavaScript, TypeScript,
                                    React y Next.js, y experiencia en front-end y back-end.
                                </p>
                                <p>
                                    En{" "}
                                    <a
                                        href="#projects"
                                        className="text-red-300/80 decoration-red-300 decoration-wavy hover:underline ">
                                        proyectos anteriores
                                    </a>
                                    , se ha evidenciado mi habilidad para crear interfaces de usuario intuitivas y
                                    diseños atractivos que mejoran la experiencia del usuario. También he construido
                                    arquitecturas de back-end sólidas utilizando Node.js, Express y GraphQL,
                                    garantizando la seguridad y escalabilidad de las aplicaciones.
                                </p>
                                <p>
                                    Soy un profesional altamente motivado y orientado a los detalles, comprometido con
                                    estar al tanto de las últimas tendencias y mejores prácticas de la industria. Busco
                                    constantemente nuevos desafíos y oportunidades para expandir mis habilidades. Confío
                                    en que mi experiencia y conocimientos me convierten en un activo valioso para
                                    cualquier equipo.
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
