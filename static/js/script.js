console.log("JS LOADED SUCCESSFULLY");

function predict() {

    const pclass = document.getElementById("pclass").value;
    const sex = document.getElementById("sex").value;
    const age = document.getElementById("age").value;
    const fare = document.getElementById("fare").value;

    console.log("Button clicked", pclass, sex, age, fare);

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pclass: pclass,
            sex: sex,
            age: age,
            fare: fare
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from Flask:", data);

        const result = document.getElementById("result");
        result.innerText = data.prediction;

        if (data.prediction.includes("Survived")) {
            result.style.color = "#00ff99";
        } else {
            result.style.color = "#ff4d4d";
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
}
