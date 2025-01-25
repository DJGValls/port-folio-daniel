import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import loginImage from "../../../../public/vilacasas/login.png";
import { useTranslations } from "next-intl";

export const VilacasasProject = () => {
    const t = useTranslations("projects.vilacasas");
    const itemData = [
        {
            id: 1,
            img: loginImage,
            title: "Proyecto 1",
            rows: 3,
            cols: 4,
        },
    ];
    return (
        <>
            <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                    <h5 className="text-white font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>{t("title")}</span>
                        {/* <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" /> */}
                    </h5>
                    <div className="mt-2 space-y-6">
                        <p className="text-white">{t("text1")}</p>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle1")}</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t("subTitle1-point1")}</li>
                                <li>{t("subTitle1-point2")}</li>
                                <li>{t("subTitle1-point3")}</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle2")}</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t("subTitle2-point1")}</li>
                                <li>{t("subTitle2-point2")}</li>
                                <li>{t("subTitle2-point3")}</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle3")}</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t("subTitle3-point1")}</li>
                                <li>{t("subTitle3-point2")}</li>
                                <li>{t("subTitle3-point3")}</li>
                                <li>{t("subTitle3-point4")}</li>
                                <li>{t("subTitle3-point5")}</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle4")}</h6>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "MUI",
                                    "Tailwind",
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
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </>
    );
};
