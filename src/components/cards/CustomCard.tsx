import { title } from "process";

interface CustomCardProps {
    children: React.ReactNode;
    title: string;
    id: string;
}

export const CustomCard = ({ children, title, id }: CustomCardProps) => {
    return (
        <div className="mb-32">
            <div id={id} className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[90%] md:w-[80%] lg:w-[85%] xl:w-[100%] my-10">
                        <h3 className="text-5xl font-bold text-yellow-300/80">{title}</h3>
                    </div>
                    <div className="w-[90%] md:w-[80%] lg:w-[85%] xl:w-[100%]">
                        <div
                            className="p-8 lg:p-12 rounded-xl bg-bunker-950/80 backdrop-blur-sm ring-2 ring-yellow-500/30  
                            lg:hover:ring-yellow-500/50 transition-all duration-300  
                            before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r  
                            before:from-yellow-500/5 before:to-transparent before:opacity-100  
                            lg:before:opacity-0  
                            lg:hover:before:opacity-100 before:transition-opacity ">
                            <div className="relative z-10 flex flex-wrap">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
