import { IconButton, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

export const IntratimeEmpresa = () => {
    const itemData = [
        // primera fila
        {
            img: "/intratimeEmpresa/login.png",
            title: "Proyecto 1",
            rows: 2,
            cols: 4,
        },
        // segunda fila
        {
            img: "/intratimeEmpresa/clockings.png",
            title: "Proyecto 2",
            rows: 1,
            cols: 2,
        },
        {
            img: "/intratimeEmpresa/historic.png",
            title: "Proyecto 1",
            rows: 1,
            cols: 2,
        },
        // tercera fila
        {
            img: "/intratimeEmpresa/calendar.png",
            title: "Proyecto 1",
            rows: 2,
            cols: 3,
        },
        {
            img: "/intratimeEmpresa/calendarlenguaje.png",
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
                        <span>Intratime Panel de Empresa</span>
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
                            <h3 className="text-lg text-bunker-300">
                                Sistema de Control de Fichajes y Gestión de RRHH
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <p>
                                Participé activamente en el desarrollo de esta aplicación mientras trabajaba en Winworld. Intratime Empresa es una
                                aplicación web desarrollada con Laravel que revoluciona la gestión de recursos humanos y
                                el control de fichajes desde el punto de vista empresarial. Esta solución integral
                                permite a las empresas gestionar eficientemente sus empleados, horarios, permisos y
                                generar informes detallados.
                            </p>

                            <p>
                                La versión 3 incluye una arquitectura completamente renovada utilizando Laravel como
                                framework base, implementando el patrón MVC y Livewire para componentes dinámicos. El
                                sistema está organizado en módulos que incluyen:
                            </p>

                            <ul className="list-disc pl-6 space-y-2">
                                <li>Sistema avanzado de fichajes y control horario</li>
                                <li>Gestión completa de empleados y departamentos</li>
                                <li>Calendarios laborales personalizables</li>
                                <li>Sistema de permisos y ausencias</li>
                                <li>Reportes y estadísticas avanzadas</li>
                                <li>Configuración de centros de trabajo</li>
                                <li>Gestión de clientes y proyectos</li>
                            </ul>

                            <h6 className="font-medium text-yellow-300/80">Características destacadas:</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Interfaz moderna y responsive</li>
                                <li>Sistema de roles y permisos mejorado</li>
                                <li>Autenticación robusta</li>
                                <li>API REST para integraciones</li>
                                <li>Soporte multiidioma</li>
                                <li>Generación de informes en PDF y Excel</li>
                            </ul>

                            <h6 className="font-medium text-yellow-300/80">Versión Pro:</h6>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Gestión avanzada de proyectos y clientes</li>
                                <li>Reportes personalizados</li>
                                <li>Funcionalidades extendidas de fichajes</li>
                            </ul>
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
