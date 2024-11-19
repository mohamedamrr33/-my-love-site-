// script.js

const messages = [
    "أنتِ حُلمي الذي تحقق.",
    "وجودك في حياتي هو أجمل شيء.",
    "أنتِ في قلبي إلى الأبد.",
    "كل لحظة معك هي لحظة سعادة.",
    "أنتِ نجم في سماء حياتي."
];

const showMessageButton = document.getElementById("showMessageButton");
const messageElement = document.getElementById("message");

showMessageButton.addEventListener("click", function() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.innerText = randomMessage;

    // إضافة تأثير أنيميشن بسيط
    messageElement.style.animation = "fadeIn 1s ease-out";
    setTimeout(() => {
        messageElement.style.animation = "";
    }, 1000);
});
