const form = document.forms.formReg;
const formInputs = document.querySelectorAll(".form__type-input");
const inputNum = formReg.numberVZN;
const inputSender = formReg.sender;
const inputRecipient = formReg.recipient;
const inputDate = formReg.date;
const modal = document.getElementById("modal");

const containOnlyNumber = (string) => {
  return /^\d+$/.test(string);
};

const isDateValid = (string) => {
  return /(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d\s[-]\s(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d/.test(
    string
  );
};

const isFormValid = () => {
  const errorFields = document.querySelectorAll(".form__error");

  return [...errorFields].every((errorField) => {
    return window.getComputedStyle(errorField).display === "none";
  });
};

const redirect = () => {
  window.location.href = "../list/list.html";
};

const toggleErrorMessage = (condition, errorMessages, errorType, inputName) => {
  if (condition) {
    errorMessages.namedItem(errorType).style.display = "none";
    inputName.style.borderColor = "#12B76A";
  } else {
    errorMessages.namedItem(errorType).style.display = "block";
    inputName.style.borderColor = "#f00";
  }
};

formReg.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputNumErrorMessages = inputNum.parentElement.children;
  const inputSenderErrorMessages = inputSender.parentElement.children;
  const inputRecipientErrorMessages = inputRecipient.parentElement.children;
  const inputDateErrorMessages = inputDate.parentElement.children;

  toggleErrorMessage(
    inputNum.value.length <= 20 && inputNum.value.length > 0,
    inputNumErrorMessages,
    "length",
    inputNum
  );

  toggleErrorMessage(
    inputSender.value.length <= 50 && inputSender.value.length > 0,
    inputSenderErrorMessages,
    "length",
    inputSender
  );

  toggleErrorMessage(
    inputRecipient.value.length <= 50 && inputRecipient.value.length > 0,
    inputRecipientErrorMessages,
    "length",
    inputRecipient
  );

  toggleErrorMessage(
    inputDate.value.length > 0,
    inputDateErrorMessages,
    "length",
    inputDate
  );

  toggleErrorMessage(
    containOnlyNumber(inputNum.value),
    inputNumErrorMessages,
    "onlyNum",
    inputNum
  );

  toggleErrorMessage(
    isDateValid(inputDate.value),
    inputDateErrorMessages,
    "dateValid",
    inputDate
  );

  if (isFormValid()) {
    modal.style.display = "block";
    form.style.display = "none";
    setTimeout(() => redirect(), 2000);
  }
});
