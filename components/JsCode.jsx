import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function JsCode(props) {
    if (!props.line) {
        return(
            <SyntaxHighlighter language="javascript" useInlineStyles={false} style="" showLineNumbers={true}>
              {props.children}
            </SyntaxHighlighter>
        );
    }
    
    return(
        <SyntaxHighlighter language="javascript" useInlineStyles={false} style="" showLineNumbers={true}
                           startingLineNumber={props.line}>
          {props.children}
        </SyntaxHighlighter>
    );
}

function getLines(code, start, end) {
    return code.split("\n").slice(start, end).join("\n");
}

export {JsCode, getLines};
