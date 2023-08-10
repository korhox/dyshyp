import React, { FunctionComponent, HTMLAttributes } from 'react'

type Props = {
    label: string,
    style: "primary" | "default",

} & HTMLAttributes<HTMLElement>

const Button: FunctionComponent<Props> = ({ label, style, ...rest }) => {
    let styleClasses = "";
    switch (style) {
        case "primary":
            styleClasses = "bg-reorang hover:bg-reorang/50 text-white";
            break;
        default:
            styleClasses = "bg-slate-300 hover:bg-slate-400 text-slate-700";
    }
    return <a className={`${styleClasses} font-bold py-3 px-4 rounded-full m-2`} {...rest} >
        {label}
    </a>;
}

export default Button;