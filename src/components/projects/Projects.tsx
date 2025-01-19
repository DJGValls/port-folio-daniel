import { useTranslations } from "next-intl";
import { CustomCard } from "../cards/CustomCard";
import { FactokisProject } from "./factokis/FactokisProject";
import { FutAlinerProject } from "./futAliner/FutAlinerProject";
import { IntratimeEmpleadoProject } from "./intratimeEmpleado/IntratimeEmpleadoProject";
import { IntratimeEmpresa } from "./intratimeEmpresa/IntratimeEmpresa";
import { PortfolioProject } from "./myPortFolio/PortfolioProject";
import { VilacasasProject } from "./vilacasas/VilacasasProject";

function Projects() {
    const t = useTranslations("projects");
    return (
        <>
            <CustomCard title={t("title")} id="vilacasas">
                <VilacasasProject />
            </CustomCard>
            <CustomCard title="" id="intratime empleado">
                <IntratimeEmpleadoProject />
            </CustomCard>
            <CustomCard title="" id="intratime panel de empresa">
                <IntratimeEmpresa />
            </CustomCard>
            <CustomCard title="" id="factokis">
                <FactokisProject />
            </CustomCard>
            <CustomCard title="" id="futaliner">
                <FutAlinerProject />
            </CustomCard>
            <CustomCard title="" id="portfolio">
                <PortfolioProject />
            </CustomCard>
        </>
    );
}

export default Projects;
