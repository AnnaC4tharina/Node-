comando para iniciar um projeto novo !!!


npm init  

npm install -g typescript

Em seguida vamos cria um, arquivo de configuração do typescript
do comando tsc --init
	
====================================================================================
COMANDO PRA QUEM DEU ERRO KRALHO :)
npx tsc --init
sera criado um arquivo ts config, um arquivo de configuração do typescript
====================================================================================
linha 30  Deixar o Module resolution sem a / 
linha 29 tirar o // do root e colocar SCR
linha 52 out dir tirar // e colocar dist
===================================================================================
Em seguida vamos instalar a independencia são bibliotecas de outros programadores para o nosso projeto

npm install --save-dev @types/node

criar uma pastinha src 

===================================================================================
Em seguida criar uma pasta nova chamada src, 
dentro da pastinha src criar um arquivo (PASTA) e criar um arquivo index.ts

==================================================================================
Em seguida fazer instalacao do nodemon 

nodemon src/index.ts

("start-dev":"nodemon src/index.ts") Anna

("loud-dev":"nodemon src/index.ts") Guilherme