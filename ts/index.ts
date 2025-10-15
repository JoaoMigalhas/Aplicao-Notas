//GRUPO:
//Joao Miguel Santos RA: 2511914
//Henrique Cordeiro RA:2507350
//Mysael Chuff RA:2509494
//Emanuel Blummer RA:2409398

import * as readline from "readline-sync"; // importar a biblioteca para solicitar o nome e a serie 
import * as fs from "fs" // importar a biblioteca para manipular os arquivos txt e csv

// criar constantes para ler os dados do aluno: nome, serie e faltas
    const nome = readline.question("Digite o seu nome: "); // criar constante com o nome e falta
    const serie = readline.questionInt("Digite a sua série: ");
    const faltas = readline.questionInt("Quantas faltas você teve?? (maximo: 100) "); //usar questionINT para armazenar apenas numeros


//Requisitando as notas da matéria de matemática e calculando a media

    const atv1_matematica: number  = readline.questionFloat("Digite a nota da primeira atividade de matemática: "); //colocar float por poder ser numero com virgula
    const atv2_matematica: number  = readline.questionFloat("Digite a nota da segunda atividade de matemática: "); 
    const atv3_matematica: number  = readline.questionFloat("Digite a nota da terceira atividade de matemática: "); 
    const prova1_matematica: number = readline.questionFloat("Digite a nota da primeira prova de matemática: ");
    const prova2_matematica: number = readline.questionFloat("Digite a nota da segunda prova de matemática: ");
    const trabalho1_matematica: number = readline.questionFloat("Digite a nota do primeiro trabalho de matemática: ");
    const trabalho2_matematica: number = readline.questionFloat("Digite a nota do segundo trabalho de matemática: ");
    const trabalho3_matematica: number = readline.questionFloat("Digite a nota do terceiro trabalho de matemática: ");

//Média em matemática
const media_matematica: number = ( //calcular a media somando as notas e dividindo pelo numero total (8)
    atv1_matematica +
    atv2_matematica +
    atv3_matematica +
    prova1_matematica +
    prova2_matematica +
    trabalho1_matematica +
    trabalho2_matematica +
    trabalho3_matematica
    ) / 8;

//nota e media em portugues
    const atv1_portugues: number = readline.questionFloat("Digite a nota da primeira atividade de Português: ");
    const atv2_portugues: number = readline.questionFloat("Digite a nota da segunda atividade de Português: ");
    const atv3_portugues: number = readline.questionFloat("Digite a nota da terceira atividade de Português: ");
    const prova1_portugues: number = readline.questionFloat("Digite a nota da primeira prova de Português: ");
    const prova2_portugues: number = readline.questionFloat("Digite a nota da segunda prova de Português: ");
    const trabalho1_portugues: number = readline.questionFloat("Digite a nota do primeiro trabalho de Português: ");
    const trabalho2_portugues: number = readline.questionFloat("Digite a nota do segundo trabalho de Português: ");
    const trabalho3_portugues: number = readline.questionFloat("Digite a nota do terceiro trabalho de Português: ");

    const media_portugues: number = (
        atv1_portugues +
        atv2_portugues +
        atv3_portugues +
        prova1_portugues +
        prova2_portugues +
        trabalho1_portugues +
        trabalho2_portugues +
        trabalho3_portugues
    ) / 8;

//geografia
    const atv1_geografia: number = readline.questionFloat("Digite a nota da primeira atividade de Geografia: ");
    const atv2_geografia: number = readline.questionFloat("Digite a nota da segunda atividade de Geografia: ");
    const atv3_geografia: number = readline.questionFloat("Digite a nota da terceira atividade de Geografia: ");
    const prova1_geografia: number = readline.questionFloat("Digite a nota da primeira prova de Geografia: ");
    const prova2_geografia: number = readline.questionFloat("Digite a nota da segunda prova de Geografia: ");
    const trabalho1_geografia: number = readline.questionFloat("Digite a nota do primeiro trabalho de Geografia: ");
    const trabalho2_geografia: number = readline.questionFloat("Digite a nota do segundo trabalho de Geografia: ");
    const trabalho3_geografia: number = readline.questionFloat("Digite a nota do terceiro trabalho de Geografia: ");

    const media_geografia: number = (
        atv1_geografia +
        atv2_geografia +
        atv3_geografia +
        prova1_geografia +
        prova2_geografia +
        trabalho1_geografia +
        trabalho2_geografia +
        trabalho3_geografia
    ) / 8;

//historia
    const atv1_historia: number = readline.questionFloat("Digite a nota da primeira atividade de História: ");
    const atv2_historia: number = readline.questionFloat("Digite a nota da segunda atividade de História: ");
    const atv3_historia: number = readline.questionFloat("Digite a nota da terceira atividade de História: ");
    const prova1_historia: number = readline.questionFloat("Digite a nota da primeira prova de História: ");
    const prova2_historia: number = readline.questionFloat("Digite a nota da segunda prova de História: ");
    const trabalho1_historia: number = readline.questionFloat("Digite a nota do primeiro trabalho de História: ");
    const trabalho2_historia: number = readline.questionFloat("Digite a nota do segundo trabalho de História: ");
    const trabalho3_historia: number = readline.questionFloat("Digite a nota do terceiro trabalho de História: ");

    const media_historia: number = (
        atv1_historia +
        atv2_historia +
        atv3_historia +
        prova1_historia +
        prova2_historia +
        trabalho1_historia +
        trabalho2_historia +
        trabalho3_historia
    ) / 8;

//quimica
    const atv1_quimica: number = readline.questionFloat("Digite a nota da primeira atividade de Química: ");
    const atv2_quimica: number = readline.questionFloat("Digite a nota da segunda atividade de Química: ");
    const atv3_quimica: number = readline.questionFloat("Digite a nota da terceira atividade de Química: ");
    const prova1_quimica: number = readline.questionFloat("Digite a nota da primeira prova de Química: ");
    const prova2_quimica: number = readline.questionFloat("Digite a nota da segunda prova de Química: ");
    const trabalho1_quimica: number = readline.questionFloat("Digite a nota do primeiro trabalho de Química: ");
    const trabalho2_quimica: number = readline.questionFloat("Digite a nota do segundo trabalho de Química: ");
    const trabalho3_quimica: number = readline.questionFloat("Digite a nota do terceiro trabalho de Química: ");

    const media_quimica: number = (
        atv1_quimica +
        atv2_quimica +
        atv3_quimica +
        prova1_quimica +
        prova2_quimica +
        trabalho1_quimica +
        trabalho2_quimica +
        trabalho3_quimica
    ) / 8;


//verificar se o aluno foi aprovado ou nao
const media_minima = 7; //criar constantes para valor aproado ou reprovado para a media e a falta
const faltas_minima = 75;

const medias: number [] = [ //criar um array que some as medias
    media_quimica,
    media_portugues,
    media_historia,
    media_geografia,
    media_matematica
];

if (faltas > faltas_minima) { //criar a validação aprovada por faltas/nota ou reprovada 
    var statusFinal = "Reprovado por faltas"
} else {
     const reprovadoPorNota = medias.some(media => media < media_minima);

    if (reprovadoPorNota) {
        var statusFinal = "REPROVADO POR NOTA";
    } else {    
        var statusFinal = "APROVADO";
    }
}


//Armazenar em txt e criar um csv

//criar como va ser a visualizacao
const conteudoTxt = ` 
=================================================
BOLETIM DO ALUNO: ${nome} (Série: ${serie})
STATUS FINAL: ${statusFinal}
FALTAS: ${faltas}
=================================================

MÉDIAS POR DISCIPLINA:
- Matemática: ${media_matematica.toFixed(2)}
- Português: ${media_portugues.toFixed(2)}
- Geografia: ${media_geografia.toFixed(2)}
- História: ${media_historia.toFixed(2)}
- Química: ${media_quimica.toFixed(2)}
`;

const nomeArquivoTxt = `boletim_${nome.replace(/\s/g, '_')}.txt`;

try {
    fs.writeFileSync(nomeArquivoTxt, conteudoTxt);
    console.log(`\n✅ Arquivo TXT criado com sucesso: ${nomeArquivoTxt}`);
} catch (err) {
    console.error("❌ Erro ao escrever o arquivo TXT:", err);
}

// --- Criação do conteúdo para o arquivo CSV ---
// Cabeçalho do CSV:
const cabecalhoCsv = "Nome;Série;Faltas;Status;Matemática;Português;Geografia;História;Química\n";

// Dados do Aluno:
const linhaDadosCsv = `${nome};${serie};${faltas};${statusFinal};${media_matematica.toFixed(2)};${media_portugues.toFixed(2)};${media_geografia.toFixed(2)};${media_historia.toFixed(2)};${media_quimica.toFixed(2)}\n`;

const nomeArquivoCsv = 'dados_alunos.csv';

try {
    // Verificar se o arquivo já existe para decidir se inclui o cabeçalho
    let conteudoCsv: string;
    if (!fs.existsSync(nomeArquivoCsv)) {
        conteudoCsv = cabecalhoCsv + linhaDadosCsv;
    } else {
        conteudoCsv = linhaDadosCsv;
    }

    // O 'flag: 'a'' significa 'append' (adicionar), para não sobrescrever dados existentes
    fs.writeFileSync(nomeArquivoCsv, conteudoCsv, { flag: 'a' });
    console.log(`✅ Dados adicionados ao arquivo CSV: ${nomeArquivoCsv}`);
} catch (err) {
    console.error("❌ Erro ao escrever o arquivo CSV:", err);
}
