document.getElementById("runTask1").addEventListener("click", () => {
    const name = document.getElementById("userName").value.trim();
    const age = Number(document.getElementById("userAge").value);
    const job = document.getElementById("userJob").value.trim();
    const programming = document.getElementById("programming").value.split(",").map(s => s.trim()).filter(s => s);
    const softSkills = document.getElementById("softSkills").value.split(",").map(s => s.trim()).filter(s => s);
    const address = document.getElementById("userAddress").value.trim() || null;

    const user = { name, age, job, skills: { programming, softSkills }, address };

    const firstSkill = programming[0] || "Не указано";
    const allSoftSkills = [...softSkills];
    const userAddress = user.address?.length ? user.address : "Адрес не указан";

    document.getElementById("output1").innerText = `
name: ${user.name}, age: ${user.age}, job: ${user.job}
Первый навык программирования: ${firstSkill}
Soft skills: ${allSoftSkills.join(", ")}
Проверка адреса: ${userAddress}
  `;
});

const usersList = document.getElementById("usersList");
const usersArray = [];

function addUserRow() {
    const div = document.createElement("div");
    div.classList.add("user-item");

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Имя";

    const ageInput = document.createElement("input");
    ageInput.placeholder = "Возраст";
    ageInput.type = "number";

    const cityInput = document.createElement("input");
    cityInput.placeholder = "Город (необязательно)";

    div.appendChild(nameInput);
    div.appendChild(ageInput);
    div.appendChild(cityInput);
    usersList.appendChild(div);
}

document.getElementById("addUser").addEventListener("click", addUserRow);
addUserRow();
addUserRow();

document.getElementById("runTask2").addEventListener("click", () => {
    const userItems = usersList.querySelectorAll(".user-item");
    usersArray.length = 0;

    userItems.forEach(div => {
        const name = div.children[0].value.trim();
        const age = Number(div.children[1].value);
        const city = div.children[2].value.trim() || undefined;
        if (name && !isNaN(age)) usersArray.push({ name, age, address: city ? { city } : undefined });
    });

    const processed = usersArray.map(u => ({
        ...u,
        city: u.address?.city ?? "Город не указан"
    }));

    const result = processed.map(u => `${u.name}: ${u.city}`).join("\n");
    document.getElementById("output2").innerText = result;
});

function calculateSum(multiplier, ...numbers) {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    return sum * multiplier;
}

document.getElementById("runTask3").addEventListener("click", () => {
    const multiplier = Number(document.getElementById("multiplier").value);
    const numbers = document.getElementById("numbers").value
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));

    if (!multiplier || numbers.length === 0) {
        alert("Введите multiplier и хотя бы одно число!");
        return;
    }

    const result = calculateSum(multiplier, ...numbers);
    document.getElementById("output3").innerText = `Результат: ${result}`;
});
