# 🧠 Code Editor Platform

A powerful and extensible multi-language code editor built with **Next.js**, **CodeMirror**, and a custom backend that supports real-time code execution, problem switching, and code persistence. Perfect for practicing coding problems with live code execution and test cases.

---

## 🚀 Features

- 🎯 Multi-language code support (Python, JavaScript, TypeScript, Go, PHP, Rust, C++)
- 🧠 Built-in coding problems with problem statements and sample test cases
- 💾 Auto-saving of code per language and problem
- 🌙 Light/Dark theme toggle with system preference detection
- 🧪 Code execution with sample input/output
- ✅ "Run All Tests" mock functionality
- 🔁 Next question cycling
- ⏱️ Problem-solving timer

---

## 📦 Tech Stack

- **Frontend:** React, Next.js App Router (Client Components), Tailwind CSS, CodeMirror 6
- **Backend:** Next.js API Route using `child_process` for dynamic code execution
- **Languages Supported:**
  - Python
  - JavaScript
  - TypeScript
  - Go
  - PHP
  - Rust
  - C++

---

## 📂 Project Structure


| Path                            | Description                                      |
|---------------------------------|--------------------------------------------------|
| `app/`                          | Main Next.js application directory               |
| ├── `api/run-code/route.ts`     | API route to handle code execution logic         |
| └── `page.tsx`                  | Main frontend page with CodeMirror editor        |
| `components/`                   | Reusable React components (e.g., Timer, Header)  |
| `constants/`                    | Language and problem metadata definitions        |
| `lib/`                          | Utility functions (e.g., problem logic, helpers) |
| `public/`                       | Static assets like icons and images              |
| `styles/`                       | Tailwind and global styling files                |
| `types/`                        | TypeScript type definitions                      |
| `.env.local`                    | Local environment variables                      |
| `.gitignore`                    | Specifies files to ignore in git                 |
| `next.config.js`                | Next.js configuration settings                   |
| `package.json`                  | Project metadata and dependencies                |
| `tsconfig.json`                 | TypeScript configuration                         |
| `README.md`                     | Project overview and usage guide                 |

yaml
Copy
Edit

---

## 🛠️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/code-editor-platform.git

cd code-editor-platform
```
2. Install Dependencies
```
bash
Copy
Edit
npm install
# or
yarn
```
3. Run the Development Server
```
bash
Copy
Edit
npm run dev
# or
yarn dev
```


Visit http://localhost:3000 to view the app.

✅ Important: Ensure your machine has the following compilers/interpreters installed:

Python

Node.js

Go

PHP

Rust (rustc)

g++ (for C++)

🧩 Bonus Features
💡 Backend dynamically compiles/runs code using temp files and system compilers

🔀 "Next Question" button cycles through built-in problems

🗃 LocalStorage persistence per language & problem

🎨 Auto theme toggle based on system preference

⏱️ Timer to track time spent per problem
