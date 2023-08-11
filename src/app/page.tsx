import Textarea from "../components/Textarea";
import Button from "../components/ui/Button";

export default function Page() {
    return <main className="flex-1 flex flex-col justify-top">
        <div className="container p-20 text-center ">
            <h1 className="text-7xl mb-5">Making the text<br /><span className="font-bold text-blue-800">read<span className="text-red-800">able</span></span></h1>
            <span className="text-3xl">DysHyp is compeletely free and open source online software to help reading. Aimed for dyslexics, open for anyone.</span>
            {/* todo: <Button className="mt-10" href="/app">Open Reader</Button> */}
        </div>
    </main >
}