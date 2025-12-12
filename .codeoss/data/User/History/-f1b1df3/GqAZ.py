import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from duck_brain import ProfessorQuack

app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

# Initialize the Brain
agent = ProfessorQuack()

# --- ROUTE 1: SERVE THE WEBSITE ---
@app.route('/')
def home():
    return render_template('index.html')

# --- ROUTE 2: API FOR THE BUTTON ---
@app.route('/review', methods=['POST'])
def review():
    data = request.json
    user_code = data.get('code')
    
    if not user_code:
        return jsonify({"response": "Quack? You didn't send any code!"}), 400
    
    # Get the response from Gemini
    response_text = agent.review_code(user_code)
    
    return jsonify({"response": response_text})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))