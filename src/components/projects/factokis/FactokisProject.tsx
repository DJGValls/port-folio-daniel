import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

export const FactokisProject = () => {
    const itemData = [
        {
            img: "/factokis/dashboard.png",
            title: "Dashboard",
            rows: 2,
            cols: 4,
        },
        {
            img: "/factokis/facturas.png",
            title: "Facturas",
            rows: 1,
            cols: 2,
        },
        {
            img: "/factokis/contabilidad.png",
            title: "Contabilidad",
            rows: 1,
            cols: 2,
        },
        {
            img: "/factokis/contactos.png",
            title: "Contactos",
            rows: 2,
            cols: 3,
        },
        {
            img: "/factokis/configuracion.png",
            title: "Configuración",
            rows: 2,
            cols: 1,
        },
    ];

    return (
        <>
            <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                    <h5 className="text-bunker-200 font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>Factokis - Sistema de Facturación</span>
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
                            <h3 className="text-lg text-bunker-300">Plataforma Integral de Gestión Empresarial</h3>
                        </div>

                        <div className="space-y-4">
                            <p>
                                Participé activamente en el desarrollo de esta aplicación mientras trabajaba en
                                Winworld. Factokis es una aplicación web moderna desarrollada con Next.js y TypeScript
                                que simplifica la gestión empresarial. Esta solución integral permite a las empresas
                                gestionar eficientemente sus facturas, contactos y finanzas en una única plataforma.
                            </p>

                            <h6 className="font-medium text-yellow-300/80">Características Principales:</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Gestión completa de contactos y empresas</li>
                                <li>Sistema avanzado de facturación</li>
                                <li>Control de presupuestos y abonos</li>
                                <li>Gestión de impuestos (IVA e IRPF)</li>
                                <li>Soporte multiidioma (español e inglés)</li>
                            </ul>

                            <h6 className="font-medium text-yellow-300/80">Aspectos Técnicos:</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Arquitectura moderna con Next.js y TypeScript</li>
                                <li>Interfaz de usuario con NextUI</li>
                                <li>Gestión de estado con Redux</li>
                                <li>Sistema de validaciones con Zod</li>
                                <li>Traducciones integradas con next-intl</li>
                            </ul>
                        </div>

                        <div>
                        <h6 className="font-medium text-yellow-300/80">Tecnologías utilizadas:</h6>
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
