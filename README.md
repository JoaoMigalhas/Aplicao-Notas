GRUPO:
Joao Miguel Santos RA: 2511914
Henrique Cordeiro RA:2507350
Mysael Chuff RA:2509494
Emanuel Blummer RA:2409398
# 📘 Sistema de Boletim Escolar – TypeScript

Este projeto é uma aplicação simples em **TypeScript** que permite registrar informações de alunos, calcular suas médias e gerar um **boletim** em formato `.txt`, além de armazenar os dados em um arquivo `.csv`.

---

## 🚀 Funcionalidades

- Solicita:
  - Nome do aluno
  - Série
  - Número de faltas
  - Notas das matérias
- Calcula a **média final** automaticamente
- Gera um **boletim em texto (.txt)** com os dados do aluno
- Salva os registros em um **arquivo CSV** para controle

---

## 🧠 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [readline-sync](https://www.npmjs.com/package/readline-sync)
- [fs (File System)](https://nodejs.org/api/fs.html) – para manipulação de arquivos

---

## 📂 Estrutura do projeto

#### ⚙️ Como rodar o projeto desde o zero

### 1️⃣ Instalar Node.js
Baixe e instale o **Node.js** (versão LTS recomendada) no site oficial:  
👉 [https://nodejs.org/](https://nodejs.org/)

Após a instalação, verifique se deu certo:
```bash
node -v
npm -v

2️⃣ Criar e configurar o projeto

Crie uma pasta para o projeto:

mkdir boletim-alunos
cd boletim-alunos

Inicie o projeto Node:

npm init -y

3️⃣ Instalar as dependências

Instale o TypeScript e o readline-sync:

npm install typescript readline-sync @types/readline-sync --save

4️⃣ Inicializar o TypeScript

Crie o arquivo de configuração:

npx tsc --init

Isso criará o arquivo tsconfig.json.

E copie este tsconfig.json para rodar as instancias adicionais:
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "rootDir": "./ts",
    "outDir": "./js",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node"],
    "lib": ["ES2020"]
  },
  "include": ["ts/**/*", "js/index.js"]
}

5️⃣ Criar o arquivo principal

Crie o arquivo index.ts e adicione o código principal da aplicação (arquivo index.ts).

6️⃣ Compilar e executar

Compile o código TypeScript:

npx tsc

Execute o programa:

node index.js
