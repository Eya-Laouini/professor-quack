import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from duck_brain import ProfessorQuack

app = Flask(__name__)
CORS(app) # Allow the Frontend to talk to this Backend

# Initialize the Brain
agent = ProfessorQuack()

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
    # Run locally on 8080
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))