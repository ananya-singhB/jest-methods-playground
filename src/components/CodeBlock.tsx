import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { useEffect, useRef } from 'react';

export default function CodeBlock({ code, language }: { code: string; language: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current);
  }, [code, language]);
  return (
    <pre>
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
