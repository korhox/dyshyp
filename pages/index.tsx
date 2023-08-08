import type { NextPage } from "next";
import Hero from "../components/Hero";
import Textarea from "../components/Textarea";

const Home: NextPage = () => {
    return (
        <main className="flex-1 flex flex-col">
            <Textarea />
        </main>
    );
};

export default Home;
