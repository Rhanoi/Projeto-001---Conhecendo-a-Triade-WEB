var copo = document.getElementById("copo");
var botao = document.getElementById("botao");

function EstadoDoCopo(){
    if (copo.getAttribute("src") === "src/imagens/copoCheio.png"){
        copo.src = "src/imagens/copoVazio.png";
        copo.alt = "Copo Vazio";
        botao.value = "Encher copo";
    } else if (copo.getAttribute("src") === "src/imagens/copoVazio.png"){
        copo.src = "src/imagens/copoCheio.png";
        copo.alt = "Copo cheio";
        botao.value = "Esvaziar copo";
    }
}
