import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

export const FutAlinerProject = () => {
    const itemData = [
        {
            img: "/futaliner/dashboard.png",
            title: "Dashboard",
            rows: 2,
            cols: 4,
        },
        {
            img: "/futaliner/teams.png",
            title: "Equipos",
            rows: 1,
            cols: 2,
        },
        {
            img: "/futaliner/players.png",
            title: "Jugadores",
            rows: 1,
            cols: 2,
        },
        {
            img: "/futaliner/matchmaker.png",
            title: "Generador",
            rows: 2,
            cols: 3,
        },
        {
            img: "/futaliner/stats.png",
            title: "Estadísticas",
            rows: 2,
            cols: 1,
        },
    ];

    return (
        <>
            <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                    <h5 className="text-bunker-200 font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>FutAliner - Gestor de Equipos de Fútbol</span>
                        <IconButton
                            href="https://futaliner.netlify.app/"
                            target="_blank"
                            sx={{
                                color: "#CBD5E1",
                                "&:hover": {
                                    color: "var(--primary)",
                                    backgroundColor: "transparent",
                                },
                            }}>
                            <BiLinkExternal size={24} />
                        </IconButton>
                    </h5>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg text-bunker-300">
                                Sistema Inteligente de Gestión de Equipos de Fútbol
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <p>
                                FutAliner es una aplicación web innovadora diseñada para revolucionar la generación de alineaciones de equipos de fútbol amateur. 
                                Desarrollada con React y Node.js, ofrece una solución integral para la organización de equipos y la generación 
                                automática de alineaciones equilibradas.
                            </p>

                            <h6 className="font-medium text-yellow-300/80">Características Principales:</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Sistema de autenticación seguro con JWT</li>
                                <li>Gestión completa de equipos y jugadores</li>
                                <li>Sistema de valoración de habilidades por categorías</li>
                                <li>Algoritmo inteligente de generación de alineaciones</li>
                                <li>Gestión de roles (capitán/jugador)</li>
                            </ul>

                            <h6 className="font-medium text-yellow-300/80">Sistema de Valoraciones:</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Evaluación de habilidades específicas</li>
                                <li>Cálculo automático de medias</li>
                                <li>Histórico de evolución del jugador</li>
                            </ul>

                            <h6 className="font-medium text-yellow-300/80">Tecnologías utilizadas:</h6>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "Node.js",
                                    "Express",
                                    "MongoDB",
                                    "JWT",
                                    "React Bootstrap",
                                    "Cloudinary"
                                ].map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-bunker-800 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 lg:mt-0 lg:w-1/2 p-2">
                <div className="rounded-xl overflow-hidden">
                    <ImageList variant="quilted" cols={4} rowHeight={121}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={121 * (item.cols || 1)}
                                    height={121 * (item.rows || 1)}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                    quality={100}
                                    priority
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </>
    );
};
