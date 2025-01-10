import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

export const IntratimeEmpleadoProject = () => {
    const itemData = [
        // primera fila
        {
            img: "/intratimeEmpleado/login.png",
            title: "Proyecto 1",
            rows: 2,
            cols: 4,
        },
        // segunda fila
        {
            img: "/intratimeEmpleado/clockings.png",
            title: "Proyecto 2",
            rows: 1,
            cols: 2,
        },
        {
            img: "/intratimeEmpleado/historic.png",
            title: "Proyecto 1",
            rows: 1,
            cols: 2,
        },
        // tercera fila
        {
            img: "/intratimeEmpleado/calendar.png",
            title: "Proyecto 1",
            rows: 2,
            cols: 3,
        },
        {
            img: "/intratimeEmpleado/calendarlenguaje.png",
            title: "Proyecto 1",
            rows: 2,
            cols: 1,
        },
    ];
    return (
        <>
            <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                <div>
                    <h5 className="text-bunker-200 font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                        <span>Intratime Empleado</span>
                        <IconButton
                            key='intratimeEmpleado'
                            href="https://intratimev3pro-panelempleado.azurewebsites.net/"
                            target="_blank"
                            sx={{
                                color: '#CBD5E1',
                                '&:hover': {
                                    color: 'var(--primary)',
                                    backgroundColor: 'transparent'
                                }
                            }}>
                            <BiLinkExternal size={24} />
                        </IconButton>
                    </h5>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg text-bunker-300">
                                Sistema de Control de Fichajes y Gestión de RRHH
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <p>
                                Desarrollé esta aplicación mientras trabajaba en Winworld. Intratime Empleado es una
                                aplicación web desarrollada con Next.js que revoluciona la gestión de recursos humanos y
                                el control de fichajes. Esta solución integral permite a los empleados gestionar su
                                jornada laboral de forma eficiente y transparente, mientras proporciona a las empresas
                                un control preciso del tiempo trabajado.
                            </p>

                            <p>
                                La aplicación destaca por su sistema de autenticación robusto con login mediante email y
                                PIN, respaldado por tokens JWT. Los empleados pueden registrar sus entradas, salidas y
                                pausas, con soporte para teletrabajo y geolocalización. Además, integra un completo
                                sistema de gestión documental para nóminas y gastos.
                            </p>

                            <p>
                                Este proyecto ha transformado la manera en que las empresas gestionan sus recursos
                                humanos, simplificando procesos administrativos y mejorando la eficiencia en el control
                                de personal. La implementación de tecnologías modernas garantiza una experiencia fluida
                                y segura para todos los usuarios.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium mb-2">Tecnologías utilizadas:</h4>
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
