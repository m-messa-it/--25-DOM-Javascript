// Отримуємо посилання на елементи DOM
const input1 = document.getElementById("value1");
const input2 = document.getElementById("value2");
const resultElement = document.getElementById("result");
const historyList = document.getElementById("history");

// Функція підрахунку та додавання запису в історію
function calculate() {
    // Зчитуємо значення та перетворюємо на числа
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    // Рахуємо суму
    const sum = num1 + num2;

    // Виводимо результат у span
    resultElement.textContent = sum;

    // Створюємо новий елемент списку для історії
    const newItem = document.createElement("li");
    newItem.textContent = num1 + " + " + num2 + " = " + sum;

    // Додаємо новий запис до історії
    historyList.appendChild(newItem);
}
