// --- REGISTERED EXAMPLES ---
const scenarios = {
    spaghetti: `def what_to_wear(weather):
    if weather == "sunny":
        return "sunglasses"
    else:
        if weather == "rainy":
            return "umbrella"
        else:
            if weather == "snowy":
                return "coat"
            else:
                return "nothing"

print(what_to_wear("rainy"))`,

    trap: `def count_ducks():
    ducks = 0
    while ducks < 10:
        print(f"I see {ducks} ducks")
        # I forgot to increase the count!
        # This will run forever!

count_ducks()`,

    junior: `def c(x, y):
    # check if x is bigger
    z = x + y
    print("The answer is " + str(z))
    return z

c(5, 10)`
};

// --- FUNCTION TO LOAD EXAMPLES ---
function loadScenario(type) {
    const editor = document.getElementById("codeInput");
    editor.value = scenarios[type];
    
    // Flash effect
    editor.style.transition = "opacity 0.2s";
    editor.style.opacity = "0.5";
    setTimeout(() => editor.style.opacity = "1", 200);
}

// --- MAIN REVIEW FUNCTION ---
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

    btn.disabled = true;
    btn.innerText = "Thinking... 🦆";
    duck.classList.add("bouncing");
    title.innerText = "The Professor is Thinking...";
    resultDiv.innerHTML = "<p>Analyzing your logic...</p>";

    try {
        const response = await fetch("/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: code })
        });
        const data = await response.json();

        title.innerText = "Review Complete";
        resultDiv.innerHTML = marked.parse(data.response);

    } catch (error) {
        title.innerText = "Error";
        resultDiv.innerHTML = "<p>⚠️ Could not reach the server.</p>";
    } finally {
        btn.disabled = false;
        btn.innerText = "⚡ Review Code";
        duck.classList.remove("bouncing");
    }
}