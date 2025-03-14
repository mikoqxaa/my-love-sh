document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.getElementById("hearts-container");

    if (!heartsContainer) {
        alert("Элемент hearts-container не найден!");
        return;
    }

    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        heart.style.left = ${x}px;
        heart.style.top = ${y}px;
        heart.style.fontSize = ${Math.random() * 30 + 20}px;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

    setInterval(createHeart, 300);
});
</body>
