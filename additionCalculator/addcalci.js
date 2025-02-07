
var box1 = document.getElementById("num1")
var box2 = document.getElementById("num2")
var result1 = document.getElementById("result")

function add() {
    var box1value = Number(box1.value)
    var box2value = Number(box2.value)

    if (isNaN(box1value) || isNaN(box2value)) {
        result1.textContent = "Please enter valid numbers!";
        result1.style.color = "red";
    } else {
        var total = box1value + box2value;
        result1.textContent = "Result: " + total;
        result1.style.color = "#333";
    }
}
