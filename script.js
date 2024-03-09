let no = document.getElementById("no");
let noo = document.getElementById("noo");
no.addEventListener("click", hide);
noo.addEventListener("click", hide1);
function hide() {
    noo.style.display = "block";
    no.style.display = "none"
}
function hide1() {
    no.style.display = "";
    noo.style.display = "none"
}
let gay = document.getElementById("gay");
let gayy = document.getElementById("gayy");
let yes = document.getElementById("yes");
yes.addEventListener("click", showImage);
function showImage(){
    gay.style.display = "flex";
    gayy.style.display = "flex";
}
