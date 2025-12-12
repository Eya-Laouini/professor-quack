gcloud run deploy professor-quack   --source .   --region europe-west1   --allow-unauthenticated
gcloud projects add-iam-policy-binding professor-quack-agent   --member=serviceAccount:1060337103276-compute@developer.gserviceaccount.com   --role=roles/editor
gcloud run deploy professor-quack   --source .   --region europe-west1   --allow-unauthenticated
gcloud run deploy professor-quack   --source .   --region us-central1   --allow-unauthenticated
gcloud run deploy professor-quack   --source .   --region europe-west1   --allow-unauthenticated
cd backend
gcloud run deploy professor-quack-api --source . --region europe-west1 --allow-unauthenticated
cd ../frontend/
touch .env.local
ls
cd ~/professor-quack/frontend
nanao .env.local
nano .env.local
npm install
npm audit
npm audit fix --force
npm run dev
gcloud run deploy professor-quack   --source .   --region europe-west1   --allow-unauthenticated
gcloud run deploy professor-quack   --source .   --region europe-west1   --allow-unauthenticated
gcloud info --run-diagnostics
gcloud run deploy professor-quack   --source .   --region europe-west1   --allow-unauthenticated
cd ..
gcloud run deploy professor-quack   --source .   --region europe-west1   --allow-unauthenticated
gcloud run deploy professor-quack --source . --region europe-west1 --allow-unauthenticated
mkdir -p static
mkdir -p templates
ls
cd static
ls
touch index.html
ls
nano index.html
cd ..
cd templates
cd ..
cd static
mv index.html
ls
rm index.html
ls
touch sytle.css
nano style.css
ls
nano script.js
ls
cd ..
cd templates/
ls
nano index.html
ls
cd ..
gcloud run deploy professor-quack --source . --region europe-west1 --allow-unauthenticated
cd ~/professor-quack
ls
git init
git config --global user.email laouinieya3@gmail.com
git config --global user.name Eya-Laouini
nano .gitignore
git add
