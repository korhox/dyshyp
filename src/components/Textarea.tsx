"use client"
import React from "react";
import { hyphenateHTML, hyphenateHTMLSync } from "hyphen/fi";
import fiTxt from "../../examples/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import Button from "./ui/Button";

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

    const updateText = async () => {
        const editor = document.getElementById("editor") as HTMLTextAreaElement;
        let text = editor.value

        let colored = false

        text = text.split(" ").map((word) => {
            const hyphens = (hyphenateHTMLSync(word.replaceAll("\n", "<br />"), { minWordLength: 3, hyphenChar: divitor })).split(divitor)

            return hyphens.map((hyphen) => {
                colored = !colored
                return colored ? `<span class='alt text-blue-600'>${hyphen}</span>` : hyphen;
            }).join("")

        }).join(" ");


        setText(text);
        setSourceText(editor.value);
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
                            <Button text="Reset" style="secondary" onClick={resetText} />
                            <Button text="Edit text" style="primary" onClick={editText} />
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
                            <Button text="Reset" style="secondary" onClick={resetText} />
                            <Button text="Insert Example Text" style="secondary" onClick={insertExampleText} />
                            <Button text="Hyphenate" style="primary" onClick={updateText} />
                        </div>
                    </div>
                    <textarea className="shadow-lg w-full p-5 flex-1 mb-5 rounded-2xl font-bold" id="editor" value={sourceText} onChange={(e) => { setSourceText(e.target.value) }} />
                </>
            }
        </div>
    );
};

export default Textarea;
