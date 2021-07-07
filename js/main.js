// DARKMODE
// Variáveis
var corpo = document.getElementsByTagName('body')[0]
var cabeçalho = document.getElementsByTagName('header')[0]
var title2 = document.getElementsByTagName('h2')[0]
var menu = document.getElementsByTagName('nav')[0]
var link = document.getElementsByTagName('a')[0]
var link2 = document.getElementsByTagName('a')[1]
var link3 = document.getElementsByTagName('a')[2]
var botao = document.getElementsByTagName('button')[0]
var botao1 = document.getElementsByTagName('button')[1]
var darkMode = document.getElementById('darkmode')
var rodape = document.getElementsByTagName('footer')[0]
var butdark = document.getElementsByTagName('label')[0]
var calculadora = document.getElementsByClassName('calculator')[0]
var calculadora0 = document.getElementsByTagName('input')[0]
var calculadora1 = document.getElementsByTagName('input')[1]
var calculadora2 = document.getElementsByTagName('input')[2]
var calculadora3 = document.getElementsByTagName('input')[3]
var calculadora4 = document.getElementsByTagName('input')[4]
var calculadora5 = document.getElementsByTagName('input')[5]
var calculadora6 = document.getElementsByTagName('input')[6]
var calculadora7 = document.getElementsByTagName('input')[7]
var calculadora8 = document.getElementsByTagName('input')[8]
var calculadora9 = document.getElementsByTagName('input')[9]
var calculadora10 = document.getElementsByTagName('input')[10]
var calculadora11 = document.getElementsByTagName('input')[11]
var calculadora12 = document.getElementsByTagName('input')[12]
var calculadora13 = document.getElementsByTagName('input')[13]
var calculadora14 = document.getElementsByTagName('input')[14]
var calculadora15 = document.getElementsByTagName('input')[15]
var calculadora16 = document.getElementsByTagName('input')[16]
var calculadora17 = document.getElementsByTagName('input')[17]
var calculadora18 = document.getElementsByTagName('input')[18]
var calculadora19 = document.getElementsByTagName('input')[19]
var calculadora20 = document.getElementsByTagName('input')[20]
var visor = document.getElementById('visorInput')
var opcao = document.getElementsByTagName('option')[0]
var opcao1 = document.getElementsByTagName('option')[1]
var opcao2 = document.getElementsByTagName('option')[2]
var opcao3 = document.getElementsByTagName('option')[3]
var opcao4 = document.getElementsByTagName('option')[4]
var opcao5 = document.getElementsByTagName('option')[5]

// FUNÇÃO PARA MODIFICAR AS VARIÁVEIS (A MODIFICAÇÃO É FEITA NO CSS)
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('dia')
    corpo.classList.toggle('noite')
    cabeçalho.classList.toggle('noite')
    menu.classList.toggle('noite')
    link.classList.toggle('noite')
    link2.classList.toggle('noite')
    link3.classList.toggle('noite')
    botao.classList.toggle('noite')
    botao1.classList.toggle('noite')
    rodape.classList.toggle('noite')
    butdark.classList.toggle('noite')
    calculadora.classList.toggle('noite')
    calculadora1.classList.toggle('noite')
    calculadora2.classList.toggle('noite')
    calculadora3.classList.toggle('noite')
    calculadora4.classList.toggle('noite')
    calculadora5.classList.toggle('noite')
    calculadora6.classList.toggle('noite')
    calculadora7.classList.toggle('noite')
    calculadora8.classList.toggle('noite')
    calculadora9.classList.toggle('noite')
    calculadora10.classList.toggle('noite')
    calculadora11.classList.toggle('noite')
    calculadora12.classList.toggle('noite')
    calculadora13.classList.toggle('noite')
    calculadora14.classList.toggle('noite')
    calculadora15.classList.toggle('noite')
    calculadora16.classList.toggle('noite')
    calculadora17.classList.toggle('noite')
    calculadora18.classList.toggle('noite')
    calculadora19.classList.toggle('noite')
    calculadora20.classList.toggle('noite')
    visor.classList.toggle('noite')
    opcao.classList.toggle('noite')
    opcao1.classList.toggle('noite')
    opcao2.classList.toggle('noite')
    opcao3.classList.toggle('noite')
    opcao4.classList.toggle('noite')
    opcao5.classList.toggle('noite')
})
// Aumentar ou Diminuir a Letra
window.onload = function() {
    var elementBody = document.querySelector('body');
    var Plus = document.getElementById('plus');
    var Minus = document.getElementById('minus');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var MoreLess = 10;

    // Evento de click para aumentar a fonte
    Plus.addEventListener('click', function(event) {
        fontSize = fontSize + MoreLess;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    Minus.addEventListener('click', function(event) {
        fontSize = fontSize - MoreLess;
        elementBody.style.fontSize = fontSize + '%';
    });
}