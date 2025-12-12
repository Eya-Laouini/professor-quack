"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [code, setCode] = useState(`def factorial(n):
    """
    Calculates factorial. Note: Recursive!
    """
    if n < 0:
        return "Error"
    elif n == 0:
        return 1
    else:
        return n * factorial(n-1)`);
        
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleReview = async () => {
    if (!code) return;
    setLoading(true);
    setStatus("loading");
    setResult("");

    try {
      // ⚠️ REPLACE WITH YOUR REAL BACKEND URL FROM CLOUD RUN
      const response = await fetch("https://professor-quack-api-YOUR-URL.a.run.app/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code }),
      });
      const data = await response.json();
      setResult(data.response);
      setStatus("success");
    } catch (error) {
      setResult("⚠️ **Quack Error:** Could not connect to the server.");
      setStatus("success");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#0f172a] text-slate-300 font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-[#1e293b] flex flex-col p-6 border-r border-slate-700/50 hidden md:flex">
        <div className="flex items-center gap-3 mb-8">
          <div className="text-3xl">🦆</div>
          <h1 className="text-xl font-bold text-yellow-400 tracking-wide">Professor Quack</h1>
        </div>

        <div className="flex items-center gap-2 mb-10 px-3 py-1.5 bg-slate-800/50 rounded-full w-fit border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          <span className="text-xs font-medium text-slate-400">System Online (Gemini 2.5)</span>
        </div>

        <div className="space-y-6">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">How to Use</h3>
          <div className="flex gap-4 group">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400">✏️</div>
            <p className="text-sm text-slate-400 flex-1">Paste your Python code into the editor.</p>
          </div>
          <div className="flex gap-4 group">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-yellow-400">🚀</div>
            <p className="text-sm text-slate-400 flex-1">Click "Review Code" to summon the Professor.</p>
          </div>
        </div>
      </aside>

      {/* --- MAIN AREA --- */}
      <main className="flex-1 p-8 flex flex-col gap-6 overflow-y-auto relative">
        <div className="w-full max-w-5xl mx-auto flex flex-col h-[500px] bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 shrink-0">
          <div className="bg-[#334155]/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-xs font-mono text-slate-400">main.py</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-[#0f172a] p-6 font-mono text-sm text-slate-200 focus:outline-none resize-none leading-relaxed"
            spellCheck="false"
          />
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <button
            onClick={handleReview}
            disabled={loading}
            className={`w-full py-4 rounded-lg font-bold text-slate-900 text-lg shadow-lg transform transition-all active:scale-[0.98] ${loading ? "bg-yellow-600 cursor-not-allowed opacity-80" : "bg-yellow-400 hover:bg-yellow-300"}`}
          >
            {loading ? "Summoning the Professor..." : "⚡ Review Code"}
          </button>
        </div>

        <div className="w-full max-w-5xl mx-auto flex-1 min-h-[200px] mb-10">
          {status === "idle" && (
            <div className="h-full border-2 border-dashed border-slate-700 rounded-xl flex flex-col items-center justify-center p-12 text-center bg-slate-800/20">
              <div className="text-5xl mb-4 opacity-80">🦆</div>
              <h3 className="text-xl font-bold text-white mb-2">Ready for Review</h3>
              <p className="text-slate-400">The Professor is waiting for your code.</p>
            </div>
          )}
          {status === "loading" && (
            <div className="h-full border border-slate-700 rounded-xl flex flex-col items-center justify-center p-12 text-center bg-[#1e293b]">
              <div className="text-6xl mb-6 animate-duck">🦆</div>
              <h3 className="text-xl font-bold text-white mb-2">The Professor is thinking...</h3>
            </div>
          )}
          {status === "success" && (
            <div className="bg-[#1e293b] border border-slate-700 rounded-xl p-8 shadow-2xl">
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}