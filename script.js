const luz_vermelha_e1 = document.getElementById("luz_vermelha_e1");
const luz_vermelha_e2 = document.getElementById("luz_vermelha_e2");
const luz_amarela_e = document.getElementById("luz_amarela_e");
const luz_verde_e = document.getElementById("luz_verde_e");

const luz_vermelha_d1 = document.getElementById("luz_vermelha_d1");
const luz_vermelha_d2 = document.getElementById("luz_vermelha_d2");
const luz_amarela_d = document.getElementById("luz_amarela_d");
const luz_verde_d = document.getElementById("luz_verde_d");

function vermelhaE(ligado) {
    if (ligado === "on") {
        luz_vermelha_e1.classList.add("luz_vermelha_ativa");
        luz_vermelha_e2.classList.add("luz_vermelha_ativa");
    } else {
        luz_vermelha_e1.classList.remove("luz_vermelha_ativa");
        luz_vermelha_e2.classList.remove("luz_vermelha_ativa");
    }
}

function amarelaE(ligado) {
    if (ligado === "on") {
        luz_amarela_e.classList.add("luz_amarela_ativa");
    } else {
        luz_amarela_e.classList.remove("luz_amarela_ativa");
    }
}

function verdeE(ligado) {
    if (ligado === "on") {
        luz_verde_e.classList.add("luz_verde_ativa");
    } else {
        luz_verde_e.classList.remove("luz_verde_ativa");
    }
}

function vermelhaD(ligado) {
    if (ligado === "on") {
        luz_vermelha_d1.classList.add("luz_vermelha_ativa");
        luz_vermelha_d2.classList.add("luz_vermelha_ativa");
    } else {
        luz_vermelha_d1.classList.remove("luz_vermelha_ativa");
        luz_vermelha_d2.classList.remove("luz_vermelha_ativa");
    }
}

function amarelaD(ligado) {
    if (ligado === "on") {
        luz_amarela_d.classList.add("luz_amarela_ativa");
    } else {
        luz_amarela_d.classList.remove("luz_amarela_ativa");
    }
}

function verdeD(ligado) {
    if (ligado === "on") {
        luz_verde_d.classList.add("luz_verde_ativa");
    } else {
        luz_verde_d.classList.remove("luz_verde_ativa");
    }
}

let contador = 1;
let esquerdo = true;

setInterval(() => {
    if (esquerdo) {
        if (contador <= 1) {
            verdeE("on");
            vermelhaE("off");
            vermelhaD("on");
        } else if (contador === 10) {
            verdeE("off");
            amarelaE("on");
        } else if (contador === 15) {
            amarelaE("off");
            vermelhaE("on");
        } else if (contador === 22) {
            contador = 0;
            esquerdo = false;
        }
    } else {
        if (contador <= 1) {
            verdeD("on");
            vermelhaD("off");
            vermelhaE("on");
        } else if (contador === 10) {
            verdeD("off");
            amarelaD("on");
        } else if (contador === 15) {
            amarelaD("off");
            vermelhaD("on");
        } else if (contador === 22) {
            contador = 0;
            esquerdo = true;
        }
    }

    contador += 1;
}, 150);
