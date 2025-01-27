from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define the generation_config
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

# Configure the API key
genai.configure(api_key="AIzaSyA3YdsRKMUb_uDq9sEwuuWkRIeYRHKtoYY")

# Initialize the model with the defined generation_config
model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",
    generation_config=generation_config,
    system_instruction="Your empathetic chatbot instructions"
)

# Route for root (homepage)
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Mental Health Chatbot API!"

# Route for handling the chatbot conversation
@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    chat_session = model.start_chat(history=[])
    response = chat_session.send_message(user_input)
    return jsonify({"response": response.text})

if __name__ == '__main__':
    app.run(debug=True)
