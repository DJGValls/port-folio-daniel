import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import loginImage from '/public/vilacasas/login.png';

export const VilacasasProject = () => {
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
                    <h5 className="text-bunker-200 font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>Intratime Fundació Vilacasas</span>
                        {/* <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" /> */}
                    </h5>
                    <div className="mt-2 space-y-6">
                        <p>
                            Desarrollé esta aplicación de gestión financiera empresarial mientras trabajaba en Winworld.
                            Es una intranet completa que integra la gestión de presupuestos y tesorería, proporcionando
                            herramientas eficientes para el control financiero y la toma de decisiones. La aplicación
                            está construida con una arquitectura moderna usando Next.js y TypeScript para el frontend,
                            mientras que el backend utiliza PHP con Laravel y MySQL.
                        </p>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">Gestión Presupuestaria</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Editor de presupuestos con funcionalidad drag & drop</li>
                                <li>Organización jerárquica en tres niveles para mejor control</li>
                                <li>Sistema intuitivo de creación y edición de plantillas</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">Control Financiero</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Informes detallados en formato PDF</li>
                                <li>Dashboard de inversiones y tesorería</li>
                                <li>Sistema de exportación y distribución de informes</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">Aspectos Técnicos</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Diseño modular para fácil mantenimiento y escalabilidad</li>
                                <li>Soporte multilingüe (ES/CAT/EN)</li>
                                <li>Sistema de roles y permisos personalizado</li>
                                <li>API RESTful con autenticación basada en tokens</li>
                                <li>Generación de documentos PDF con MPdf</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h6 className="font-medium text-yellow-300/80">Tecnologías utilizadas:</h6>
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
