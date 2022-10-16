import type { NextPage } from "next";
import Hero from "../components/Hero";
import Textarea from "../components/Textarea";

const Home: NextPage = () => {
    return (
        <main className="flex-1 flex flex-col">
            <Hero
                text={
                    <p>
                        DysHyp makes reading <b>easier</b> <br />
                        and <b>faster</b> for dyslexics.
                    </p>
                }
            />
            <Textarea />
        </main>
    );
};

export default Home;
