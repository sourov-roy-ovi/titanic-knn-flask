#🚢 Titanic Survival Prediction Web App

A complete Machine Learning web application that predicts whether a passenger survived the Titanic disaster uning a **K-Nearest Neighbors (KNN) Classification** deployed with **Flask** and a custom-designed frontend.

---

## Project Highlights

- Machine Learning model trained on the Titanic dataset
- KNN Classification algorithm
- Flask REST API for prediction
- Modern Glassmorphism UI ( HTML, CSS, JavaScript)
- Real-time prediction without page reload
- Beginner-friendly and well-structured code

---

## Tech Stack

### Machine Learning 
- Python
- Seaborn (Titanic Dataset)
- Pandas
- Numpy
- Scikit-learn (KNN Classifier)

### Backend
- Flask
- Joblib

### Frontend
- HTML
- CSS (Custom Glassmorphism Design)
- JavaScript (Fetch API)

---

## Dataset

- Source: Seaborn Titanic Dataset
- Target Variable: 'survived' (0 = Not Survived, 1 = Survived)
- Features usedf:
    - Passenger Class ('pclass)
    - Sex ('sex')
    - Age ('age')
    - Fare ('fare')

---

# Machine learning Workflow

1. Load dataset using Seaborn
2. Data cleaning and preprocessing 
3. Encode categorical features
4. Feature scaling using 'StandardScaler'
5. Train KNN Classification model
6. Evaluate model accuracy
7. Save trained model and scaler using Joblib

---

## How to Run the Project Locally

```bash
pip install -r requirements.txt
python model.py
python app.py
```
# Then open: 
 http://127.0.0.1:5000/

# Output

- Survived 

- Not Survived


## Author 
Sourov Roy

---
## Why is this a good README?
 Short & Clean
 No Unnecessary section 
 No Github clutter
 Beginner level + professional tone

---

## Viva Ready line

> " I built a simple end-to-end machine learning application using KNN and Flask to demonstrate model deployment."

---