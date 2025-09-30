var contador = 1;
var img1 = "img/cookies.jpg";
var img2 = "img/cupcake.jpg";
var img3 = "img/macarons.jpg";
var img4 = "img/milkshake.jpg";
var legenda1 = "Cookie";
var legenda2 = "Cupcake";
var legenda3 = "Macaron";
var legenda4 = "Milkshake";
var tempo = 2000;
var iniciar = setInterval(iniciando, tempo)

function iniciando() {
    if (!document.images)
        return
    else {
        document.getElementById("img").src = eval("img" + contador);
        document.getElementById("legenda").textContent = eval("legenda" + contador);

        contador++
        if (contador > 4) contador = 1
    }
}

function anterior() {
    clearInterval(iniciar);
    contador = contador - 1;
    if (contador < 1) {
        contador = 4
    }
    document.getElementById("img").src = eval("img" + contador);
    document.getElementById("legenda").textContent = eval("legenda" + contador);

    iniciar = setInterval(iniciando, tempo);
}

function proximo() {
    clearInterval(iniciar);
    contador++;
    if (contador > 4) contador = 1;

    document.getElementById("img").src = eval("img" + contador);
    document.getElementById("legenda").textContent = eval("legenda" + contador);

    iniciar = setInterval(iniciando, tempo);
}