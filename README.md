# Finalizador de processo no Windows

### Finalidade
Este Script finaliza um determinado processo no Windows, levando em consideração nome do processo e quantidade de memória utilizada pelo processo.

Utiliza os seguintes comandos do Windows, providos de bibliotecas:
 - Tasklist (https://www.npmjs.com/package/tasklist)
 - Taskkill (https://github.com/sindresorhus/taskkill)
 
### Instalação
 - Node.js instalado
 - Clonar repositório em uma pasta
 - Executar comando "npm i" para instalar dependências
 - Executar index.js com "node index.js"
 
### Alterar nome do processo e valor de memória
 - Para finalizar outro processo, basta alterar o valor da variável "process" no início do código
 - Valor máximo de memória está definido na linha 14, em byte (de MB para byte, basta multiplicar por 10^6)
 
### Arquivo Log.txt
- Após finalizado o processo, cria um arquivo de log na raiz do projeto
- Informa data, hora e todas propriedades fornecidas pelo comando tasklist do processo
