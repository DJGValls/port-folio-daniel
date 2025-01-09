import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

type CustomLinkButtonProps = {
    children: React.ReactNode;
    external?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;

function CustomLinkButton(props: CustomLinkButtonProps) {
    const { children, external, ...rest } = props;
    return (
        <Link
        href={'#'}
            className="flex items-center font-medium hover:text-yellow-300/80 hover:ring-yellow-300/80 ring-1 ring-yellow-500/50 bg-yellow-950/50  px-4 py-2 rounded-full"
            {...rest}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
            {children}
            {external ? <BiLinkExternal className="ml-2" /> : null}
        </Link>
    );
}

export default CustomLinkButton;
