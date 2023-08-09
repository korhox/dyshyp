import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Header = () => (
    <header className="bg-reorang text-white shadow-lg p-5">
        <div className="container flex items-center justify-between">
            <h1 className="text-3xl font-bold">DysHyp</h1>
            <nav className="flex items-center">
                <Link className="p-3" href="/">Home</Link>
                <Link className="p-3 text-2xl" target="_blank" href="https://github.com/korhox/dyshyp"><FontAwesomeIcon icon={faGithub} /></Link>
            </nav>
        </div>
    </header>
)
export default Header;