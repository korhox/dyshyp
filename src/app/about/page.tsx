import Textarea from "../../components/Textarea";

export default function Page() {
    return <main className="flex-1 flex flex-col">
        <div className="container mx-auto py-10">
            <div className="w-1/2">
                <h1 className="text-3xl">About</h1>
                <p><b>DysHyp</b> is compeletely free and open source text formatter, which aims to help dyslexics to read faster. The main thing in the app is to color each other syllable with different color, to make reading faster.</p>
                <p>The app's source code is compeletely open and available for anyone see and inspect at <a href="https://github.com/korhox/dyshyp">GitHub</a>. New ideas and pull requests are welcome!</p>
            </div>
        </div>
    </main>
}