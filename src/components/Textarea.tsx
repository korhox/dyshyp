"use client"
import React from "react";
import { hyphenateHTML } from "hyphen/fi";
import fiTxt from "../../examples/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const divitor = "%%%%%";

const Language = () => {
    return (
        <div className="rounded-full shadow-lg bg-white p-3 py-2">
            <label htmlFor="language" className="mr-2"><FontAwesomeIcon icon={faLanguage} /></label>
            <select id="language" className="">
                <option value="fi">Finnish</option>
                <option value="sv">Swedish</option>
                <option value="en">English</option>
            </select>
        </div>)
}

const Textarea = () => {
    const [sourceText, setSourceText] = React.useState<any>("");
    const [text, setText] = React.useState<any>(null);

    const updateText = () => {
        const editor = document.getElementById("editor") as HTMLTextAreaElement;
        const text = editor.value.replaceAll("\n", "<br />");
        hyphenateHTML(text, { minWordLength: 3, hyphenChar: divitor })
            .then((val) => {
                // todo:
                // Suomen tasavalta ==> ["Suo", "men ta", "sa", "val", "ta"]
                // Should be fixed to  ["Suo", "men ", "ta", "sa", "val", "ta"]
                // The space should be split, but not removed
                let words = val.split(divitor);
                let result = words.map((word, i) => {
                    if (i % 2 === 0) {
                        return word;
                    } else {
                        return `<span class='alt text-blue-600'>${word}</span>`;
                    }
                })
                setText(result.join(""));
                setSourceText(editor.value);
            });
    }

    const insertExampleText = () => {
        const editor = document.getElementById("editor") as HTMLTextAreaElement;
        editor.value = fiTxt;
    }

    const resetText = () => {
        setText(null);
        setSourceText("");
    }

    const editText = () => {
        setText(null);
    }

    return (
        <div className="container flex-1 flex flex-col p-5">
            {text ?
                <>
                    <div className="flex justify-between gap-5 mb-5 items-center">
                        <div className="flex">
                            <Language />
                        </div>
                        <div>
                            <button className="bg-slate-300 hover:bg-slate-400 text-slate-700 font-bold py-2 px-4 rounded-full m-2" onClick={resetText}>
                                Reset
                            </button>
                            <button className="bg-reorang hover:bg-reorang/50 text-white font-bold py-2 px-4 rounded-full m-2" onClick={editText}>
                                Edit text
                            </button>
                        </div>
                    </div>
                    <div className="shadow-lg w-full p-5 flex-1 mb-5 rounded-2xl bg-slate-50 text-red-600 font-bold" dangerouslySetInnerHTML={{ __html: text }}></div>
                </> :
                <>
                    <div className="flex justify-between gap-5 mb-5 items-center">
                        <div className="flex gap-4">
                            <Language />
                        </div>
                        <div>
                            <button className="bg-slate-300 hover:bg-slate-400 text-slate-700 font-bold py-2 px-4 rounded-full m-2" onClick={resetText}>
                                Reset
                            </button>
                            <button className="bg-slate-300 hover:bg-slate-400 text-slate-700 font-bold py-2 px-4 rounded-full m-2" onClick={insertExampleText}>
                                Insert Example Text
                            </button>
                            <button className="bg-reorang hover:bg-reorang/50 text-white font-bold py-2 px-4 rounded-full m-2" onClick={updateText}>
                                Hyphenate
                            </button>
                        </div>
                    </div>
                    <textarea className="shadow-lg w-full p-5 flex-1 mb-5 rounded-2xl font-bold" id="editor" value={sourceText} onChange={(e) => { setSourceText(e.target.value) }} />
                </>
            }
        </div>
    );
};

export default Textarea;
