document.getElementById('equationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let equation = document.getElementById('equation').value;

    try {
        // Evaluate the equation entered by the user
        let result = eval(equation);
        document.getElementById('resultValue').textContent = result;
    } catch (error) {
        document.getElementById('resultValue').textContent = "Error in equation!";
    }
});

