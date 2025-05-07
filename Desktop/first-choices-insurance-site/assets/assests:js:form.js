// form.js - Handles contact form submission via Formspree
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const action = form.action;

    status.innerHTML = "Sending...";

    try {
      const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status.innerHTML = "Thanks for your message!";
        form.reset();
      } else {
        status.innerHTML = "Oops! Something went wrong.";
      }
    } catch (error) {
      console.error(error);
      status.innerHTML = "Oops! There was a problem.";
    }
  });
});
