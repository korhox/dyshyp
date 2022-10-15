import React from 'react';
import './App.css';

function App() {
    return (
    <div className="app flex flex-col h-full">
        <header className="bg-reorang text-white shadow-lg p-5">
            <div className="container flex items-center justify-between">
                <h1 className="text-3xl">DysHyp</h1>
                <nav className="">
                    <a className="p-3" href="/">Home</a>
                    <a className="p-3" href="https://github.com/korhox/dyshyp">Project GitHub</a>
                </nav>
            </div>
        </header>
        <main className="flex-1 flex flex-col">
            <div className="bg-reorang/10 text-center p-20 text-5xl">
                <div className="container">
                    <p>DysHyp makes reading <b>easier</b> <br />and <b>faster</b> for dyslexics.</p>
                </div>
            </div>
            <div className="container flex-1 flex flex-col p-1">
                <textarea className="shadow-lg w-full p-5 flex-1" id="editor"></textarea>
            </div>
        </main>
        <footer className="bg-reorang text-white">
            <div className="backdrop-brightness-50 p-5">
                <div className="container">
                    <p>Copyright &copy; Juuso "korho" Korhonen and GitHub contributors.</p>
                </div>
            </div>
        </footer>
    </div>
    );
}


export default App;
