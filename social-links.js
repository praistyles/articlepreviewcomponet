const socialBtn = document.querySelector('.js-button');
const socialCont = document.getElementById('container');
socialCont.style.display = "none"

socialBtn.addEventListener('click', () => {
    if (socialCont.style.display === "none") {
        socialCont.style.display = "grid"
    } else {
        socialCont.style.display = "none"
    }
})
