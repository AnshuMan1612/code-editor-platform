'use client';
import { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { php } from '@codemirror/lang-php';
import { rust } from '@codemirror/lang-rust';
import { swift } from '@codemirror/lang-swift';
import { go } from '@codemirror/lang-go';
import { tokyoNight, tokyoNightDay } from '@uiw/codemirror-theme-tokyo-night';

const languageExtensions: Record<string, any> = {
  'C++': cpp(),
  JavaScript: javascript(),
  Python: python(),
  PHP: php(),
  Rust: rust(),
  Swift: swift(),
  Go: go(),
  TypeScript: javascript(), // Reusing JavaScript extension for placeholder
};

const defaultCode: Record<string, string> = {
  'C++': '#include <iostream>\nusing namespace std;\n\nint main() {\n  // your code\n  return 0;\n}',
  JavaScript: 'console.log("Hello World");',
  Python: 'print("Hello World")',
  PHP: '<?php echo "Hello World"; ?>',
  Rust: 'fn main() { println!("Hello World"); }',
  Swift: 'print("Hello World")',
  Go: 'package main\nimport "fmt"\nfunc main() { fmt.Println("Hello World") }',
  TypeScript: 'console.log("Hello World");',
};

export default function CodeEditorApp() {
  const [language, setLanguage] = useState('Python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const savedCode = localStorage.getItem(`code-${language}`);
    setCode(savedCode || defaultCode[language]);
  }, [language]);

  useEffect(() => {
    localStorage.setItem(`code-${language}`, code);
  }, [code, language]);

  const runCode = () => {
    setOutput('Running...');
    setTimeout(() => {
      setOutput(`Simulated output for ${language} code.`);
    }, 1500);
  };

  const resetCode = () => {
    setCode(defaultCode[language]);
  };

  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className="p-4 flex justify-between items-center border-b border-gray-400">
        <h1 className="text-xl font-bold">Code Editor Workspace</h1>
        <div className="flex gap-4 items-center">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="p-1 rounded">
            {Object.keys(languageExtensions).map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <button onClick={() => setDarkMode(!darkMode)} className="p-1 border rounded">
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <aside className="w-1/3 p-4 border-r border-gray-400 overflow-auto">
          <h2 className="text-lg font-semibold mb-2">Mock Problem</h2>
          <p><strong>Title:</strong> Two Sum</p>
          <p><strong>Description:</strong> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
          <p><strong>Input:</strong> [2, 7, 11, 15], target = 9</p>
          <p><strong>Output:</strong> [0, 1]</p>
          <p><strong>Constraints:</strong> One valid solution always exists.</p>
        </aside>

        <section className="flex-1 flex flex-col">
          <div className="flex-1 p-2">
            <CodeMirror
              value={code}
              height="100%"
              theme={darkMode ? tokyoNight : tokyoNightDay}
              extensions={[languageExtensions[language]]}
              onChange={(value) => setCode(value)}
            />
          </div>

          <div className="p-2 border-t border-gray-400">
            <div className="flex justify-between items-center mb-2">
              <span>Timer: {elapsed}s</span>
              <div className="flex gap-2">
                <button onClick={resetCode} className="bg-gray-300 p-1 rounded">Reset</button>
                <button onClick={runCode} className="bg-blue-500 text-white p-1 rounded">Run Code</button>
              </div>
            </div>
            <pre className="bg-black text-green-400 p-2 rounded h-32 overflow-auto">{output}</pre>
          </div>
        </section>
      </main>
    </div>
  );
}
