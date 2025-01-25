import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import singinImage from "../../../../public/intratimeEmpresa/singin.png";
import loginImage from "../../../../public/intratimeEmpresa/login.png";
import resetPassImage from "../../../../public/intratimeEmpresa/resetPass.png";
import clockingsImage from "../../../../public/intratimeEmpresa/clockings.png";
import employeeCalendarImage from "../../../../public/intratimeEmpresa/employeeCalendar.png";
import calendarImage from "../../../../public/intratimeEmpresa/calendar.png";
import sidevarImage from "../../../../public/intratimeEmpresa/sidevar.png";
import employeeAbsencesImage from "../../../../public/intratimeEmpresa/employeeAbsences.png";
import clockingsByemployeeImage from "../../../../public/intratimeEmpresa/clockingsByemployee.png";
import { useTranslations } from "next-intl";

export const IntratimeEmpresa = () => {
    const t = useTranslations("projects.intratimePanel");
    const itemData = [
        // primera fila
        {
            id: 1,
            img: singinImage,
            title: "Proyecto 1",
            rows: 1,
            cols: 1,
        },
        {
            id: 2,
            img: loginImage,
            title: "Proyecto 1",
            rows: 2,
            cols: 3,
        },
        {
            id: 3,
            img: resetPassImage,
            title: "Proyecto 1",
            rows: 1,
            cols: 1,
        },
        // segunda fila
        {
            id: 4,
            img: clockingsImage,
            title: "Proyecto 2",
            rows: 1,
            cols: 2,
        },
        {
            id: 5,
            img: employeeCalendarImage,
            title: "Proyecto 1",
            rows: 1,
            cols: 2,
        },
        // tercera fila
        {
            id: 6,
            img: calendarImage,
            title: "Proyecto 1",
            rows: 2,
            cols: 3,
        },
        {
            id: 7,
            img: sidevarImage,
            title: "Proyecto 1",
            rows: 2,
            cols: 1,
        },
        // cuarta fila
        {
            id: 8,
            img: employeeAbsencesImage,
            title: "Proyecto 1",
            rows: 2,
            cols: 2,
        },
        {
            id: 9,
            img: clockingsByemployeeImage,
            title: "Proyecto 1",
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
                            key="intratimeEmpleado"
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
                            <h3 className="text-lg text-white">{t("subTitle1")}</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-white">{t("text1")}</p>
                            <p className="text-white">{t("text2")}</p>
                            <ul className="list-disc pl-6 space-y-2 text-white">
                                <li>{t("subTitle1-point1")}</li>
                                <li>{t("subTitle1-point2")}</li>
                                <li>{t("subTitle1-point3")}</li>
                                <li>{t("subTitle1-point4")}</li>
                                <li>{t("subTitle1-point5")}</li>
                                <li>{t("subTitle1-point6")}</li>
                                <li>{t("subTitle1-point7")}</li>
                            </ul>
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle2")}</h6>
                            <ul className="list-disc pl-6 space-y-2 text-white">
                                <li>{t("subTitle2-point1")}</li>
                                <li>{t("subTitle2-point2")}</li>
                                <li>{t("subTitle2-point3")}</li>
                                <li>{t("subTitle2-point4")}</li>
                                <li>{t("subTitle2-point5")}</li>
                                <li>{t("subTitle2-point6")}</li>
                            </ul>
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle3")}</h6>
                            <ul className="list-disc pl-6 space-y-2 text-white">
                                <li>{t("subTitle3-point1")}</li>
                                <li>{t("subTitle3-point2")}</li>
                                <li>{t("subTitle3-point3")}</li>
                            </ul>
                            <h6 className="font-medium text-yellow-300/80">{t("subTitle4")}</h6>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "PHP",
                                    "Laravel 10",
                                    "Livewire",
                                    "Alpine.Js",
                                    "API - PHP",
                                    "API - Laravel",
                                    "DB- MySQL",
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
