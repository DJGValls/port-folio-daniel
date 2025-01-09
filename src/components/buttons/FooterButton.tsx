import Link from "next/link";
import { IconType } from "react-icons";

type FooterButtonProps = {
    href: string;
    icon: IconType;
};

function FooterButton(props: FooterButtonProps) {
    const { href, icon } = props;
    return (
        <Link
            href={href}
            target="_blank"
            className="group group-hover/list:opacity-50 hover:!opacity-100 transition-all">
            {icon({ className: "group-hover:text-red-300/80 text-2xl transition-all" })}
        </Link>
    );
}

export default FooterButton;
