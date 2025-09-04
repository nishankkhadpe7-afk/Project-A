// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const emailInput = document.getElementById("email");
    const emailError = emailInput.nextElementSibling;
    const emailregex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailregex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid @gmail.com address.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    const phoneInput = document.getElementById("num");
    const phoneError = phoneInput.nextElementSibling;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
      phoneError.textContent = "Enter a valid 10-digit phone number";
      phoneError.style.display = "block";
      isValid = false;
    } else {
      phoneError.style.display = "none";
    }

    const passInput = document.getElementById("pass");
    const passError = passInput.nextElementSibling;
    if (passInput.value.trim().length < 6) {
      passError.textContent = "Password must be at least 6 characters";
      passError.style.display = "block";
      isValid = false;
    } else {
      passError.style.display = "none";
    }

    if (isValid) {
      alert("🎉 Sign up successful!");
      form.reset();
    }
  });
});
