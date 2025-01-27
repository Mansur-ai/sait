function runCode() {
    const editor = document.getElementById("codeEditor");
    const output = document.getElementById("output");

    try {
        const userCode = editor.value;

        // Пайдаланушы кодын бағалау
        const func = new Function(userCode + "\nreturn c;"); // c айнымалысы нәтиже ретінде күтіледі
        const result = func();

        if (result === 8) { // Дұрыс жауап тексеріледі (5 + 3 = 8)
            output.textContent = "Жарайсың!";
            showNextButton(); // Келесі бетке өту батырмасын көрсету
        } else {
            output.textContent = "Жауап қате. Қайта көріңіз.";
        }
    } catch (error) {
        output.textContent = "Қате: " + error.message;
    }
}

function showNextButton() {
    const content = document.querySelector(".content");

    // Келесі бетке өтетін батырма жасау
    const nextButton = document.createElement("button");
    nextButton.textContent = "Келесі бетке өту";
    nextButton.style.marginTop = "20px";
    nextButton.style.padding = "15px 30px";
    nextButton.style.backgroundColor = "#4CAF50";
    nextButton.style.color = "white";
    nextButton.style.fontSize = "18px";
    nextButton.style.border = "none";
    nextButton.style.borderRadius = "8px";
    nextButton.style.cursor = "pointer";

    // Батырмаға әрекет қосу
    nextButton.onclick = function () {
        window.location.href = "next.html"; // "next.html" деген келесі бетке сілтеме
    };

    content.appendChild(nextButton); // Батырманы контентке қосу
}
