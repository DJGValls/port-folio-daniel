import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

export const PortfolioProject = () => {
    const itemData = [
        {
            img: "/portfolio/home.png",
            title: "Página de inicio",
            rows: 2,
            cols: 4,
        },
        {
            img: "/portfolio/aboutme.png",
            title: "Sobre mí",
            rows: 1,
            cols: 2,
        },
        {
            img: "/portfolio/projects.png",
            title: "Proyectos",
            rows: 1,
            cols: 2,
        },
        // Añade más imágenes según necesites
    ];

    return (
        <>
            <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                    <h5 className="text-bunker-200 font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>Portfolio Personal</span>
                        <IconButton
                            href="https://tu-portfolio.dev"
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
                                Portfolio Web Personal
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <p>
                                Portfolio web desarrollado con Next.js y TypeScript, implementando un diseño moderno y responsivo.
                                Utiliza Material-UI y Tailwind CSS para la interfaz de usuario, con animaciones suaves y transiciones elegantes.
                            </p>

                            <h6 className="font-medium text-yellow-300/80">Tecnologías utilizadas:</h6>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "Material-UI",
                                    "Tailwind CSS",
                                    "React Icons",
                                    "Formspree"
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
        </>
    );
};
