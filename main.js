var span = document.querySelector(".up");

window.onscroll = function () {
    if (scrollY >= 150) {
        span.classList.add("show");
    } else {
        span.classList.remove("show")
    }
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}