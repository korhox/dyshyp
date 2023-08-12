"use client"
import React, { FunctionComponent, HTMLAttributes, useEffect } from "react";
import createHyphenator from "hyphen";
import fiTxt from "../../examples/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faLanguage } from "@fortawesome/free-solid-svg-icons";
import Button from "./ui/Button";
import ClickAwayListener from 'react-click-away-listener';

const lanaguages = require("../../config/languages.json");

const divitor = "%%%%%";


const Language: FunctionComponent<{ setLang: (lang: string) => void }> = ({ setLang }) => {
    return (
        <div className="rounded-full shadow-lg glass p-3 py-2">
            <label htmlFor="language" className="mr-2"><FontAwesomeIcon icon={faLanguage} /></label>
            <select id="language" className="bg-transparent" onChange={e => (setLang(e.target.value))}>
                {Object.keys(lanaguages).sort().map((lang) => {
                    return (
                        <option key={lang} value={lang} selected={lang == "en-us"}>{lanaguages[lang]}</option>
                    )
                })}
            </select>
        </div>)
}

type ColorProps = {
    colors: any,
    setColors: (colors: any) => void
}

const Colors: FunctionComponent<ColorProps> = ({ colors, setColors }) => {
    const [showColors, setShowColors] = React.useState<boolean>(false);
    const colorButton = "w-5 h-5 block rounded-full cursor-pointer";
    const presetButton = "block rounded-lg font-bold text-xs p-1 px-2 cursor-pointer";
    return (
        <>
            <div className="rounded-full shadow-lg glass p-3 py-2 relative z-10" onClick={e => setShowColors(!showColors)}>
                <label htmlFor="language" className="mr-2"><FontAwesomeIcon icon={faDroplet} /> Colors</label>
                {showColors &&
                    <>
                        <ClickAwayListener onClickAway={e => setShowColors(false)}>
                            <div className="absolute glass p-3 rounded-xl z-50 w-96 bg-white flex">
                                <div>
                                    <h3 className="font-bold">Primary</h3>
                                    <div className="flex flex-wrap gap-1">
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-red", shade: colors.primary.shade } })} className={`${colorButton} bg-red-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-orange", shade: colors.primary.shade } })} className={`${colorButton} bg-orange-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-amber", shade: colors.primary.shade } })} className={`${colorButton} bg-amber-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-yellow", shade: colors.primary.shade } })} className={`${colorButton} bg-yellow-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-lime", shade: colors.primary.shade } })} className={`${colorButton} bg-lime-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-green", shade: colors.primary.shade } })} className={`${colorButton} bg-green-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-emerald", shade: colors.primary.shade } })} className={`${colorButton} bg-emerald-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-teal", shade: colors.primary.shade } })} className={`${colorButton} bg-teal-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-cyan", shade: colors.primary.shade } })} className={`${colorButton} bg-cyan-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-sky", shade: colors.primary.shade } })} className={`${colorButton} bg-sky-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-blue", shade: colors.primary.shade } })} className={`${colorButton} bg-blue-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-indigo", shade: colors.primary.shade } })} className={`${colorButton} bg-indigo-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-violet", shade: colors.primary.shade } })} className={`${colorButton} bg-violet-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-purple", shade: colors.primary.shade } })} className={`${colorButton} bg-purple-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-fuchsia", shade: colors.primary.shade } })} className={`${colorButton} bg-fuchsia-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-pink", shade: colors.primary.shade } })} className={`${colorButton} bg-pink-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-rose", shade: colors.primary.shade } })} className={`${colorButton} bg-rose-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-slate", shade: colors.primary.shade } })} className={`${colorButton} bg-slate-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-gray", shade: colors.primary.shade } })} className={`${colorButton} bg-gray-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-neutral", shade: colors.primary.shade } })} className={`${colorButton} bg-neutral-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { color: "text-stone", shade: colors.primary.shade } })} className={`${colorButton} bg-stone-500`} />
                                    </div>
                                    {/* <h3 className="mt-3">Primary Shade</h3>
                        <div className="flex flex-wrap gap-1">
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { shade: "100", color: colors.primary.color } })} className={`${colorButton} bg-neutral-100`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { shade: "200", color: colors.primary.color } })} className={`${colorButton} bg-neutral-200`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { shade: "300", color: colors.primary.color } })} className={`${colorButton} bg-neutral-300`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { shade: "400", color: colors.primary.color } })} className={`${colorButton} bg-neutral-400`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { shade: "500", color: colors.primary.color } })} className={`${colorButton} bg-neutral-500`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { shade: "700", color: colors.primary.color } })} className={`${colorButton} bg-neutral-700`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, primary: { shade: "900", color: colors.primary.color } })} className={`${colorButton} bg-neutral-900`} />
                        </div> */}
                                    <h3 className="mt-3 font-bold">Secondary</h3>
                                    <div className="flex flex-wrap gap-1">
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-red", shade: colors.secondary.shade } })} className={`${colorButton} bg-red-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-orange", shade: colors.secondary.shade } })} className={`${colorButton} bg-orange-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-amber", shade: colors.secondary.shade } })} className={`${colorButton} bg-amber-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-yellow", shade: colors.secondary.shade } })} className={`${colorButton} bg-yellow-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-lime", shade: colors.secondary.shade } })} className={`${colorButton} bg-lime-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-green", shade: colors.secondary.shade } })} className={`${colorButton} bg-green-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-emerald", shade: colors.secondary.shade } })} className={`${colorButton} bg-emerald-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-teal", shade: colors.secondary.shade } })} className={`${colorButton} bg-teal-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-cyan", shade: colors.secondary.shade } })} className={`${colorButton} bg-cyan-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-sky", shade: colors.secondary.shade } })} className={`${colorButton} bg-sky-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-blue", shade: colors.secondary.shade } })} className={`${colorButton} bg-blue-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-indigo", shade: colors.secondary.shade } })} className={`${colorButton} bg-indigo-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-violet", shade: colors.secondary.shade } })} className={`${colorButton} bg-violet-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-purple", shade: colors.secondary.shade } })} className={`${colorButton} bg-purple-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-fuchsia", shade: colors.secondary.shade } })} className={`${colorButton} bg-fuchsia-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-pink", shade: colors.secondary.shade } })} className={`${colorButton} bg-pink-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-rose", shade: colors.secondary.shade } })} className={`${colorButton} bg-rose-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-slate", shade: colors.secondary.shade } })} className={`${colorButton} bg-slate-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-gray", shade: colors.secondary.shade } })} className={`${colorButton} bg-gray-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-neutral", shade: colors.secondary.shade } })} className={`${colorButton} bg-neutral-500`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { color: "text-stone", shade: colors.secondary.shade } })} className={`${colorButton} bg-stone-500`} />
                                    </div>
                                    {/* <h3 className="mt-3">Secondary Shade</h3>
                        <div className="flex flex-wrap gap-1">
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { shade: "100", color: colors.secondary.color } })} className={`${colorButton} bg-neutral-100`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { shade: "200", color: colors.secondary.color } })} className={`${colorButton} bg-neutral-200`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { shade: "300", color: colors.secondary.color } })} className={`${colorButton} bg-neutral-300`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { shade: "400", color: colors.secondary.color } })} className={`${colorButton} bg-neutral-400`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { shade: "500", color: colors.secondary.color } })} className={`${colorButton} bg-neutral-500`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { shade: "700", color: colors.secondary.color } })} className={`${colorButton} bg-neutral-700`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, secondary: { shade: "900", color: colors.secondary.color } })} className={`${colorButton} bg-neutral-900`} />
                        </div> */}
                                </div>
                                <div>
                                    <h3 className="font-bold">Background</h3>
                                    <div className="flex flex-wrap gap-1">
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-red", shade: colors.background.shade } })} className={`${colorButton} bg-red-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-orange", shade: colors.background.shade } })} className={`${colorButton} bg-orange-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-amber", shade: colors.background.shade } })} className={`${colorButton} bg-amber-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-yellow", shade: colors.background.shade } })} className={`${colorButton} bg-yellow-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-lime", shade: colors.background.shade } })} className={`${colorButton} bg-lime-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-green", shade: colors.background.shade } })} className={`${colorButton} bg-green-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-emerald", shade: colors.background.shade } })} className={`${colorButton} bg-emerald-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-teal", shade: colors.background.shade } })} className={`${colorButton} bg-teal-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-cyan", shade: colors.background.shade } })} className={`${colorButton} bg-cyan-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-sky", shade: colors.background.shade } })} className={`${colorButton} bg-sky-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-blue", shade: colors.background.shade } })} className={`${colorButton} bg-blue-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-indigo", shade: colors.background.shade } })} className={`${colorButton} bg-indigo-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-violet", shade: colors.background.shade } })} className={`${colorButton} bg-violet-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-purple", shade: colors.background.shade } })} className={`${colorButton} bg-purple-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-fuchsia", shade: colors.background.shade } })} className={`${colorButton} bg-fuchsia-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-pink", shade: colors.background.shade } })} className={`${colorButton} bg-pink-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-rose", shade: colors.background.shade } })} className={`${colorButton} bg-rose-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-slate", shade: colors.background.shade } })} className={`${colorButton} bg-slate-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-gray", shade: colors.background.shade } })} className={`${colorButton} bg-gray-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-neutral", shade: colors.background.shade } })} className={`${colorButton} bg-neutral-100`} />
                                        <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { color: "bg-stone", shade: colors.background.shade } })} className={`${colorButton} bg-stone-100`} />
                                    </div>
                                    {/* <h3 className="mt-3">Background Shade</h3>
                        <div className="flex flex-wrap gap-1">
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { shade: "100", color: colors.background.color } })} className={`${colorButton} bg-neutral-100`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { shade: "200", color: colors.background.color } })} className={`${colorButton} bg-neutral-200`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { shade: "300", color: colors.background.color } })} className={`${colorButton} bg-neutral-300`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { shade: "400", color: colors.background.color } })} className={`${colorButton} bg-neutral-400`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { shade: "500", color: colors.background.color } })} className={`${colorButton} bg-neutral-500`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { shade: "700", color: colors.background.color } })} className={`${colorButton} bg-neutral-700`} />
                            <Button label="&nbsp;" onClick={() => setColors({ ...colors, background: { shade: "900", color: colors.background.color } })} className={`${colorButton} bg-neutral-900`} />
                        </div> */}
                                    <h3 className="mt-3 font-bold">Presets</h3>
                                    <div className="flex flex-wrap gap-1">
                                        <Button label={<span className="text-blue-500">LA<span className="text-red-500">BEL</span></span>} onClick={() => setColors({
                                            ...colors,
                                            primary: { color: "text-blue", shade: "500" },
                                            secondary: { color: "text-red", shade: "500" },
                                            background: { color: "bg-slate", shade: "100" }
                                        })} className={`${presetButton} bg-slate-100`} />
                                        <Button label={<span className="text-blue-500">LA<span className="text-green-500">BEL</span></span>} onClick={() => setColors({
                                            ...colors,
                                            primary: { color: "text-blue", shade: "500" },
                                            secondary: { color: "text-green", shade: "500" },
                                            background: { color: "bg-slate", shade: "100" }
                                        })} className={`${presetButton} bg-slate-100`} />
                                        <Button label={<span className="text-green-500">LA<span className="text-red-500">BEL</span></span>} onClick={() => setColors({
                                            ...colors,
                                            primary: { color: "text-green", shade: "500" },
                                            secondary: { color: "text-red", shade: "500" },
                                            background: { color: "bg-slate", shade: "100" }
                                        })} className={`${presetButton} bg-slate-100`} />
                                        <Button label={<span className="text-blue-500">LA<span className="text-red-500">BEL</span></span>} onClick={() => setColors({
                                            ...colors,
                                            primary: { color: "text-blue", shade: "500" },
                                            secondary: { color: "text-red", shade: "500" },
                                            background: { color: "bg-slate", shade: "800" }
                                        })} className={`${presetButton} bg-slate-800`} />
                                        <Button label={<span className="text-blue-500">LA<span className="text-green-500">BEL</span></span>} onClick={() => setColors({
                                            ...colors,
                                            primary: { color: "text-blue", shade: "500" },
                                            secondary: { color: "text-green", shade: "500" },
                                            background: { color: "bg-slate", shade: "800" }
                                        })} className={`${presetButton} bg-slate-800`} />
                                        <Button label={<span className="text-green-500">LA<span className="text-red-500">BEL</span></span>} onClick={() => setColors({
                                            ...colors,
                                            primary: { color: "text-green", shade: "500" },
                                            secondary: { color: "text-red", shade: "500" },
                                            background: { color: "bg-slate", shade: "800" }
                                        })} className={`${presetButton} bg-slate-800`} />
                                    </div>
                                </div>
                            </div>
                        </ClickAwayListener>
                    </>
                }
            </div >
        </>
    )
}

const Textarea = () => {
    const [sourceText, setSourceText] = React.useState<any>("");
    const [text, setText] = React.useState<any>(null);
    const [lang, setLang] = React.useState<string>("en-us");
    const [colors, setColors] = React.useState<any>({
        primary: {
            color: "text-blue",
            shade: "500"
        },
        secondary: {
            color: "text-red",
            shade: "500"
        },
        background: {
            color: "bg-slate",
            shade: "100"
        }
    });

    const patterns = require(`hyphen/patterns/${lang}`);


    const hyphenateHTMLSync = createHyphenator(patterns, { html: true });

    const updateText = () => {
        let text = sourceText;
        const editor = document.getElementById("editor") as HTMLTextAreaElement;
        if (editor) {
            text = editor.value;
            setSourceText(editor.value);
        }

        let colored = false

        text = text.split(" ").map((word) => {
            const hyphens = (hyphenateHTMLSync(word.replaceAll("\n", "<br />"), { minWordLength: 3, hyphenChar: divitor }) as string).split(divitor)

            return hyphens.map((hyphen) => {
                colored = !colored;
                return colored ? `<span class='${colors.secondary.color}-${colors.secondary.shade}'>${hyphen}</span>` : hyphen;
            }).join("");

        }).join(" ");


        setText(text);
    }

    React.useEffect(() => {
        text && updateText();
    }, [lang, colors]);

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
        <div className="container flex-1 flex flex-col py-5">
            {text ?
                <>
                    <div className="flex justify-between gap-5 mb-5 items-center">
                        <div className="flex gap-4">
                            <Language setLang={setLang} />
                            <Colors colors={colors} setColors={setColors} />
                        </div>
                        <div className="flex gap-4">
                            <Button label="Reset" style="secondary" onClick={resetText} />
                            <Button label="Edit text" style="primary" onClick={editText} />
                        </div>
                    </div>
                    <div className={`glass w-full p-5 flex-1 mb-5 rounded-2xl ${colors.primary.color}-${colors.primary.shade} ${colors.background.color}-${colors.background.shade} font-bold`} dangerouslySetInnerHTML={{ __html: text }}></div>
                </> :
                <>
                    <div className="flex justify-between gap-5 mb-5 items-center">
                        <div className="flex gap-4">
                            <Language setLang={setLang} />
                            <Colors colors={colors} setColors={setColors} />
                        </div>
                        <div className="flex gap-4">
                            <Button label="Reset" style="secondary" onClick={resetText} />
                            <Button label="Insert Example Text" style="secondary" onClick={insertExampleText} />
                            <Button label="Hyphenate" style="primary" onClick={updateText} />
                        </div>
                    </div>
                    <textarea className={`glass w-full p-5 flex-1 mb-5 rounded-2xl font-bold ${colors.background.color}-${colors.background.shade}`} id="editor" value={sourceText} onChange={(e) => { setSourceText(e.target.value) }} />
                </>
            }
        </div>
    );
};

export default Textarea;
