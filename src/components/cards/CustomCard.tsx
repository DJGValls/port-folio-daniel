import { title } from "process";

interface CustomCardProps {
    children: React.ReactNode;
    title: string;
    id: string;
}

export const CustomCard = ({ children, title, id }: CustomCardProps) => {
    return (
        <div className="">
            <div id={id} className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full my-10">
                        <h3 className="text-5xl font-bold text-yellow-300/80">{title}</h3>
                    </div>
                    <div className="px-6 lg:px-10 py-16 rounded-lg ring-2 ring-yellow-500/30 flex flex-wrap">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
