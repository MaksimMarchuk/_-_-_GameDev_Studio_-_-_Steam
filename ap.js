var company = prompt("Введіть назву компанії:");
var game = prompt("Введіть назву гри:");
var budget = prompt("Введіть бюджет гри:")

if (company.length === 0) {
    alert("Введіть назву компанії!");
}
else if (game.length < 4 || game.length > 11) {
    alert("Назва гри повинна містити 4-10 літер і максимум 1 цифру!");
}
else {
    alert(
        "Назва вашої компанії: " + " " + " " + company + " " +
        "Назва вашої гри: " +  " "  + " " + game +  " " +
        "Бюджет вашой гри:" +   " " +  " " + budget + "$"   
    );
}
if (budget < 100) {
    alert("Занадто малий бюджет");
}
else  {
    (budget >= 10000)
    alert("Занадто багатий бюджет")
}

var digits = 0;

for (var i = 0; i < game.length; i++) {
    if (!isNaN(game[i]) && game[i] !== " ") {
        digits++;
    }
}

if (game.length < 4 || game.length > 10 || digits > 1) {
    alert("Назва гри повинна містити 4-10 символів і максимум 1 цифру!");
}

for (var i = 0; i < company.length; i++) {
    if (!isNaN(company[i]) && company[i] !== " ") {
        digits++;
    }
}

if (company.length < 4 || company.length > 10 || digits > 1) {
    alert("Назва гри повинна містити 4-10 символів і максимум 1 цифру!");
}