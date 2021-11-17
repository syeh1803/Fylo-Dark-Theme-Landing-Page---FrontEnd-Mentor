const form = document.querySelector("#form");
const button = document.querySelector("#button");
const errorMessage = document.querySelector(".error-message");
const email = document.querySelector("#email");

// regex for email validation
const isValidEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listener
form.addEventListener("submit", (e) => {
    // prevent browser default
    e.preventDefault();

    const emailValue = email.value.trim();
    if (!isValidEmail(emailValue)) {
      // show invalid
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
})