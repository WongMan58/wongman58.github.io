const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-text");
const header = document.getElementsByTagName('header')[0];

for (const thumbnail of thumbnails) {
    thumbnail.addEventListener("click", function() {
        modal.style.display = "block";
        modal.classList.add("show");
        modalImg.src = thumbnail.getAttribute("full");
        modalText.querySelector("p").textContent = thumbnail.getAttribute("description");
        modalText.querySelector("p2").textContent = thumbnail.getAttribute("sources");
        document.body.style.overflow = "hidden";
        header.style.overflow = "hidden";
        modalImg.style.overflow = "scroll";
        modalText.style.overflow = "scroll";
    });
}

modal.addEventListener("click", function(e) {
    if (e.target !== modalImg && e.target !== modalText) {
        modal.classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
        }, 200);
        document.body.style.overflow = "scroll";
        header.style.overflow = "scroll";
        modalImg.style.overflow = "hidden";
        modalText.style.overflow = "hidden";
    }
});