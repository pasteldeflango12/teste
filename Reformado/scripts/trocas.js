const btn = document.querySelector(".btn-proximo");

function escolhaOpcao(){
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;
    let certo = "O atrito aconteceu pois Bruno foi amante da namorada de Marcos";
    if(certo === op2){
        console.log('certo');
    }else{
        console.log('errado');
    }
}
btn.addEventListener('click', () => {
    escolhaOpcao();
});
