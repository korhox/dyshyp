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

const getCaretPosition = (root_node: Node, offset_from_root: number): { start_node: Node; offset_from_node: number } => {
    //Get only text nodes from the children
    const nodes = flattenChildTextNodes(root_node);

    //Find which node and with which offset the offset_from_root falls into
    let index = 0;
    let new_offset = offset_from_root;
    while (new_offset > nodes[index].length) {
        new_offset -= nodes[index].length;
        index += 1;
    }

    return {
        start_node: nodes[index],
        offset_from_node: new_offset,
    };
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

        //Get the carets position from the offset from start
        const { start_node, offset_from_node } = getCaretPosition(textRef.current, offset);

        //Create range representing caret position
        const range = document.createRange();
        range.setStart(start_node, offset_from_node);

        //Update caret position
        const selection = document.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
    }, [text]);

    const updateText = (newText: string) => {
        setText(newText);
        debouncedHyphenation(newText);

        //Calculate the distance the caret is from the start of the editable div and save it as offset.
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
