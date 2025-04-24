

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Code Editor PlatformA web-based interactive code editor built with Next.js and CodeMirror that allows users to solve programming problems in multiple languages. The platform provides real-time code execution with support for Python, JavaScript, TypeScript, Go, PHP, Rust, and C++.
Features🌐 Multi-language support: Python, JavaScript, TypeScript, Go, PHP, Rust, C++
📝 Rich editor with syntax highlighting via CodeMirror
🎯 Problem statement panel with input/output format, constraints, and sample test cases
🧪 Sample test case runner and "Run All Tests" simulation
🕒 Real-time timer for tracking problem-solving duration
🌓 Light/Dark mode with system theme auto-detection
💾 Code persistence via localStorage
➕ Bonus Feature: Backend API to compile and run user code securely
🔁 Bonus Feature: "Next Question" button to navigate through problems dynamically
How to Run LocallyPrerequisitesNode.js >= 18
npm or yarn
1. Clone the repositorygit clone https://github.com/your-username/code-editor-platform.git
cd code-editor-platform2. Install dependenciesnpm install
# or
yarn install3. Run the development servernpm run dev
# or
yarn dev4. Open in browserGo to http://localhost:3000
API EndpointPOST /api/run-codeExecutes the provided code in a secure temporary environment.
Request Body{
  "language": "python",
  "code": "print('Hello World')",
  "input": "optional input here"
}Response{
  "stdout": "Hello World\n",
  "stderr": "",
  "error": null
}Project Structure.
├── app/
│   └── page.tsx            # Main editor UI and logic
├── pages/api/
│   └── run-code.ts         # Backend code execution handler
├── public/
├── styles/
├── README.md               # This file
└── package.jsonLibraries Usedcodemirror for the in-browser code editor
@codemirror/lang-* extensions for language support
next, react, and typescript for the frontend
Node's child_process and fs modules for backend code execution
Feel free to fork and enhance the platform. Contributions are welcome!
✨ Built with love to make coding more interactive and accessible!
