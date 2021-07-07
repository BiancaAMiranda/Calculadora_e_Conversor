function insert (x) {
    document.calculator.visor.value = document.calculator.visor.value + x;
};
function conta(){ 
    calculo = document.calculator.visor.value;
    document.calculator.visor.value = eval(calculo);

    if ('**' in document.calculator.visor.value){
        document.calculator.visor.value = Math.pow(document.calculator.visor.value[0],document.calculator.visor.value[2]);
    }
};
function limpar (){
    document.calculator.visor.value = " ";
};
function excluir (){
    calculo = document.calculator.visor.value;
    document.calculator.visor.value = calculo.substring(0, calculo.length-1);
};
function percent(){
    variavel = document.calculator.visor.value
    porcento = variavel/100
    document.calculator.visor.value = porcento
}

// DARKMODE
// Variáveis