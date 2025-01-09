import { redirect } from "next/navigation";

export default function Home() {
    // const lang = params.lang || 'en';
    const lang = 'en';
    redirect(`${lang}/home`);
    return null;
}
