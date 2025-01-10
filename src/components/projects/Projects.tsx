import { CustomCard } from "../cards/CustomCard";
import { IntratimeEmpleadoProject } from "./intratimeEmpleado/IntratimeEmpleadoProject";
import { IntratimeEmpresa } from "./intratimeEmpresa/IntratimeEmpresa";
import { VilacasasProject } from "./vilacasas/VilacasasProject";

function Projects() {
    return (
        <>
            <CustomCard title="PROYECTOS" id="vilacasas">
                <VilacasasProject />
            </CustomCard>
            <CustomCard title="" id="intratime empleado">
                <IntratimeEmpleadoProject />
            </CustomCard>
            <CustomCard title="" id="intratime panel de empresa">
                <IntratimeEmpresa />
            </CustomCard>
            <CustomCard title="" id="factokis">
                <VilacasasProject />
            </CustomCard>
            <CustomCard title="" id="futaliner">
                <VilacasasProject />
            </CustomCard>
            <CustomCard title="" id="portfolio">
                <VilacasasProject />
            </CustomCard>
        </>
    );
}

export default Projects;
