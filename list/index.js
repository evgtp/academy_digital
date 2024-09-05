const content = document.querySelector(".main__content");

for (let i = 0; i < 10; i++) {
  const element = document.createElement("div");
  const elementTitle = document.createElement("h2");
  const elementParagraphSender = document.createElement("p");
  const elementParagraphRecipient = document.createElement("p");
  const elementParagraphDate = document.createElement("p");

  element.classList.add("main__element");
  elementTitle.classList.add("main__element--title");
  elementParagraphSender.classList.add("main__element--paragraph");
  elementParagraphRecipient.classList.add("main__element--paragraph");
  elementParagraphDate.classList.add("main__element--paragraph");

  elementTitle.textContent = "ВЗН №7063041";
  element.appendChild(elementTitle);

  elementParagraphSender.innerHTML = "<strong>Отправитель:</strong> Цех 01";
  element.appendChild(elementParagraphSender);

  elementParagraphRecipient.innerHTML = "<strong>Получатель:</strong> Цех 02";
  element.appendChild(elementParagraphRecipient);

  elementParagraphDate.innerHTML = "<strong>Дата выдачи:</strong> 15.06.2024";
  element.appendChild(elementParagraphDate);

  content.appendChild(element);
}
