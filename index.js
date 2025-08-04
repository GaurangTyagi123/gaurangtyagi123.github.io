const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navbar__list__hamburger");
hamburger.addEventListener("click", () => {
    const flag = hamburger.getAttribute("data-active");
    if (flag === "false") {
        hamburger.setAttribute("data-active", true)
        list.style.right = 0
    }
    else {
        hamburger.setAttribute("data-active", false)
        list.style.right = '-100%'
    }
})
list.addEventListener("click", (e) => {
    if (e.target.matches(".navbar__listlink")) {
        list.style.right = '-100%'
        hamburger.setAttribute("data-active", false)
    }
})
document.addEventListener("mouseover", e => {
    // console.log(e.target)
    if (e.target.matches(".projects__project__imageForeground")) {
        if (!e.target.nextElementSibling.getAttribute("src").endsWith(".gif")) {
            const currentSrc = e.target.nextElementSibling.getAttribute("src")
            e.target.nextElementSibling.setAttribute("src", currentSrc.replace(/\.[A-Za-z]{3,4}/, ".gif"))
            return;
        }
    }
})
document.addEventListener("mouseout", e => {
    if (e.target.matches(".projects__project__imageForeground")) {
        if (e.target.nextElementSibling.getAttribute("src").endsWith(".gif")) {
            const currentSrc = e.target.nextElementSibling.getAttribute("src")
            e.target.nextElementSibling.setAttribute("src", currentSrc.replace(/\.[A-Za-z]{3,4}/, ".png"))
            return;
        }
    }
})