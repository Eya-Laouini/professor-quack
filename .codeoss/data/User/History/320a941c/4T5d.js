async function reviewCode() {
    const code = document.getElementById("codeInput").value;
    const btn = document.getElementById("reviewBtn");
    const duck = document.getElementById("duckImage");
    const title = document.getElementById("statusTitle");
    const resultDiv = document.getElementById("resultContent");

    if (!code) {
        alert("Quack! Please enter some code first.");
        return;
    }

    // 1. Loading State
    btn.disabled = true;
    btn.innerText = "Thinking... 🦆";
    duck.classList.add("bouncing"); // Make duck bounce
    title.innerText = "The Professor is Thinking...";
    resultDiv.innerHTML = "<p>Analyzing your logic...</p>";

    try {
        // 2. Send to Python Backend
        const response = await fetch("/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: code })
        });

        const data = await response.json();

        // 3. Show Result (Render Markdown)
        title.innerText = "Review Complete";
        resultDiv.innerHTML = marked.parse(data.response); // Convert markdown to HTML

    } catch (error) {
        title.innerText = "Error";
        resultDiv.innerHTML = "<p>⚠️ Could not reach the server.</p>";
    } finally {
        // 4. Reset UI
        btn.disabled = false;
        btn.innerText = "🚀 Review Code";
        duck.classList.remove("bouncing"); // Stop bouncing
    }
}
