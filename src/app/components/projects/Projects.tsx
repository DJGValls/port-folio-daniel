import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

function Projects() {
    return (
        <div id="projects" className="container mx-auto mt-96 px-4">
            <h3 className="text-5xl font-bold text-red-300">Proyectos</h3>
            <div className="flex flex-col space-y-12 mt-20">
                <Link
                    href={'#'}
                    target="_blank"
                    rel="noreferrer"
                    className="p-8 bg-bunker-950/50 ring-1 flex-wrap ring-bunker-500/20 rounded-lg flex group/item cursor-pointer hover:bg-gradient-to-b hover:from-bunker-950/50 hover:to-red-300/5">
                    <div className="w-full lg:w-1/2 grow flex flex-col justify-between p-2">
                        <div>
                            <h5 className="text-bunker-200 font-medium text-2xl group-hover/item:text-red-300 transition-all flex items-center">
                                <span>Titulo</span>
                                <BiLinkExternal className="transition-transform ml-2 group-hover/item:translate-x-2 group-hover/item:-translate-y-2" />
                            </h5>
                            <p className="mt-2 max-w-lg">Descripcion</p>
                        </div>
                        <ul className="flex flex-wrap">
                                <li className="mr-1.5 mt-2" key={'id + tag'}>
                                    <div className="flex items-center rounded-full py-1 text-xs font-medium px-3 leading-5 text-red-300 bg-red-300/10">
                                        {'tag'}
                                    </div>
                                </li>
                        </ul>
                    </div>
                    <div className="w-full mt-8 lg:mt-0 lg:w-1/2 p-2">
                        <Image
                            src={'/gato.jpeg'}
                            alt="clon de discord"
                            width="1920"
                            height="1080"
                            className="rounded-lg aspect-video"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Projects;
