document.addEventListener("DOMContentLoaded", function () {

  /* ===== Mobile nav toggle (hamburger menu) ===== */
  const navToggle = document.getElementById("siteNavToggle");
  const navMobile = document.getElementById("siteNavMobile");

  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMobile.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu whenever a link inside it is tapped.
    navMobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMobile.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close the menu if the person taps/clicks outside of it.
    document.addEventListener("click", function (event) {
      const clickedInsideMenu = navMobile.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);
      if (!clickedInsideMenu && !clickedToggle && navMobile.classList.contains("open")) {
        navMobile.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close the menu on resize back up to desktop width.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && navMobile.classList.contains("open")) {
        navMobile.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ===== Password show/hide ===== */
  document.querySelectorAll(".pw-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      const input = document.getElementById(button.dataset.target);
      const icon = button.querySelector("i");
      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      icon.classList.toggle("fa-eye", !isHidden);
      icon.classList.toggle("fa-eye-slash", isHidden);
      button.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
  });

  /* ===== Registration form ===== */
  const registrationForm = document.getElementById("registrationForm");
  if (!registrationForm) return;

  const alertBox = document.getElementById("regAlert");
  const alertMessage = document.getElementById("regAlertMsg");
  const successBox = document.getElementById("regSuccess");
  const submitButton = document.getElementById("regSubmitBtn");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alertBox.style.display = "none";

    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;
    const email = document.getElementById("regEmail").value.trim().toLowerCase();

    if (password.length < 8) {
      alertMessage.textContent = "Your password must be at least 8 characters.";
      alertBox.style.display = "flex";
      return;
    }
    if (password !== confirmPassword) {
      alertMessage.textContent = "Your passwords do not match.";
      alertBox.style.display = "flex";
      return;
    }

    const member = {
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      studentId: document.getElementById("studentId").value.trim(),
      email: email,
      password: password,
      department: document.getElementById("department").value.trim(),
      level: document.getElementById("level").value,
      genre: document.getElementById("genre").value,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("libraryMember", JSON.stringify(member));
    registrationForm.style.display = "none";
    successBox.style.display = "block";
    submitButton.disabled = true;
  });
});