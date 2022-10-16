import React from "react";
import { debounce } from "lodash";
import { hyphenateHTML } from "hyphen/en";

const divisor = "%%%%%";

const Textarea = () => {
    const [text, setText] = React.useState<string[]>([]);
    const debouncedHyphenation = React.useCallback(
        debounce((newText: string) => {
            hyphenateHTML(newText, { minWordLength: 3, hyphenChar: divisor }).then((val) => {
                setText(val.split(divisor));
            });
        }, 1000),
        []
    );
    const updateText = (newText: string) => {
        console.log(newText);
        setText([newText]);
        if (newText.length !== 0) {
            debouncedHyphenation(newText);
        }
    };
    return (
        <div className="container flex-1 flex flex-col">
            <section
                className="shadow-lg w-full p-5 flex-1"
                id="editor"
                contentEditable="true"
                onInput={(e) => {
                    //@ts-ignore}
                    updateText(e.target.textContent);
                }}
                dangerouslySetInnerHTML={{ __html: `<p>${text.join(" - ")}</p>` }}
            ></section>
        </div>
    );
};

export default Textarea;
