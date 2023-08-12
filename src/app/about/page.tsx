import Image from 'next/image';
import Button from '../../components/ui/Button';
import Link from 'next/link';

export default function Page() {
    const contributors = fetch('https://api.github.com/repos/korhox/dyshyp/contributors').then(res => res.json());

    return <main className="flex-1 flex flex-col">
        <div className="container mx-auto py-10 flex items-center">
            <div className="w-1/2">
                <h1 className="text-4xl mb-2">About</h1>
                <p className='mb-2'><b>DysHyp</b> is compeletely free and open source text formatter, which aims to help dyslexics to read faster. The main thing in the app is to color each other syllable with different color, to make reading faster.</p>
                <p className='mb-5'>The app's source code is compeletely open and available for anyone see and inspect at <a href="https://github.com/korhox/dyshyp">GitHub</a>. New ideas and pull requests are welcome!</p>
                <Button href="https://github.com/korhox/dyshyp" label="GitHub" />
            </div>
            <div className="w-1/2 justify-center items-center flex">
                <Image src="/assets/storyset/reading.svg" alt="Reading" width={300} height={300} />
            </div>
        </div>
        <div className="container mx-auto py-10">
            <h2 className="text-2xl mb-5">Contributors</h2>
            <div className="flex gap-3">
                {contributors.then((data: any[]) => data.map((contributor, index) => <div className='flex glass rounded-full items-center'>
                    <div>
                        <Image src={contributor.avatar_url} alt={contributor.login} width={60} height={60} className="rounded-full" />
                    </div>
                    <div className='pl-3 pr-7'>
                        <p className='font-bold'>{contributor.login}</p>
                        <p className="text-sm">{contributor.contributions} contributions</p>
                    </div>
                </div>))}
            </div>
            <p className="mt-5 text-xs opacity-50">Data fetched from GitHub <Link href="https://github.com/korhox/dyshyp/graphs/contributors" className='underline hover:no-underline' rel="nofollow noopener">contributors list</Link>.</p>
        </div>
    </main>
}