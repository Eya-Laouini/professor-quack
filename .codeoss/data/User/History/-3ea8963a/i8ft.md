# 🦆 Professor Quack - AI Code Reviewer

![Python](https://img.shields.io/badge/Python-3.9-blue?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-2.3-green?style=for-the-badge&logo=flask)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-Run-red?style=for-the-badge&logo=google-cloud)
![Gemini](https://img.shields.io/badge/AI-Gemini_2.5-purple?style=for-the-badge&logo=google)

> **"I don't just find bugs; I eat them for breakfast!"** 🐛

**Professor Quack** is an open-source, AI-powered code reviewer designed to help beginners learn Python. Instead of dry, robotic feedback, it acts as a sentient "Rubber Duck" that roasts your code with puns, fixes your logic, and teaches you best practices (PEP-8).

![App Screenshot](screenshot.png)
**

---

## ✨ Features

- **🧠 Powered by Gemini 2.5:** Uses Google's latest "Thinking" model for deep logic analysis.
- **🤣 Personality Engine:** Reviews are delivered with humor, empathy, and duck-themed puns.
- **🎨 Pro Code Editor UI:** A dark-mode, VS Code-inspired interface with syntax highlighting and split-screen scrolling.
- **⚡ Instant Feedback:** Optimized for low latency (hosted in `europe-west1`).
- **💾 Cloud Memory:** Every review is logged to **Google Firestore** for analytics and improvement.
- **🚀 One-Click Scenarios:** Built-in test cases (The Spaghetti, The Trap) for instant demos.

---

## 🏗️ Architecture

The application follows a **Serverless Monolithic** architecture hosted on Google Cloud Platform.



1.  **The Brain (Vertex AI):** Connects to `gemini-2.5-flash` to generate code fixes.
2.  **The Body (Flask):** Serves the HTML/CSS frontend and handles API requests.
3.  **The Memory (Firestore):** Stores every user query and AI response for audit trails.
4.  **The Host (Cloud Run):** Scales automatically to zero when not in use.

---

## 📂 Project Structure

```text
professor-quack/
├── main.py                  # 🐍 Entry point (Flask Server)
├── duck_brain.py            # 🧠 Vertex AI Logic & System Prompts
├── requirements.txt         # 📦 Python Dependencies
├── Dockerfile               # 🐳 Container Configuration
│
├── templates/               # 📄 HTML Views
│   └── index.html           #    Main Single-Page App
│
└── static/                  # 🎨 Assets (CSS/JS)
    ├── style.css            #    Dark Mode & Flexbox Layout
    └── script.js            #    Frontend Logic & API Calls