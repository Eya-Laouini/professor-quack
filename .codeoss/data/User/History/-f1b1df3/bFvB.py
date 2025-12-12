import os
import datetime
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from google.cloud import firestore  # 1. Import Database Library
from duck_brain import ProfessorQuack

app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

# 2. Connect to the Database
db = firestore.Client(database='quack')

# Initialize the Brain
agent = ProfessorQuack()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/review', methods=['POST'])
def review():
    data = request.json
    user_code = data.get('code')
    
    if not user_code:
        return jsonify({"response": "Quack? You didn't send any code!"}), 400
    
    # 3. Get the AI Response
    response_text = agent.review_code(user_code)
    
    # 4. SAVE TO DATABASE 
    # We create a new document in the 'reviews' collection
    try:
        doc_ref = db.collection('reviews').add({
            'code': user_code,
            'response': response_text,
            'timestamp': datetime.datetime.now()
        })
        print(f"Saved review to DB: {doc_ref[1].id}")
    except Exception as e:
        print(f"Failed to save to DB: {e}")
    
    return jsonify({"response": response_text})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))