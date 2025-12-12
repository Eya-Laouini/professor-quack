import streamlit as st
from agent_brain import ProfessorQuack

# --- PAGE CONFIGURATION ---
st.set_page_config(
    page_title="Professor Quack 🦆",
    page_icon="🦆",
    layout="centered"
)

# --- INITIALIZE THE AGENT ---
# We use @st.cache_resource so the connection to Vertex AI stays open
@st.cache_resource
def get_agent():
    # This calls class in agent_brain.py 
    return ProfessorQuack()

try:
    agent = get_agent()
except Exception as e:
    st.error(f"Failed to connect to Vertex AI: {e}")
    st.stop()

# --- UI HEADER ---
st.title("🦆 Professor Quack")
st.caption("Running on **Google Cloud (Europe-West1)** 🇪🇺 | Powered by Gemini 3")

st.markdown("""
**Quack!** I am your friendly Python code reviewer. 
I don't just find bugs; I eat them for breakfast! 🐛

Paste your messy code below, and I'll tell you if it floats or sinks.
""")

# --- SIDEBAR ---
with st.sidebar:
    st.header("Server Status")
    st.success("Region: **Belgium** (europe-west1)")
    st.info("Latency: **Optimized for Tunisia/EMEA**")
    st.markdown("---")
    st.markdown("### How to use:")
    st.markdown("1. Paste your Python code.")
    st.markdown("2. Click **Review Code**.")
    st.markdown("3. Get roasted (gently).")

# --- INPUT AREA ---
user_code = st.text_area(
    "Your Code:", 
    height=250, 
    placeholder="def hello():\n    print('Hello World') # Is this good code?"
)

# --- ACTION BUTTON ---
if st.button("Review Code 🚀", type="primary"):
    if not user_code.strip():
        st.warning("Quack? You didn't give me any code! I can't review thin air!")
    else:
        with st.spinner("Thinking... (Gemini is analyzing your logic) 🧠"):
            # 1. Call the brain
            feedback = agent.review_code(user_code)
            
            # 2. Display the result
            st.markdown("---")
            st.markdown(feedback)
            st.toast("Code review complete! 🍞", icon="🦆")