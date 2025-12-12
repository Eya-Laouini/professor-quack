# Use a lightweight Python image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all your files (main.py, duck_brain.py, templates/, static/) into the container
COPY . .

# Install the libraries from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Tell Cloud Run we are listening on port 8080
EXPOSE 8080

# START COMMAND:
# "main:app" means: Look in "main.py" for the "app" object
CMD ["gunicorn", "--bind", ":8080", "--workers", "1", "--threads", "8", "--timeout", "0", "main:app"]