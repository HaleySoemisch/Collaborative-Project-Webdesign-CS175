
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Success message and redirection
    alert("You have registered successfully!");
    window.location.href = "personalisedlogin.html"; // Redirect to personalised login page
});
