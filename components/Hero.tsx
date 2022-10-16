import { ReactNode } from "react";

interface Props {text:ReactNode}
const Textarea = ({text}:Props) => (
    <div className="bg-reorang/10 text-center p-20 text-5xl">
        <div className="container">
            {text}
        </div>
    </div>
)
export default Textarea;
