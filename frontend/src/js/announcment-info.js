
const description = document.querySelector(".info__description"),
      descHeader = description.querySelector(".desc__header");

descHeader.addEventListener('click', () => {
    var descContent = document.getElementById("desc_content");
    var arrow = descHeader.querySelector(".desc__header__img");
    if (descContent.style.display === "none" ) {
        descContent.style.display = 'flex';
        arrow.style.transform = "rotate(180deg)";
    } else {
        descContent.style.display = 'none';
        arrow.style.transform = "";
    }
})