# 🦆 Professor Quack - AI Code Reviewer

![Python](https://img.shields.io/badge/Python-3.9-blue?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-2.3-green?style=for-the-badge&logo=flask)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-Run-red?style=for-the-badge&logo=google-cloud)
![Gemini](https://img.shields.io/badge/AI-Gemini_2.5-purple?style=for-the-badge&logo=google)

> **"I don't just find bugs; I eat them for breakfast!"** 🐛

**Professor Quack** is an open-source, AI-powered code reviewer designed to help beginners learn Python. Instead of dry, robotic feedback, it acts as a sentient "Rubber Duck" that roasts your code with puns, fixes your logic, and teaches you best practices (PEP-8).

![App Screenshot](screenshot.png)

---

## ✨ Features

- **🧠 Powered by Gemini 2.5:** Uses Google's "Thinking" model for deep logic analysis.
- **🤣 Personality Engine:** Reviews are delivered with humor, empathy, and duck-themed puns.
- **🎨 Pro Code Editor UI:** A dark-mode, VS Code-inspired interface with syntax highlighting and split-screen scrolling.
- **⚡ Instant Feedback:** Optimized for low latency (hosted in `europe-west1`).
- **💾 Cloud Memory:** Every review is logged to **Google Firestore** for analytics and improvement.
- **📝 Simple Paste & Review:** Just paste your Python code into the editor, click the button, and get instant feedback.

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

🚀 Getting Started
Prerequisites
Google Cloud Project with Billing Enabled.

gcloud CLI installed.

Python 3.9+.

1. Clone the Repository
Bash

git clone [https://github.com/your-username/professor-quack.git](https://github.com/your-username/professor-quack.git)
cd professor-quack
2. Local Setup
You need to authenticate with Google Cloud to use the AI model locally.

Bash

# Install dependencies
pip install -r requirements.txt

# Authenticate with your GCP User
gcloud auth application-default login

# Run the App
python main.py
Visit http://localhost:8080 in your browser.

☁️ Deployment (Google Cloud)
This project is optimized for Cloud Run.

Step 1: Create the Database
Go to Google Cloud Console -> Firestore.

Create a Database in Native Mode.

Name it: quack (Important! The code looks for this specific name).

Location: europe-west1.

Step 2: Deploy
Run the following command in your terminal:

Bash

gcloud run deploy professor-quack \
  --source . \
  --region europe-west1 \
  --allow-unauthenticated
The CLI will return a Service URL (e.g., https://professor-quack-xyz.a.run.app). Your agent is live!

🤝 Contributing
We welcome contributions from the community!

Fork the project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

🌟 Show your support
Give a ⭐️ if this project helped you learn Python or made you laugh!