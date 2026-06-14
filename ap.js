var name = prompt("Введіть назву гри:");

var digitCount = 0;

for (var i = 0; i < name.length; i++) {
    if (name[i] >= '0' && name[i] <= '9') {
        digitCount++;
    }
}

if (name.length >= 4 && name.length <= 10 && digitCount <= 1) {
    alert("Назва гри: " + name);

    var budget;

    while (true) {
        budget = prompt("Введіть бюджет гри:");

        var isNumber = true;

        for (var i = 0; i < budget.length; i++) {
            if (budget[i] < '0' || budget[i] > '9') {
                isNumber = false;
                break;
            }
        }

        if (isNumber && budget.length > 0) {
            break;
        } else {
            alert("Помилка! Вводьте тільки цифри.");
        }
    }

    alert("Гра: " + name + "\nБюджет: " + budget + "$");

} else {
    alert("Треба 4-10 символів і не більше 1 цифри, повторіть спробу");
}