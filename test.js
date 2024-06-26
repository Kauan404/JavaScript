console.log('Hello World');


function defineVelocidade(velocidade) {
    return parseInt(velocidade + (Math.random() * 10) + 1);
}

let carros = [
    { name: "Relampago Marquinhos", velocidade: defineVelocidade(0), distancia: 0 },
    { name: "Opala Preto", velocidade: defineVelocidade(0), distancia: 0 },
    { name: "Uno com escada no teto", velocidade: defineVelocidade(0), distancia: 0 }
];

function atualizaCorrida() {

    let vencedor;

    for (let carro of carros) {

        carro.distancia += defineVelocidade(carro.velocidade);

        if (!vencedor && carro.distancia >= 1000) {
            vencedor = carro.name
        }

        console.log(`${carro.name} - Percorreu uma distância de ${carro.distancia} Km`);

    }

    if (vencedor) {
        console.log(`O vencedor foi ${vencedor}`);
        clearInterval(interval);
    }
    console.log("--------------------------------------------")

}


let interval = setInterval(atualizaCorrida, 100);
