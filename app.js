const card = document.querySelectorAll(".card");

card.forEach(card => {
    card.addEventListener("click",() => {
        removeon();
        card.classList.add("on");
    })
})

function removeon() {
    card.forEach(card => {
        card.classList.remove("on");
    })
}