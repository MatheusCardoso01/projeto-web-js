let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function () {
    //removeEnventListener precisa de dois argumentos, por isso a function é necessária
    btn1.removeEventListener("click", msg);
});

function msg() {
    console.log("Clicou em mim!");
}
