document.addEventListener("DOMContentLoaded", function (e) {
    console.log("documento pronto!");
    document.getElementById('showResults').style.visibility = 'hidden';
});

var arrText;
var arrValues;
var arrNums;
var raiz_;
var indexRaiz_;
var galhoEsq;
var galhoDir;

function gerarArvore() {
    document.getElementById('showResults').style.visibility = 'visible';
    arr = document.getElementById('array').value.toString();
    arrValues = arr.split(",");
    arrNums = arrValues.map(str => { return Number(str); });

    raiz_ = Math.max(...arrNums);
    indexRaiz_ = getIndexRaiz(arrNums, raiz_);

    galhoEsq = gerarGalhoEsquerdo(arrNums, indexRaiz_);
    galhoDir = gerarGalhoDireita(arrNums, indexRaiz_);

    document.getElementById("raiz").value = raiz_;
    document.getElementById("esquerda").value = galhoEsq;
    document.getElementById("direita").value = galhoDir;
    document.getElementById("saida").innerHTML = arrValues;
}

function getIndexRaiz(lista, raiz) {
    var index;
    for (var i = 0; i < lista.length; i++) {
        if (lista[i] == raiz) {
            index = i;
            break;
        }
    }
    return index;
}

function gerarGalhoEsquerdo(lista, index) {
    var pos = [];
    for (var i = 0; i < index; i++) {
        pos.push(lista[i]);
    }
    pos.sort(function (a, b) { return a - b });
    pos.reverse();
    return pos;
}

function gerarGalhoDireita(lista, index) {
    var pos = [];
    for (var i = index + 1; i < lista.length; i++) {
        pos.push(lista[i]);
    }
    pos.sort(function (a, b) { return a - b });
    pos.reverse();
    return pos;
}