import React from "react";
import { debounce } from "lodash";
import { hyphenateHTML } from "hyphen/en";

const divisor = "";

const flattenChildTextNodes = (node: Node): Node[] => {
    if (node.nodeType === Node.TEXT_NODE) {
        return [node];
    }

    if (node.childNodes.length === 0) return [];

    let textNodes: Node[] = [];
    node.childNodes.forEach((child) => {
        textNodes = textNodes.concat(flattenChildTextNodes(child));
    });

    return textNodes;
};

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

        console.log(flattenChildTextNodes(textRef.current));

        /*const range = document.createRange();
        range.setStart(textRef.current?.childNodes[0], offset);

        const selection = document.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);*/
    }, [text, offset]);

    const updateText = (newText: string) => {
        setText(newText);
        debouncedHyphenation(newText);

        const range = window.getSelection()?.getRangeAt(0);

        if (!textRef.current || !range) return;

        const preCaretRange = range.cloneRange();

        preCaretRange.selectNodeContents(textRef.current);
        preCaretRange.setEnd(range?.endContainer, range?.endOffset);
        setOffset(preCaretRange.toString().length);
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
