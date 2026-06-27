

var pl = document.querySelector(".pl");
var pm = document.querySelector(".pm");
function showpop() {
    pl.style.display = "block";
    pm.style.display = "block";


}
function cancelpop() {
    pl.style.display = "none";
    pm.style.display = "none";


}
var c = document.querySelector(".c");
var btInput = document.getElementById("bt");
var anInput = document.getElementById("an");
var desInput = document.getElementById("des");


function addetail() {
    var bt = btInput.value;
    var an = anInput.value;
    var des = desInput.value;

    if (!bt || !an || !des) {
        alert("Fill all fields");
        return;
    }

    var div = document.createElement("div");
    div.setAttribute("class", "bkc");
    div.innerHTML = `<h2>${bt}</h2>
            <br>
            <h5>${an}</h5>
            <br>
            <p>${des}</p>
            <br>
            <button class="del" onclick="dele(event)">Delete</button>`;
    c.append(div);

    btInput.value = "";
    anInput.value = "";
    desInput.value = "";
}
function dele(event) {
    event.target.parentElement.remove();


}
