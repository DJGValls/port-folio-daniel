import AboutMe from "@/components/aboutMe/AboutMe";
import TransitionLayout from "@/components/transitions/TransitionLayout";
import { locales } from "../../../../../middlewares/locale.middleware";
import { notFound } from "next/navigation";

export default function AboutMePage({ params: { lang } }: { params: { lang: string } }) {
    if (!locales.includes(lang)) notFound();
    return (
        <TransitionLayout>
            <AboutMe lang={lang}/>
        </TransitionLayout>
    );
}
