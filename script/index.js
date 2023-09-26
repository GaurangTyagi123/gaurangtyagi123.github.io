const observer = new IntersectionObserver((enteries => {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show");
        }
    })
}),{threshold:.2})
const sections = document.querySelectorAll("section");
sections.forEach(ele => {
    observer.observe(ele);
})
const check = document.querySelector("#check");
document.addEventListener("click", e => {
    if (e.target.matches(".hamburger__link")) {
        check.checked = false;
    }
})