<h1 align="center">
    Desafio Eduzz
</h1>

### Sobre o Desafio

Usar o Playwright para pesquisar no google a palavra Eduzz e verificar se o resultado do site www.eduzz.com 
tem o texto ```"O Ecossistema Completo para Vender e Ensinar Online"```

Regras:
- Deve - se usar nossas [boas práticas](https://github.com/GustavoMachado22/desafio-eduzz/files/13964234/BOAS.PRA_TICAS.NA.AUTOMAC_A_O.DE.TESTES.docx) como padrão
- Faça um bom readme para conseguir rodar os seus testes
- Será avaliado o padrão de projeto e a estrutura dos testes

<h1 align="center">
Estrutura do projeto
</h1>

O projeto foi desenvolvido utilizando o framework `Playwright`,
criando teste que simula o comportamento do usuário final.

#### Organização do Projeto
```ruby
    ├── .github                   
        ├── gitflows          # Arquivos do Github Actions para executar o CI.
    ├── e2e-playwright-lib    # Diretório para armazenar o projeto de teste. 
        ├── helpers           # Importado do projeto base - Não utilizado.
        ├── page              # Diretório onde ficam todas as funções utilizadas nos testes, subdividida em subpastas. 
        ├── playwright-report # Diretório onde ficam os logs dos testes.
        ├── reportes          # Importado do projeto base - Não utilizado.       
        ├── tests             # Diretório para armazernar os cenários de testes, subdividida em subpastas.
        ├── dockerfile        # Contém as instruções utilizadas para criar uma imagem Docker.
        ├── index.ts          # Exporta outros módulos para que eles possam ser importado         
    └── README.md             # Documentação do projeto
```
    
 ### Arquitetura do projeto   
![Flow Eduzz](https://github.com/GustavoMachado22/desafio-eduzz/assets/64233343/4294cba5-2c30-49d8-90bf-084076c06a90)


### Por quê utilizar o Playwright?
Playwright é uma excelente ferramenta para testes de ponta a ponta em navegadores da web. Aqui estão algumas razões pelas quais você pode querer usar o Playwright:

 - Suporte para múltiplos navegadores: Playwright suporta testes em vários navegadores, incluindo Chrome, Firefox, Safari e WebKit.

 - API consistente entre navegadores: Playwright fornece uma única API consistente para automatizar todos os navegadores, permitindo que você escreva seus testes uma vez e os execute em qualquer navegador.

 - Recursos avançados de automação: Playwright suporta uma ampla gama de automações, incluindo cliques, preenchimento de formulários, rolagem, navegação, arrastar e soltar, upload de arquivos, e muito mais.

 - Suporte para cenários modernos da web: Playwright tem excelente suporte para cenários modernos da web, incluindo Single Page Apps, Progressive Web Apps, server-side rendered apps e mobile web testing.

 - Manipulação de rede: Playwright permite interceptar e modificar atividades de rede, permitindo que você teste diferentes cenários de rede e segurança.

 - Detecção confiável de carregamento de página: Playwright pode esperar automaticamente até que o DOM esteja pronto, reduzindo a flakiness dos testes.

 - Testes em paralelo: Playwright suporta a execução de testes em paralelo para acelerar a execução do teste.

 - Captura de tela e gravação de vídeo: Playwright pode capturar screenshots e gravar vídeos dos testes, o que pode ser útil para depuração e documentação.
 

<h1 align="center">
Configurando o projeto 
</h1>

### Dependências para executar localmente

- Ter uma IDE de sua preferência
- Instalar nodejs: [Download](https://nodejs.org/en/download/current)
- Playwright


<h1 align="center">
Executando o projeto
</h1>

> Clone o projeto
``` ruby
git clone https://github.com/GustavoMachado22/desafio-eduzz.git
cd e2e-playwright-lib
npm install
```

> Instalar Playwright
``` ruby
npx playwright install
```
> Instalar pacote npm
``` ruby
npm i @eduzz/e2e-playwright-base
```

## Instruções de execução 
Use os comandos listados abaixo no terminal, no diretorio e2e-plawright-lib:

> Executar o teste e gerar relatório html
``` ruby
npx playwright test --reporter=html
```

> Executar com modo UI
``` ruby
npx playwright test --ui
```

<h1 align="center">
 Execução com docker
</h1>

## Dependências para executar com docker
- Ter uma IDE de sua preferência
- Instalar Docker Desktop:  [Download](https://www.docker.com/products/docker-desktop/)
  
> Clone o projeto
``` ruby
git clone https://github.com/GustavoMachado22/desafio-eduzz.git
cd e2e-playwright-lib
npm install
```
## Instruções de execução com docker
Use os comandos listados abaixo no terminal, no diretorio e2e-plawright-lib:

> Executar o Build do container e o teste
``` ruby
docker-compose up --build
```

> Executar com teste com a imagem já criada
``` ruby
docker run eduzz_e2e_test
```

![Docker](https://github.com/GustavoMachado22/desafio-eduzz/assets/64233343/91d763a6-0763-4e97-a812-0c1e1b45ec1b)



<h1 align="center">
Executando Github Actions
</h1>

### Continuos Test
Com `Github Actions` criamos uma `PIPE`, que executa nosso projeto de automação a cada `PUSH`.<br/> 
Podendo ser executado também manualmente no menu de Actions!<br/> 
O `CI` esta integrado com a `AWS` enviando os logs de resultado dos testes para armazenar em um `Bucket S3`.<br/> 

![actions](https://github.com/GustavoMachado22/desafio-eduzz/assets/64233343/65c1bb97-83f3-4e7c-a9b6-78fa10fc2185)


<h1 align="center">
Enviando logs para o Bucket S3
</h1>

![Bucket-S3](https://github.com/GustavoMachado22/desafio-eduzz/assets/64233343/f52a34c3-5d9d-4085-bd78-a413b3a2d08f)






<h1 align="center"> 
 A little about me...  <img src="https://media.giphy.com/media/eJjBP5o1N8tR7Hem2g/giphy.gif" width="60"> 
    </h1>
     <br />
     
                          A passionate developer, currently working as Software QA Engineer at Zé Delivery.


<div align="center">
<img height="150em" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=GustavoMachado22&theme=radical"/> 
<img height="150em" src="https://github-readme-stats.vercel.app/api?username=GustavoMachado22&show_icons=true&theme=radical&include_all_commits=true&count_private=false&hide_border=true"/> <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=GustavoMachado22&layout=compact&langs_count=7&theme=radical&hide_border=true"/> <img height="150em" src="https://github-readme-streak-stats.herokuapp.com/?user=GustavoMachado22&theme=radical&hide_border=true"/>
	 	  	  
###  ⚙️ Some Tool and Tech I use:     
![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white) 
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 	     
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white) 
![travis](https://img.shields.io/badge/travis_CI-3EAAAF?style=for-the-badge&logo=travisci&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Robot](https://img.shields.io/badge/Robot%20Framework-000000?style=for-the-badge&logo=robot-framework&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHunActions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![GraphQl](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 
![Confluence](https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&logoColor=white) 
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) 
![GitHunActions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) 
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) 
![WP](https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white) 
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white) 
![AndroiStudio](https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white)
![Xcode](https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white) 
![VisualStudioCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) 
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)
![Mac OS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white) 
	
<img src="https://media.giphy.com/media/0TtX2qqpxp3pIafzio/giphy.gif" width="80"> 
	  
 </div>
  

  <div align="leaft">

  
 ## 📫 How to reach me?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavohmachado/)
