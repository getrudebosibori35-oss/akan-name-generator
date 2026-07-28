const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];
// female akan names for each day of the week  [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];
// listen for the form submission
document.getElementById("akanForm").addEventListener("submit", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();
// Get user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const gender = document.querySelector('input[name="gender"]:checked');

    if (day < 1 || day > 31) {
        alert("Enter a valid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Enter a valid month.");
        return;
    }

    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    const date = new Date(year, month - 1, day);
    const weekDay = date.getDay();

    let akanName;

    if (gender.value === "male") {
        akanName = maleNames[weekDay];
    } else {
        akanName = femaleNames[weekDay];
    }

    document.getElementById("result").textContent =
        "Your Akan name is " + akanName;
});