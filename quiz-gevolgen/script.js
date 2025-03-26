document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");

    if (quizForm) {
        quizForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let antwoorden = {
                q1: document.querySelector('input[name="q1"]:checked')?.value || "",
                q2: document.querySelector('input[name="q2"]:checked')?.value || "",
                q3: document.querySelector('input[name="q3"]:checked')?.value || "",
                q4: document.querySelector('input[name="q4"]:checked')?.value || "",
                q5: document.querySelector('input[name="q5"]:checked')?.value || "",
                q6: document.querySelector('input[name="q6"]:checked')?.value || "",
                q7: document.querySelector('input[name="q7"]:checked')?.value || "",
                q8: document.querySelector('input[name="q8"]:checked')?.value || "",
                q9: document.querySelector('input[name="q9"]:checked')?.value || "",
                q10: Array.from(document.querySelectorAll('input[name="q10"]:checked')).map(el => el.value)
            };

            localStorage.setItem("quizAntwoorden", JSON.stringify(antwoorden));
            window.location.href = "../resultaatscherm/index.html";
        });
    }
});