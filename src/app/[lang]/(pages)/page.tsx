import { redirect } from "next/navigation";

export default function Home({ params }: { params: { lang: string } }) {
    console.log(params.lang);
    const lang = params.lang || 'en';
    redirect(`${lang}/home`);
    return null;
}
