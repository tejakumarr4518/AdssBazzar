  // Make sure to include the EmailJS library in your HTML file with a <script> tag, not here.

  (function () {
    emailjs.init("RHg3rzEFV3XlNe5FB"); // Replace with your Public Key
  })();

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent normal form submit

      // Send email using EmailJS
      emailjs.sendForm("service_v69pqrs", "template_v58bslm", form).then(
        function (response) {
          alert("✅ Email sent successfully!");
          form.reset();
        },
        function (error) {
          alert("❌ Failed to send email. Error: " + JSON.stringify(error));
        }
      );
    });
  });
