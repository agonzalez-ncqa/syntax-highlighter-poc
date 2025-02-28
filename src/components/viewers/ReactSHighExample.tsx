import SyntaxHighlighter, {
  Light as LightSyntaxHighlighter
} from 'react-syntax-highlighter';
import { cqlSyntaxDef } from './cqlSyntaxDef';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';

import nnfx from 'react-syntax-highlighter/dist/esm/styles/hljs/nnfx';
import githubGist from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';
import vs from 'react-syntax-highlighter/dist/esm/styles/hljs/vs';
import xcode from 'react-syntax-highlighter/dist/esm/styles/hljs/xcode';

const styles = {
  a11yLight,
  nnfx,
  githubGist,
  vs,
  xcode
} as const;

export type ReactSHighStyle = keyof typeof styles;

export const ReactSHighStyles = Object.keys(styles) as (ReactSHighStyle)[];

LightSyntaxHighlighter.registerLanguage('cql', cqlSyntaxDef);

interface ReactSHighExampleProps {
  children: string;
  style?: keyof typeof styles;
}

const ReactSHighExample = ({ children, style }: ReactSHighExampleProps) => {
  return (
    <SyntaxHighlighter
      language="cql"
      style={style ? styles[style] : a11yLight}
      showLineNumbers
      customStyle={{ margin: 0, width: "100%" }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default ReactSHighExample;