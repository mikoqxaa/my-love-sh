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