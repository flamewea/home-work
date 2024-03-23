const calculateShipping = () => {
    let senderFirstName = document.getElementById("senderFirstName").value;
    let senderLastName = document.getElementById("senderLastName").value;
    let senderMiddlName = document.getElementById("senderMiddlName").value;
    let recipientFirstName = document.getElementById("recipientFirstName").value;
    let recipientLastName = document.getElementById("recipientLastName").value;
    let recipientMiddlName = document.getElementById("recipientMiddlName").value;
    let weight = document.getElementById("weight").value;
    let shippingType = document.getElementById("shippingType").value;
    let country = document.getElementById("country").value;
    let shippingCost = 0;

    if (shippingType === "regular") {
        shippingCost = weight * 5; //обычная доставка
        if ((country === "USA" || country === "Canada") && weight <= 5) {
            shippingCost = 0;
        }
        if (weight > 10) {
            shippingCost *=2;
        }
    } else if (shippingType === "express") {
        shippingCost = weight * 10 + 20;
    }

    let modal = document.getElementById("modal");
    let modalContent = document.getElementById("results");
    modalContent.innerHTML = "<p><strong>Отправитель:</strong>" + senderLastName + " " + senderFirstName + " " + senderMiddlName + "</p>" +
    "<p><strong>Получатель:</strong>" + recipientLastName + " " + recipientFirstName + " " + recipientMiddlName + "</p>" +
    "<p><strong>Вес посылки:</strong>" + weight.toFixed(2) + "кг</p>"+
    "<p><strong>Тип доставки:</strong>" + (shippingType === "regular" ? "Обычная" : "Экспресс") + "</p>" +
    "<p><strong>Страна доставки:</strong>" + country + "</p>" +
    "<p><strong>Стоимость доставки:</strong> $" + shippingCost.toFixed(2) + "</p>";
    modal.style.display = "block";
}
const closeModal = () => {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}