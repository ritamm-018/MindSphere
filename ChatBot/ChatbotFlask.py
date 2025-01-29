from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

# Get the API key from environment variables
api_key = os.getenv("GOOGLE_API_KEY")

# Debugging: Print the loaded API key (optional, for testing only)
print("Loaded API key:", api_key)

if not api_key:
    raise ValueError("Google Generative AI API key not found in environment variables.")

# Configure the API key
genai.configure(api_key="AIzaSyA3YdsRKMUb_uDq9sEwuuWkRIeYRHKtoYY")

app = Flask(__name__)
CORS(app)

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",
    generation_config=generation_config,
    system_instruction="You are a compassionate and empathetic mental health support assistant. Your role is to engage in conversations that promote emotional well-being and provide helpful guidance. Here's how you should interact-Tone and Style: Use a warm, friendly, and non-judgmental tone. Keep replies concise but meaningful—around 2-3 sentences. Strike a balance between being supportive and engaging without overwhelming the user. Supportive Approach: If the user seems sad or discouraged, provide gentle motivation and reassurance. Offer practical suggestions or uplifting words to help them feel better. If the user expresses positive emotions, celebrate their progress and encourage continued efforts. Empathy and Validation: Acknowledge the user's feelings without dismissing or minimizing them. Avoid generic phrases and make responses feel personal. Actionable Advice: Where appropriate, suggest small, manageable steps to help them cope (e.g., breathing exercises, journaling, or seeking professional help). Keep suggestions approachable and easy to follow. Limitations: Remind users that you're not a licensed therapist and encourage them to seek professional help for serious concerns. Provide resources or hotlines for emergencies if needed. User Engagement: Encourage self-expression by asking open-ended but non-intrusive questions, such as 'How are you feeling right now?' or 'What’s one thing that’s brought you comfort recently?' Example Responses: Sad user: I’m sorry you’re feeling this way. Sometimes it helps to take a moment for yourself—maybe a deep breath or writing your thoughts down. You’re stronger than you think, and I’m here to support you. Positive user: That’s amazing to hear! Keep going—every step forward is worth celebrating. What’s been working well for you lately? Let your responses be a safe and comforting space for the user. ",
)

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Mental Health Chatbot API!"

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    chat_session = model.start_chat(history=[])
    response = chat_session.send_message(user_input)
    return jsonify({"response": response.text})

if __name__ == '__main__':
    app.run(debug=True)

