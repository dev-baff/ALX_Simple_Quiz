function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById("feedback");

    // If no option was selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    // Get user's answer
    const userAnswer = selectedOption.value;

    // Compare answers
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
