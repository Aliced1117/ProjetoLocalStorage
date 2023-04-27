var digitado
var placa
var proprietarionome

function carregar() {
    alert("Ola Mundo")
}

localStorage.setItem("EFQ-8H67", "Paulo Eduardo Silva Montier")
localStorage.setItem("FAC-1723", "Jose Carlos")
localStorage.setItem("EGT-3614", "Felipe Canarozzo")
localStorage.setItem("DGJ-7567", "Graciete Herique")

function exibir() {
    var exibir
    digitado = document.getElementById('coletortexto').value
    exibir = localStorage.getItem("FAC-1723")
    alert(exibir)
}

function cadastrar() {
    placa = document.getElementById('placa').value
    proprietarionome = document.getElementById('proprietario').value
alert("SUBMETEU OS DADOS")
    localStorage.setItem(placa, proprietarionome)
    alert("CADASTROU!")
    alert(localStorage.getItem(placa))
}