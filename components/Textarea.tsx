import React from "react";
import { debounce } from "lodash";
import { hyphenateHTML } from "hyphen/en";

const divisor = "";

const Textarea = () => {
    const [text, setText] = React.useState("");
    const [offset, setOffset] = React.useState<number | undefined>(undefined);
    const textRef = React.useRef<HTMLParagraphElement>(null);

    const debouncedHyphenation = React.useCallback(
        debounce((newText: string) => {
            hyphenateHTML(newText, { minWordLength: 3, hyphenChar: divisor }).then((val) => {
                setText(val);
            });
        }, 1000),
        []
    );

    React.useEffect(() => {
        if (!offset || !textRef.current) return;

        const range = document.createRange();
        range.setStart(textRef.current?.childNodes[0], offset);

        const selection = document.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
    }, [text, offset]);

    const updateText = (newText: string) => {
        setText(newText);
        debouncedHyphenation(newText);

        console.log(newText);
        const range = document.getSelection()?.getRangeAt(0);
        setOffset(range?.startOffset);
    };
    return (
        <div className="container flex-1 flex flex-col">
            <p
                className="shadow-lg w-full p-5 flex-1"
                id="editor"
                contentEditable
                onInput={(e) => {
                    updateText((e.target as HTMLParagraphElement).innerHTML);
                }}
                suppressContentEditableWarning
                ref={textRef}
                dangerouslySetInnerHTML={{ __html: text }}
            ></p>
        </div>
    );
};

export default Textarea;
