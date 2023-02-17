const instrelement = document.getElementById("insturction-text");
const instr = document.querySelector('.instr');

const analogielement = document.getElementById("analogi-text");
const analogi = document.querySelector('.analogi');

function instrButtonClick() {
   instrelement.scrollIntoView({block: "center", behavior: "smooth"});
}

function analogiButtonClick() {
   analogielement.scrollIntoView({block: "center", behavior: "smooth"});
}

instr.addEventListener("click", instrButtonClick)

analogi.addEventListener("click", analogiButtonClick)