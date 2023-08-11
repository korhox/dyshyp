import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
const getCurrentBranchName = require('node-git-current-branch');
const packageJson = require('/package.json');
const configJson = require('/config.json');

const Footer = () => (
    <footer className="glass text-slate-500">
        <div className="container py-3 text-xs">
            <div className="items-center flex justify-between">
                <div className="flex gap-3 items-center">
                    <p>Copyright &copy; Juuso &quot;korho&quot; Korhonen and GitHub contributors.</p>
                </div>
                <div className="flex gap-3 justify-end items-center">
                    <Link href="https://github.com/korhox/dyshyp"><FontAwesomeIcon icon={faGithub} /></Link>
                    <span><FontAwesomeIcon icon={faCodeBranch} /> {getCurrentBranchName()}</span>
                    <span><FontAwesomeIcon icon={faTag} /> {packageJson.version}</span>
                    {configJson.vercel_sponsor && <Link href="https://vercel.com/?utm_source=dyshyp&utm_campaign=oss"><Image src="/assets/powered-by-vercel.svg" alt="Powered by Vercel" width={110} height={50} /></Link>}
                </div>
            </div>
        </div>
    </footer>
)
export default Footer;