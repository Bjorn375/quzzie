document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");

    if (quizForm) {
        const quizNaam = quizForm.getAttribute("data-quiz");

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
                q10: document.querySelector('input[name="q10"]:checked')?.value || "",
            };

            localStorage.setItem(quizNaam, JSON.stringify(antwoorden));
            localStorage.setItem("laatsteQuiz", quizNaam); 
            window.location.href = "../resultaatscherm/index.html";
        });
    }

    const resultaat = document.getElementById("resultaat");
    if (resultaat) {
        const laatsteQuiz = localStorage.getItem("laatsteQuiz");
        let antwoorden = JSON.parse(localStorage.getItem(laatsteQuiz)) || {};
        
        const juisteAntwoorden = {
            quiz1: { q1: "b", q2: "a", q3: "c", q4: "b", q5: "b", q6: "b", q7: "b", q8: "waar", q9: "nietwaar", q10: "b" },
            quiz2: { q1: "a", q2: "nietwaar", q3: "a", q4: "b", q5: "c", q6: "c", q7: "waar", q8: "b", q9: "b", q10: "a" },
            quiz3: { q1: "b", q2: "waar", q3: "a", q4: "b", q5: "b", q6: "c", q7: "waar", q8: "a", q9: "c", q10: "nietwaar" }
        };

        let score = 0;
        let quizAntwoorden = juisteAntwoorden[laatsteQuiz];

        if (quizAntwoorden) {
            if (antwoorden.q1 === quizAntwoorden.q1) score++;
            if (antwoorden.q2 === quizAntwoorden.q2) score++;
            if (antwoorden.q3 === quizAntwoorden.q3) score++;
            if (antwoorden.q4 === quizAntwoorden.q4) score++;
            if (antwoorden.q5 === quizAntwoorden.q5) score++;
            if (antwoorden.q6 === quizAntwoorden.q6) score++;
            if (antwoorden.q7 === quizAntwoorden.q7) score++;
            if (antwoorden.q8 === quizAntwoorden.q8) score++;
            if (antwoorden.q9 === quizAntwoorden.q9) score++;
            if (antwoorden.q10 === quizAntwoorden.q10) score++;
            resultaat.textContent = `Je score voor ${laatsteQuiz} is ${score} / 10`;
        } else {
            resultaat.textContent = "Geen quiz gemaakt.";
        }
    }
});
