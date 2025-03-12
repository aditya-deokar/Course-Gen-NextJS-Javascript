import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula,atomDark,a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
