

var input = document.getElementById("input");
var tableBody = document.getElementById("table-body");

function add()
 {
    if (input.value.trim() === "") {
        alert("Please enter a task!")
        return;
        }
    // Create a new row
    var row = document.createElement("tr")

    // First column - Task text
    var taskCell = document.createElement("td")
    taskCell.textContent = input.value;
    
    // Second column - Delete button
    var deleteCell = document.createElement("td")
    var deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.className = "delete-btn"
    deleteButton.onclick = function () {
        row.remove()
    }

    deleteCell.appendChild(deleteButton)
    row.appendChild(taskCell);
    row.appendChild(deleteCell)

    // Append row to the table
    tableBody.appendChild(row)

    // Clear input field
    input.value = ""
}
