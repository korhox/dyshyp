import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

const Header = () => (
    <header className="glass text-slate-700 shadow-lg p-5">
        <div className="container flex items-center justify-between">
            <Link href="/"><h1 className="text-3xl font-bold"><FontAwesomeIcon icon={faCommentDots} className="mr-2" /> DysHyp Reader</h1></Link>
            <nav className="flex items-center">
                <Link className="p-3" href="/">Home</Link>
                <Link className="p-3" href="/reader">Reader</Link>
                <Link className="p-3" href="/about">About</Link>
                <Link className="p-3 text-2xl pr-0" target="_blank" href="https://github.com/korhox/dyshyp"><FontAwesomeIcon icon={faGithub} /></Link>
            </nav>
        </div>
    </header>
)
export default Header;