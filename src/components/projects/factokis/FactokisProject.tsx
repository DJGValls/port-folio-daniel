import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import dashboardImage from "../../../../public/factokis/dashboard.png";
import facturasImage from "../../../../public/factokis/facturas.png";
import contabilidadImage from "../../../../public/factokis/contabilidad.png";
import configuracionImage from "../../../../public/factokis/configuracion.png";
import contactosImage from "../../../../public/factokis/contactos.png";
import { useTranslations } from "next-intl";

export const FactokisProject = () => {
    const t = useTranslations("projects.factokis");
    const itemData = [
        {
            id: 1,
            img: dashboardImage,
            title: "Dashboard",
            rows: 2,
            cols: 4,
        },
        {
            id: 2,
            img: facturasImage,
            title: "Facturas",
            rows: 1,
            cols: 2,
        },
        {
            id: 3,
            img: contabilidadImage,
            title: "Contabilidad",
            rows: 1,
            cols: 2,
        },
        {
            id: 4,
            img: configuracionImage,
            title: "Configuración",
            rows: 2,
            cols: 2,
        },
        {
            id: 5,
            img: contactosImage,
            title: "Contactos",
            rows: 2,
            cols: 2,
        },
    ];

    return (
        <>
            <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                    <h5 className="text-white font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>{t("title")}</span>
                        <IconButton
                            key="factokis"
                            href="https://panelv3.intratime.es/"
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
                            <h3 className="text-lg text-white">{t("title2")}</h3>
                        </div>
                        <div className="space-y-4">
                            <p>{t("text1")}</p>
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle1")}</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t("subTitle1-point1")}</li>
                                <li>{t("subTitle1-point2")}</li>
                                <li>{t("subTitle1-point3")}</li>
                                <li>{t("subTitle1-point4")}</li>
                                <li>{t("subTitle1-point5")}</li>
                            </ul>
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle2")}</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t("subTitle2-point1")}</li>
                                <li>{t("subTitle2-point2")}</li>
                                <li>{t("subTitle2-point3")}</li>
                                <li>{t("subTitle2-point4")}</li>
                                <li>{t("subTitle2-point5")}</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle3")}</h6>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "Redux",
                                    "NextUI",
                                    "Zod",
                                    "next-intl",
                                    "API - PHP",
                                    "API - Laravel",
                                    "DB- MySQL",
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
