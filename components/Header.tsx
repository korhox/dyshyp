import Link from "next/link";

const Header = () => (
    <header className="bg-reorang text-white shadow-lg p-5">
        <div className="container flex items-center justify-between">
            <h1 className="text-3xl">DysHyp</h1>
            <nav className="">
                <Link href="/"><a className="p-3">Home</a></Link>
                <Link href="https://github.com/korhox/dyshyp"><a className="p-3" target="_blank">Project GitHub</a></Link>
            </nav>
        </div>
    </header>   
)
export default Header;