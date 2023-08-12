import React, { FunctionComponent, HTMLAttributes } from 'react'

type Props = {
    label: string | JSX.Element,
    style?: "primary" | "secondary",
    href?: string | null,
} & HTMLAttributes<HTMLElement>

const Button: FunctionComponent<Props> = ({ label, style = "secondary", href, ...rest }) => {
    let styleClasses = "";
    switch (style) {
        case "primary":
            styleClasses = "text-slate-900 font-bold ";
            break;
        default:
            styleClasses = "text-slate-700";
    }
    return <a className={`glass py-2 px-4 rounded-full hover:scale-105 transition-transform cursor-pointer ${styleClasses}`} href={href && href} {...rest} >
        {label}
    </a>;
}

export default Button;