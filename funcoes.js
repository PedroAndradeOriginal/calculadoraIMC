let imc = document.querySelector("h1");
let descricao = document.querySelector("h2");
const botao = document.querySelector("button");
let rodape = document.querySelector("footer");
let resultadoFinal = ""

botao.addEventListener('click', processar, false);

function processar() {
    numeroImc = gerarNumero();
    if (numeroImc < 18.5) {
        resultadoFinal = "Voce esta abaixo de seu peso.";
        dicas = "Nesse ponto, o corpo magro deixa de ser saudável e o organismo fica mais vulnerável a infecções. Se o baixo peso persistir, mesmo com alimentação normal, procure ajuda médica; a dificuldade para engordar pode ser sintoma de alguma doença insidiosa, como o diabetes."
    }
    if (numeroImc >= 18.5 && numeroImc <= 24.9) {
        resultadoFinal = "Parabens!!! Voce esta no seu peso ideal.";
        dicas = "Seu peso está adequado à altura. É importante manter a educação alimentar e a atividade física. Fique atento caso seu valor esteja perto dos limites para os estágios de Baixo Peso ou Sobrepeso.";
    }
    if (numeroImc >= 25 && numeroImc <= 29.9) {
        resultadoFinal = "Você está acima de seu peso (sobrepeso).";
        dicas = "Esta faixa indica que você está com predisposição à obesidade; dependendo do seu histórico familiar e pessoal, pode haver um quadro de pré-diabetes e hipertensão. Procure orientação médica para evitar o próximo estágio, Obesidade 1. Quanto mais quilos extras, maior a dificuldade para emagrecer.";
    }
    if (numeroImc >= 30 && numeroImc <= 34.9) {
        resultadoFinal = "Você está com obesidade grau I.";
        dicas = "O risco de desenvolver diabetes, para quem está nesta faixa de peso, é de 20%, e o de hipertensão ultrapassa 25%. Há risco maior de outras doenças cardiovasculares, articulares, distúrbios psiquiátricos, apneia do sono e até certos tipos de câncer.";
    }
    if (numeroImc >= 35 && numeroImc <= 39.9) {
        resultadoFinal = "Você está com obesidade grau II (severa).";
        dicas = "O risco de desenvolver diabetes chega a 40%, e a chance de surgirem doenças associadas à obesidade, como reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares pode chegar a 50%. Procure orientação médica.";
    }
    if (numeroImc > 40) {
        resultadoFinal = "Você está com obesidade grau III (PROCURE UM MÉDICO).";
        dicas = "O risco de desenvolver doenças associadas ao excesso de peso, como diabetes, reumatismos, câncer, apneia do sono, hipertensão e outros problemas cardiovasculares chega a até 90%. Nesse estágio, a cirurgia de redução do estômago pode ser indicada. Procure orientação médica imediatamente.";
    }

    imc.innerHTML = numeroImc;
    descricao.innerHTML = resultadoFinal;
    rodape.innerHTML = dicas;
}

function gerarNumero() {
    let peso = document.querySelector('#peso').value.replace(",", ".");
    let altura = document.querySelector('#altura').value.replace(",", ".");
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    let resultado = peso / (altura * altura);
    return resultado.toFixed(2);
}
