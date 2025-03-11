document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        document.body.appendChild(heart);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        heart.style.left = x + "px";
        heart.style.top = y + "px";

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }, 200);
});
document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.getElementById("hearts-container");

    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
