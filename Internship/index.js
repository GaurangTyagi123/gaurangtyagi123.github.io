const observer = new IntersectionObserver((enteries => {
    let tab;
    enteries.forEach(entry => {
        if (entry.target.matches("#education")) {
            entry.target.classList.add("animate")
        }
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            tab = document.querySelector(`.college li:has(a[href="#${entry.target.id}"`)
            if (tab) {
                tab.classList.add("college__list__item--active")
            }
        }
        else {
            if (entry.target.matches("#education"))
                entry.target.classList.remove("animate")
            entry.target.classList.remove("show");
            tab = document.querySelector(`.college li:has(a[href="#${entry.target.id}"`);
            if (tab)
                tab.classList.remove("college__list__item--active")
        }
    })
}), { threshold: .2 })
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