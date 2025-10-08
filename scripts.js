document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get and trim form values
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const company = document.getElementById("company").value.trim();
    const role = document.getElementById("role").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate required fields
    if (!firstName || !lastName || !company || !role) {
      showMessage("Please fill in all required fields.", "error");
      return;
    }

    // Log form data to console (simulated submission)
    const formData = { firstName, lastName, company, role, message };
    console.log("Form Data Submitted:", formData);

    // Show success message
    showMessage("Thank you! Your submission was successful.", "success");

    // Reset form fields
    form.reset();
  });

  /**
   * Displays a temporary feedback message below the form.
   * @param {string} text - The message content.
   * @param {string} type - Either "success" or "error".
   */
  function showMessage(text, type) {
    // Remove any existing message
    const existing = document.querySelector(".form-message");
    if (existing) existing.remove();

    // Create message element
    const msg = document.createElement("p");
    msg.textContent = text;
    msg.classList.add("form-message", type === "success" ? "success" : "error");

    // Insert after the form
    form.insertAdjacentElement("afterend", msg);

    // Smoothly scroll message into view (great for mobile UX)
    msg.scrollIntoView({ behavior: "smooth", block: "center" });

    // Fade out and remove message after 4 seconds
    setTimeout(() => {
      msg.classList.add("fade-out");
      msg.addEventListener("transitionend", () => msg.remove());
    }, 4000);
  }
});
