//FUNÇÃO PARA REALIZAR O CÁLCULO DA CONVERSÃO
function mostraResultado() {  
    var valorUsuario = parseFloat(document.getElementById('valor').value);
    var moeda2 = parseFloat(document.getElementById('moeda2').value);
    var conversao = 0;
    var nomeMoeda = 0;

    //CONDIÇÃO PARA DEFINIR QUAL A MOEDA SERÁ EXIBIDA NO VALOR FINAL
    if(moeda2 == 0.20){
        nomeMoeda = "&#36;";
    }else if(moeda2 == 0.17){
        nomeMoeda = "&#8364;";
    }

    //CONDIÇÕES PARA QUE O CÁLCULO SEJA REALIZADO
    if(valorUsuario<0 || isNaN(valorUsuario)){ //não pode ser número negativo ou letra
        alert("Hey! Não vale digitar letras nem número menores que zero, tá?");
        document.getElementById('resultado').innerHTML = (("Digite um número maior que zero").fontcolor('brown'))
        
    }else if(valorUsuario==moeda2 || valorUsuario==0 || valorUsuario=="" || moeda2==""){ //não pode selecionar duas moedas iguais, nem deixar o campo valor em branco e nem deixar de selecionar alguma moeda
        alert("Você precisa digitar um valor e escolher moedas diferentes");
        document.getElementById('resultado').innerHTML = (("Tente de novo, digite um valor e selecione as duas moedas diferentes.").fontcolor('brown'))

    }else{ //se passar pelas condições, faz o calculo e exibe o resultado
        conversao = (valorUsuario * moeda2).toFixed(2)         
        document.getElementById('resultado').innerHTML = nomeMoeda+" "+conversao //substitui no html o id "resultado" pelo valor obtido na conversão com a moeda selecionada pelo usuário
        document.getElementById('resultado').style.fontSize = "1em";
    }
}
//Função para conversão de temperatura
function mostraTemperatura() {  
    var valorCelsius = parseFloat(document.getElementById('temp').value);
    var temp2 = parseFloat(document.getElementById('temp2').value);
    var convTemp = 0;
    var nomeTemp = 0;

    //CONDIÇÃO PARA DEFINIR QUAL TEMPERATURA SERÁ EXIBIDA NO VALOR FINAL
    if(temp2 == 32){
        nomeTemp = "°F";
        convTemp = 32 + (1.8 * valorCelsius)
    }else if(temp2 == 273){
        nomeTemp = "K";
        convTemp = 273 + valorCelsius
    }

    //CONDIÇÕES PARA QUE O CÁLCULO SEJA REALIZADO
    if(isNaN(valorCelsius)){ //não pode ser letra
        alert("Hey! Não vale digitar letras, tá?");
        
    }else{ //se passar pelas condições, faz o calculo e exibe o resultado         
        document.getElementById('resultado2').innerHTML = convTemp+" "+nomeTemp //substitui no html o id "resultado" pelo valor obtido na conversão com a temperatura selecionada pelo usuário
        document.getElementById('resultado').style.fontSize = "1em";
    }
}