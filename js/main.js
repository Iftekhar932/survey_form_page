// ELEMENTS
const contactForm = document.querySelector(".contact-form");
const fullName = document.querySelector(".full-name");
const emailAddress = document.querySelector(".email-address");
const address = document.querySelector(".address");
const choice = document.querySelector(".choice");
const submit = document.querySelector(".submit-form");
const checkBox = document.querySelector('input[name="number"]');

// FORM DATA SUBMISSION FUNCTION
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let choices = {}; // OBJECT FOR RADIO TYPE DATA STORE
  // COLLECTING RADIO BUTTON VALUES
  document.getElementsByName("number").forEach((radio) => {
    if (radio.checked) {
      choices.firstChoice = radio.value;
    }
  });
  // COLLECTING RADIO BUTTON VALUES
  document.getElementsByName("color").forEach((radio) => {
    if (radio.checked) {
      choices.secondChoice = radio.value;
    }
  });
  // SENDING DATA TO FIRESTORE DATABASE
  db.collection("contact-form")
    .doc()
    .set({
      fullName: fullName.value,
      emailAddress: emailAddress.value,
      address: address.value,
      choices,
    })
    .then(() => {
      contactForm.reset();
    });
});
