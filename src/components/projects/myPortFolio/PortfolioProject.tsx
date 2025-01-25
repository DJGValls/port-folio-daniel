import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import homeImage from "../../../../public/portfolio/home.png";
import aboutMeImage from "../../../../public/portfolio/aboutMe.png";
import contactImage from "../../../../public/portfolio/contact.png";
import { useTranslations } from "next-intl";

export const PortfolioProject = () => {
    const t = useTranslations("projects.portfolioPersonal");
    const itemData = [
        {
            id: 1,
            img: homeImage,
            title: "Página de inicio",
            rows: 3,
            cols: 4,
        },
        {
            id: 2,
            img: aboutMeImage,
            title: "Sobre mí",
            rows: 1,
            cols: 2,
        },
        {
            id: 3,
            img: contactImage,
            title: "contacto",
            rows: 1,
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
                        <div className="space-y-4 mt-4">
                            <p className="text-white">{t("text1")}</p>

                            <h6 className="font-medium text-yellow-300/80">{t("subTitle1")}</h6>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "Material-UI",
                                    "Tailwind CSS",
                                    "React Icons",
                                    "Formspree",
                                ].map((tech, index) => (
                                    <span key={index} className="px-3 py-1 text-white rounded-full text-sm">
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
        </>
    );
};
