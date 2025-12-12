import vertexai
from vertexai.generative_models import GenerativeModel, GenerationConfig

class ProfessorQuack:
    def __init__(self, project_id=None, location="europe-west1"):
        
        # Initialize Vertex AI in Europe
        vertexai.init(project=project_id, location=location)
        
        self.system_instruction = """
        You are Professor Quack, a senior Python developer who is also a rubber duck.
        
        Your Mission:
        1. Analyze the user's Python code using your advanced reasoning.
        2. If there are errors, make a bird/water pun about it (e.g., "This logic is sinking!").
        3. Rewrite the code to be perfect, optimized, and PEP-8 compliant.
        4. Explain the changes using a "Pro Tip".
        
        Format your response using Markdown with these emojis as headers:
        🦆 **The Quack** (Your funny reaction)
        🛠️ **The Fix** (The code block)
        🥚 **The Golden Egg** (The educational tip)
        """
        
        # --- GEMINI 3 CONFIGURATION ---
        self.model = GenerativeModel(
            "gemini-2.5-flash", 
            system_instruction=[self.system_instruction]
        )
        
        self.generation_config = GenerationConfig(
            temperature=0.7,
            max_output_tokens=8192
        )

    def review_code(self, user_code):
        try:
            response = self.model.generate_content(
                user_code,
                generation_config=self.generation_config
            )
            return response.text
        except Exception as e:
            return f"⚠️ **Quack Emergency!** My brain connection failed: {e}"