import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import loginImage from "/public/intratimeEmpleado/login.png";
import clockingsImage from "../../../../public/intratimeEmpleado/clockings.png";
import historicImage from "../../../../public/intratimeEmpleado/historic.png";
import calendarImage from "../../../../public/intratimeEmpleado/calendar.png";
import calendarlenguajeImage from "../../../../public/intratimeEmpleado/calendarlenguaje.png";
import { useTranslations } from "next-intl";

export const IntratimeEmpleadoProject = () => {
    const t = useTranslations("projects.intratimeEmployee");
    const itemData = [
        // primera fila
        {
            id: 1,
            img: loginImage,
            title: "Login",
            rows: 2,
            cols: 4,
        },
        // segunda fila
        {
            id: 2,
            img: clockingsImage,
            title: "Fichajes",
            rows: 1,
            cols: 2,
        },
        {
            id: 3,
            img: historicImage,
            title: "Histórico",
            rows: 1,
            cols: 2,
        },
        // tercera fila
        {
            id: 4,
            img: calendarImage,
            title: "Calendario",
            rows: 2,
            cols: 3,
        },
        {
            id: 5,
            img: calendarlenguajeImage,
            title: "Idiomas",
            rows: 2,
            cols: 1,
        },
    ];
    return (
        <>
            <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                    <h5 className="text-white font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>{t("title")}</span>
                        <IconButton
                            key="intratimeEmpleado"
                            href="https://intratimev3pro-panelempleado.azurewebsites.net/"
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
                            <h3 className="text-lg text-white">{t("subTitle1")}</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-white">{t("text1")}</p>
                            <p className="text-white">{t("text2")}</p>
                            <p className="text-white">{t("text3")}</p>
                        </div>

                        <div>
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle2")}</h6>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "JWT Authentication",
                                    "Material-UI",
                                    "Geolocation API",
                                    "REST API",
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
                            <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
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
