const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result");
    console.log(height);
    console.log(weight);

    if (height === " " || height < 0 || isNaN(height)) {
        result.innerHTML = "invalid height";
    } else if (weight === " " || weight < 0 || isNaN(weight)) {
        result.innerHTML = "invalid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `your bmi value is: ${bmi}`;
        // Display custom alert
        let alertMessage = "";
        if (bmi < 18.6) {
            alertMessage = "you are under weight";
        } else if (bmi > 24.9) {
            alertMessage = "you are overweight";
        } else {
            alertMessage = "congratulation you are under range";
        }
        showAlert(alertMessage);
    }
});

function showAlert(message) {
    const modal = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    alertMessage.textContent = message;
    modal.style.display = "block";

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
