const form = document.getElementById("contactForm");

form.addEventListener("submit", async(e) => {
  e.preventDefault();
  let isValid = true;

  const emailField = document.getElementById("email");
  const nameField = document.getElementById("name");
  const messageField = document.getElementById("message");

  // Email validation
  const emailError = emailField.nextElementSibling;
  if (!emailField.value.trim()) {
    emailError.textContent = "Sorry, email is required.";
    emailError.style.display = "block";
    emailError.style.color = "#FF6F5B";
    emailField.style.borderBottom = "1px solid #FF6F5B";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailField.value)) {
    emailError.textContent = "Sorry, invalid format here .";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Name validation
  const nameError = nameField.nextElementSibling;
  if (!nameField.value.trim()) {
    nameError.textContent = "Sorry, your full name is required.";
    nameError.style.display = "block";
    nameError.style.color = "#FF6F5B";
    nameField.style.borderBottom = "1px solid #FF6F5B";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Message validation
  const messageError = messageField.nextElementSibling;
  if (!messageField.value.trim()) {
    messageError.textContent = "Sorry, message request required.";
    messageError.style.display = 'block';
    messageError.style.color = '#FF6F5B';
    messageField.style.borderBottom = '1px solid #FF6F5B';
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    const formData = {
      name: nameField.value.trim(),
      email: emailField.value.trim(),
      message: messageField.value.trim(),
    };

    try {
      // Send data to Google Sheets
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzoGLP7hKC_wI_RsrofvL3mt0oaMHcm6jEIwq1zgi5iqXjcxoJ1tg2BWQmCJbXkJ--PYA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully to Google Sheets!");
        form.reset(); // Clear the form
      } else {
        alert("Failed to submit the form to Google Sheets.");
      }
    } catch (error) {
      console.error("Error submitting data to Google Sheets:", error);
      alert("An error occurred while submitting the form.");
    }
  }
});
