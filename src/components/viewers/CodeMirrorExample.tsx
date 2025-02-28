import CodeMirror from '@uiw/react-codemirror';
import { sql, Cassandra } from '@codemirror/lang-sql';
import * as themes from '@uiw/codemirror-themes-all';

// themes: quietlight, githubLight

interface CodeMirrorExampleProps {
  children: string;
}

const CodeMirrorExample = ({ children }: CodeMirrorExampleProps) => {
  return (
    <CodeMirror
      width='100%'
      value={children}
      extensions={[themes.quietlight, sql({ dialect: Cassandra})]}
      style={{ overflow: 'auto', height: '100%' }}
    />
  )
}

export default CodeMirrorExample
