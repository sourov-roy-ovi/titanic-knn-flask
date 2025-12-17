from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load("models/knn_model.pkl")
scaler = joblib.load("models/scaler.pkl")

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/predict', methods=["POST"])
def predict():
    data = request.get_json()

    pclass = int(data['pclass'])
    sex = int(data['sex'])
    age = float(data['age'])
    fare = float(data['fare'])

    input_data = np.array([[pclass, sex, age, fare]])
    input_scaled = scaler.transform(input_data)

    pred = model.predict(input_scaled)[0]

    result = "Survived" if pred == 1 else "Not Survived"

    return jsonify({"prediction": result})

if __name__ == '__main__':
    app.run(debug=True)