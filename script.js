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
    const starsContainer = document.getElementById("stars-container");

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 3;

        star.style.left = ${x}px;
        star.style.top = ${y}px;
        star.style.width = ${size}px;
        star.style.height = ${size}px;

        starsContainer.appendChild(star);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars-container");

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 3;

        star.style.left = ${x}px;
        star.style.top = ${y}px;
        star.style.width = ${size}px;
        star.style.height = ${size}px;

        starsContainer.appendChild(star);
    }
});
