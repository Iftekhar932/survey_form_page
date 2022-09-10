// contact data
const contactForm = document.querySelector(".contact-form");
const fullName = document.querySelector(".full-name");
const emailAddress = document.querySelector(".email-address");
const choice = document.querySelector(".choice");
const submit = document.querySelector(".submit-form");
const checkBox = document.querySelector('input[name="number"]');

let ifChecked = () => {
  /* document.getElementsByName("number").forEach((radio) => {
    if (radio.checked) {
      invisibleBox.textContent = radio.value;
      console.log(invisibleBox.textContent);
      console.log(radio.value);
    }
  }); */
};

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementsByName("number").forEach((radio) => {
    if (radio.checked) {
      db.collection("contact-form")
        .doc()
        .set({
          fullName: fullName.value,
          emailAddress: emailAddress.value,
          choice: radio.value,
        })
        .then(() => {
          contactForm.reset();
        });
    }
  });
});
