// function onClickSlide() {
//     document.body.classList.toggle('show-nav');

// }

document.getElementById("toggle").addEventListener("click", onClickSlide);
function onClickSlide() {
    document.body.classList.toggle('show-nav');
}

// document.getElementById("my_button").addEventListener("click", onAllClick);
// document.getElementById("toggle").addEventListener("click", onClickSlide);

// document.getElementById("open").addEventListener("click", showForm);

// function showForm() {
//     document.getElementById("modal").classList.add('show-modal');
// }

function onClickFixed() {
    document.getElementById("fixed_block").style.display = "initial"
    document.getElementById("fade").style.display = "block"
}

function onClickClose1() {
    document.getElementById("fixed_block").style.display = "none"
}

function onClickClose2() {
    document.getElementById("fixed_block").style.display = "none"

}