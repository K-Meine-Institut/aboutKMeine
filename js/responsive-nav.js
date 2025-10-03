document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("main-nav");
    const links = Array.from(nav.querySelectorAll("a"));
    let currentIndex = links.findIndex(a => a.classList.contains("active"));

    function setActive(index) {
        links.forEach(a => a.classList.remove("active"));
        links[index].classList.add("active");
        currentIndex = index;
    }

    function showCurrentOnly() {
        links.forEach((a, i) => {
            a.style.display = (i === currentIndex) ? "inline-block" : "none";
        });
        nav.querySelectorAll(".nav-arrow").forEach(btn => btn.style.display = "inline-block");
    }

    function showAll() {
        links.forEach(a => a.style.display = "");
        nav.querySelectorAll(".nav-arrow").forEach(btn => btn.style.display = "none");
    }

    // Pfeile einfügen
    if (!nav.querySelector(".nav-arrow.left")) {
        const left = document.createElement("button");
        left.innerHTML = "&#8592;";
        left.className = "nav-arrow left";
        left.onclick = function () {
            setActive((currentIndex - 1 + links.length) % links.length);
            showCurrentOnly();
        };
        nav.insertBefore(left, links[0]);
    }
    if (!nav.querySelector(".nav-arrow.right")) {
        const right = document.createElement("button");
        right.innerHTML = "&#8594;";
        right.className = "nav-arrow right";
        right.onclick = function () {
            setActive((currentIndex + 1) % links.length);
            showCurrentOnly();
        };
        nav.appendChild(right);
    }

    function handleResize() {
        if (window.innerWidth <= 600) {
            showCurrentOnly();
        } else {
            showAll();
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
});