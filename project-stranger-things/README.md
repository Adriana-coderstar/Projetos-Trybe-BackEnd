### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e
do Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto Stranger Things!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar códigos.

# Sumário

- [Boas vindas ao repositório do projeto Stranger Things!](#boas-vindas-ao-repositório-do-projeto-stranger-things)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto:](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver:](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
    - [Revisando um pull request](#revisando-um-pull-request)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Testes](#testes)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Deploy - Stranger Things](#deploy---stranger-things)
    - [Backend](#backend-1)
      - [API](#api)
      - [Resposta](#resposta)
      - [Filtros](#filtros)
      - [Modo `upside down` (dw) - Backend](#modo-upside-down-dw---backend)
    - [Frontend](#frontend-1)
      - [Comunicação com o backend](#comunicação-com-o-backend)
      - [Modo `upside down` (dw) - Frontend](#modo-upside-down-dw---frontend)
  - [Desenvolvimento](#desenvolvimento-1)
  - [Dicas](#dicas)
- [Requisitos do projeto](#requisitos-do-projeto)
    - [Backend](#backend-2)
      - [1 - Verifica as variáveis de ambiente](#1---verifica-as-variáveis-de-ambiente)
      - [2 - Verifica se o arquivo Dockerfile está configurado da maneira correta](#2---verifica-se-o-arquivo-dockerfile-está-configurado-da-maneira-correta)
      - [3 - Verifica se o arquivo heroku.yml está configurado na maneira correta](#3---verifica-se-o-arquivo-herokuyml-está-configurado-na-maneira-correta)
      - [4 - Verifica action de Linter para ser executada no GitHub](#4---verifica-action-de-linter-para-ser-executada-no-github)
      - [5 - Verifica o Deploy no Heroku](#5---verifica-o-deploy-no-heroku)
    - [Frontend](#frontend-2)
      - [6 - Verifica as variáveis de ambiente do frontend](#6---verifica-as-variáveis-de-ambiente-do-frontend)
      - [7 - Verifica se foi feito o deploy do frontend no Heroku](#7---verifica-se-foi-feito-o-deploy-do-frontend-no-heroku)
    - [Bônus](#bônus)
      - [8 - Verifica os multi-ambientes e modo de desenvolvimento.](#8---verifica-os-multi-ambientes-e-modo-de-desenvolvimento)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento-1)
- [Revisando um pull request](#revisando-um-pull-request-1)
- [Avisos Finais](#avisos-finais)

# Habilidades

Nesse projeto, você será capaz de:
  - Adaptar e configurar o `Heroku`;
  - Publicar aplicações com `Docker` através do `Heroku`;
  - Utilizar variáveis de ambiente dentro do `Heroku`;

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request em **cada um destes** repositórios:

- [Repositório com o backend](https://github.com/tryber/sd-015-b-stranger-things-backend).

- [Repositório com o frontend](https://github.com/tryber/sd-015-b-stranger-things-frontend);

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Você vai adaptar e configurar os projetos descritos nesse README para que seja feito o deploy deles. Você vai colocar os projetos frontend e backend no ar com o `Heroku`, utilizando o `Docker` em ambiente de produção. Além disso, você vai alterar alguns comportamentos aplicando os conceitos vistos no conteúdo. 

## Desenvolvimento

Adapte e configure os projetos descritos nesse *README* para que seja feito o deploy utilizando `Docker` por meio do `Heroku`.

## Data de entrega

  - Serão `1` dias de projeto.
  - Data de entrega para avaliação final do projeto: `28/03/2022 - 14:00h`.

# Instruções para entregar seu projeto:

## Antes de começar a desenvolver:

1. Clone os **dois** repositórios

- `git clone https://github.com/tryber/sd-015-b-stranger-things-backend.git`.
- `git clone https://github.com/tryber/sd-015-b-stranger-things-frontend.git`.

2. Navegue entre as pastas dos repositórios que você acabou de clonar

- `cd sd-015-b-stranger-things-backend`
- `cd sd-015-b-stranger-things-frontend`

3. Instale as dependências dos dois projetos

- `npm install`

3. Para rodar localmentes os projetos, execute o script de start do `package.json`.

- `npm start`

4. Crie uma branch a partir da branch `master` para cada um dos repositórios.

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` dos seus projetos
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo:
    - `git checkout -b joaozinho-sd-015-b-stranger-things-backend`
    - `git checkout -b joaozinho-sd-015-b-stranger-things-frontend`
    
5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior:
    - `git push -u origin joaozinho-sd-015-b-stranger-things-backend`
    - `git push -u origin joaozinho-sd-015-b-stranger-things-frontend`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ dos repositórios no GitHub: [Backend](https://github.com/tryber/sd-015-b-stranger-things-backend/pulls) | [Frontend](https://github.com/tryber/sd-015-b-stranger-things-frontend/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-015-b-stranger-things-backend/pulls) e confira que o seu _Pull Request_ está criado
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-015-b-stranger-things-frontend/pulls) e confira que o seu _Pull Request_ está criado

* ⚠ **Observação: Os PRs não devem ser abertos neste repositório, apenas nos outros dois repositórios.** ⚠


---

## Durante o desenvolvimento

* ⚠ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-015`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ **Lembre-se que garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!** ⚠

---

### Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

---

# Como desenvolver

## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto o linter ESLint.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para roda-los localmente no projeto, execute o comando abaixo:

  - `npm run lint`


⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

---

## Testes

### Backend

Todos os requisitos do projeto serão testados **automaticamente** por meio do `Jest`. Basta executar o comando abaixo:

```bash
npm test
```


### Frontend

Todos os requisitos do projeto serão testados **automaticamente** por meio do `Cypress`. Basta executar um dos comandos abaixo:

```bash
npm run cypress:open // (Com interface)
npm run cy // (via CLI)
```

---

## Deploy - Stranger Things

Esse repositório contém as instruções e os requisitos para o projeto de Deploy com Heroku. O código base para o desenvolvimento do projeto está dividido em duas partes: uma API de backend utilizando Node.js e Express e um frontend com React. Abaixo estão disponíveis os links de acesso aos respectivos repositórios:

- [Repositório com o frontend](https://github.com/tryber/sd-015-b-stranger-things-frontend);

- [Repositório com o backend](https://github.com/tryber/sd-015-b-stranger-things-backend).

A seguir, temos algumas explicações sobre a estrutura base e alguns comportamentos dessas aplicações. Você explorará esses pontos durante o projeto, alterando o código preexistente.

Lembre-se de que tratam-se de projetos base. Sendo assim, ao longo do desenvolvimento, você vai identificar pontos a serem alterados com o objetivo de aplicar as práticas que vimos durante o curso. Mas não se preocupe, pois no README deste repositório esses pontos estão especificados.

---

### Backend

O Backend possui a seguinte estrutura:

```
├── README.md
├── index.js
├── data
│  ├── dataset
│  │  └── stranger-things-characters.json
│  └── repository
│     └── StrangerThings.js
├── services
│  └── StrangerThings.js
├── package-lock.json
└── package.json
```

---

#### API

A API consiste em um serviço simples com um endpoint `/` que retorna uma listagem com os personagens da série **Stranger Things**.

---

#### Resposta

A lista de personagem possui os seguintes campos:

- **name**: Nome do personagem;

- **status**: se o personagem está vivo ou não na série. Os valores possíveis são `alive`, `deceased` ou `unknown`;

- **origin**: o local de origem do personagem.

A resposta é em formato `JSON`, e o retorno é sempre um array de objetos. Abaixo, um exemplo:

```JSON
[
  {
    "name": "Will",
    "status": "Alive",
    "origin": "Byers Family"
  }
]
```

---

#### Filtros

Todos os campos da estrutura de retorno da resposta podem ser utilizados como filtros. Para isso, basta passar na `query string` o filtro desejado. No exemplo abaixo, estamos filtrando pelo _nome_ do personagem:

> localhost:3000?name=el

Os filtros são feitos utilizando uma `regex`, buscando pelo texto passado na `query string` em qualquer parte do campo, sem diferenciar maiúsculas de minúsculas.

Nesse caso o retorno seria:

```JSON
[
  {
    "name":"Russell",
    "status":"Alive",
    "origin":"Hawkings Middle School"
  },
  {
    "name":"Eleven",
    "status":"Alive",
    "origin":"Hopper Family"
  }
]
```

---

#### Modo `upside down` (dw) - Backend

Na API, no arquivo `index.js`, há a seguinte variável de controle:

```javascript
const hereIsTheUpsideDown = true;
```

Caso ela seja `true`, a API ativará o modo "Mundo Invertido", conforme a série, e começará a responder desta forma:

```JSON
[
  {
    "name":"llǝssnᴚ",
    "origin":"looɥɔS ǝlppᴉW sƃuᴉʞʍɐH",
    "status":"ǝʌᴉl∀"
  },
  {
    "name":"uǝʌǝlƎ",
    "origin":"ʎlᴉɯɐℲ ɹǝddoH",
    "status":"ǝʌᴉl∀"
  }
]
```

---

### Frontend

O frontend consiste em um projeto simples utilizando React, que renderizará o seguinte layout:

<img src="assets/frontend.png" width="800px" >

Trata-se de um frontend bem simples que vai se comunicar com a nossa API. Ele possui as seguintes funcionalidades:

- Uma tabela para exibição da resposta da nossa API;

- Um campo de pesquisa para filtro de **nome**;

- Botões de navegação para paginação;

- Um botão para ativar o modo `Mundo Invertido` no frontend.

Todas essas funcionalidades estão implementadas no componente `StrangerThings`.

---

#### Comunicação com o backend

Na estrutura do projeto, temos um diretório `services`. Nesse diretório, há um arquivo `charactersAPI.js`, onde são feitas as chamadas `HTTP` para a nossa API, utilizando o `axios`.

O service é uma classe que espera receber a URL da nossa API e um timeout para a requisição:

```javascript
{
  url: 'localhost:3003',
  timeout: 30000
}
```

Esses parâmetros estão pré-programados de maneira fixa no componente (alteraremos esse comportamento durante o projeto):

```javascript
const strangerThingsConfig = {
  url: 'localhost:3002',
  timeout: 30000,
};

const upsideDownConfig = {
  url: 'localhost:3003',
  timeout: 30000,
};

const charactersService = new CharactersService(strangerThingsConfig);
const charactersUpsideDownService = new CharactersService(upsideDownConfig);
```

---

#### Modo `upside down` (dw) - Frontend

Assim como no backend, o frontend também possui um modo "Mundo Invertido". Esse modo é ativado e desativado com o botão "Mudar de Realidade".

A ideia é a seguinte: inicialmente, o frontend possui uma imagem de background e utiliza o service instanciado com a configuração contida na variável `strangerThingsConfig`. Ao ativar o Mundo Invertido, a imagem de background é alterada e passamos a utilizar o serviço instanciado com a configuração `upsideDownConfig`.

Desse modo, ao "alternar entre os universos", vamos realizar chamadas a API's diferentes.

No exemplo pré-programado, em um dos "universos", chamamos um serviço na porta `3002` e o outro serviço na porta `3003`. Exploraremos esse comportamento durante o projeto.

---

## Desenvolvimento

O código não está utilizando variáveis de ambiente. Você vai configurá-lo para utilizá-las, tornando parametrizáveis a porta e o _modo upside down_.

Em seguida, você deverá adicionar todas as configurações necessárias para executar o `Docker` juntamente do `Heroku`.

Você vai realizar o deploy do projeto (frontend e backend) no _Heroku_. Você deverá realizar o deploy do projeto, conforme requisitos, no _Heroku_. Os comandos utilizados deverão ser adicionados no README.md de cada projeto. Para mais informações revisite o Course.

Todos esses passos estão detalhados nos requisitos abaixos.

---


## Dicas

Para publicar seu frontend React, utilize o buildpack [mars/create-react-app](https://elements.Heroku.com/buildpacks/mars/create-react-app-buildpack).

Lembre-se de que é possível testar o comportamento definindo as variáveis de ambiente em sua máquina. Você pode fazê-las apontar tanto para o backend rodando localmente em sua máquina, quanto para as APIs já publicadas nos requisitos anteriores.


⚠️ **Dica: Lembre-se que ao importar uma variável de ambiente com `process.env.nomeDaVariavel`, seu tipo é `string`.** ⚠️

---

# Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando por **todos os _checks_** do **Linter**. Utilize o comando `npm run lint` no seu terminal para verificar os _checks_ do **Linter** 😉 ⚠️

Os requisitos estão agrupados por `frontend` e `backend`. Realize as alterações nos respectivos diretórios [disponbilizados para você](#Deploy---Stranger-Things).

### Backend

#### 1 - Verifica as variáveis de ambiente

Altere o backend para utilizar variáveis de ambiente para controlar os seguintes comportamentos:

   1. A porta que a API escutará, essa variável deve ter, nescessariamente, o nome PORT e o seu valor deve ser 3000.

   2. O modo "upsideDown". Essa variável espera um valor boleano e deverá se chamar UPSIDEDOWN_MODE. Lembre-se que as variáveis de ambiente são `strings`.

   O que será testado:
   - Se existe a variável de ambiente PORT.
   - Se a variável de ambiente UPSIDEDOWN_MODE existe e se ela é um boleano.

**Importante**: Para esse projeto, as variáveis de ambiente devem ser definidas em um arquivo .env e o arquivo deve ser enviando no seu PR(Pull Request). ISSO NÃO É UMA PRÁTICA DE MERCADO, o arquivo .env deve ser sempre incluido no .gitignore pois contém informações sensíveis, aqui será enviado apenas por motivo de avaliação.

#### 2 - Verifica se o arquivo Dockerfile está configurado da maneira correta

O teste irá verificar se o arquivo `Dockerfile` existe e está configurado da maneira correta. Ele deve construir a imagem a partir da `node:14-alpine` e usar o comando `npm start` para iniciar a aplicação via `CMD`.

  O que será testado:
  - Se a Dockerfile está utilizando a imagem `node:14-alpine`, verificando se as camadas desta imagem estão incluídas no build que essa Dockerfile faz.
  - Se a Dockerfile usa `npm start` como `CMD`.

#### 3 - Verifica se o arquivo heroku.yml está configurado na maneira correta

Adicione e configure o arquivo `heroku.yml`

  1. O arquivo deve iniciar um servidor do tipo `web`
  2. O `run` deve executar o servidor utilizando o `node`.

Execute ambos em sua máquina para validar se o comportamento é o esperado.

O que será testado:
  - Se o arquivo `heroku.yml` existe.
  - Se o serviço a ser executado é um serviço do tipo `web`.
  - Se o `node` é responsável por executar o servidor.

#### 4 - Verifica action de Linter para ser executada no GitHub

Você deverá criar uma `Action` para ser executada somente em **pull_requests** solicitados em todas as branchs de seu repositório.

**Atenção**: O arquivo de configuração da action deverá ser criado em: `./actions/` com o nome `project.yml`.

O que será testado:
- Se o arquivo `./actions/project.yml` existe.
- Se a `Action` é acionada somente em `pull_request`.
- Se o job foi nomeado como: `eslint`.
- Se o linter está sendo executado com a versão **20.04** do ubuntu.
- Se o linter está sendo executado com a versão 12 do node.

#### 5 - Verifica o Deploy no Heroku

**IMPORTANTE**: Uma variável de ambiente com o nome `GITHUB_USER` deverá ser criada em seu `.env` com o **seu nome de usuário** do GitHub.

**IMPORTANTE :warning:**: O Heroku limita o tamanho do nome de uma aplicação para ter no máximo **30 caracteres**, se o seu nome de usuário do GitHub possuir mais que 27 caracteres você não conseguirá criar uma aplicação com o nome no padrão solicitado pelo requisito. **Caso esteja nessa condição, avise nosso time de instrunção que iremos ajudar**.

1. Crie dois `apps` do Heroku a partir do mesmo código fonte (código da API). O nome do seu app no Heroku deverá conter seu nome de usuário no GitHub seguido de "-up" e "-dw". Por exemplo, se seu nome de usuário no GitHub for "student" seus apps deverão ter os nomes "student-up" e "student-dw" e as URLs abaixo:

   - https://student-up.Herokuapp.com/ - para o app hawkins

   - https://student-dw.Herokuapp.com/ - para o app upside-down

2. Configure a variável de ambiente criada para controlar o modo `UPSIDEDOWN`. Cada um dos `apps` deverá ter valores distintos, da seguinte maneira:

   - O app `hawkins` deverá ter o valor `false`;

   - O app `upside-down` deverá ter o valor `true`.

3. Utilizando o `git`, faça o deploy de ambos os `apps` no Heroku.

Acesse os URLs geradas e valide se ambas as API's estão no ar e funcionando como esperado.

**Importante**: As URLs deverão ser geradas pelo Heroku e não devem ser modificadas.

O que será testado:
  - Se ao fazer uma requisição do tipo GET para o endpoint da API hawkins serão retornadas as informações corretas.
  - Se ao fazer uma requisição do tipo GET para o endpoint da API upside-down serão retornadas as informações corretas.

### Frontend

#### 6 - Verifica as variáveis de ambiente do frontend

Altere o frontend para utilizar variáveis de ambiente para controlar as **URLs** e **Timeouts** de comunicação com a API.

Perceba que o código está esperando por duas **APIs**. Uma para o modo `upside-down` e a outra para o modo normal.

O nome das variáveis deve ser o seguinte:

- Para seu back-end hawkins:
  - REACT_APP_HAWKINS_URL para a URL;
  - REACT_APP_HAWKINS_TIMEOUT para o timeout;

- Para seu back-end UPSIDEDOWN:
  - REACT_APP_UPSIDEDOWN_URL para a URL;
  - REACT_APP_UPSIDEDOWN_TIMEOUT para o timeout;

O que será testado:
- Se existem as 4 variáveis de ambiente citadas acima.

**Importante**: Para esse projeto, as variáveis de ambiente devem ser definidas em um arquivo .env e o arquivo deve ser enviando no seu PR(Pull Request). ISSO NÃO É UMA PRÁTICA DE MERCADO, o arquivo .env deve ser sempre incluido no .gitignore pois contém informações sensíveis, aqui será enviado apenas por motivo de avaliação.

#### 7 - Verifica se foi feito o deploy do frontend no Heroku

**IMPORTANTE**: Assim como no `Back-end`, a variável de ambiente `GITHUB_USER` deverá ser criada com o seu usuário do GitHub.

Faça o deploy do front-end:

   1. Crie um app do Heroku com o front-end. Vamos deixar o Heroku utilizar as configurações padrões. No momento de criar o app do Heroku, utilize o `buildpack` descrito abaixo, em **Dicas**.

   2. O nome do seu app no Heroku deve ser seu nome de usuário do GitHub seguido de "-ft". Por exemplo, se o seu usuário do GitHub for "student", o nome do seu app será "student-ft" e a URL ***precisar ser*** https://student-ft.Herokuapp.com/.

   2. Configure as variáveis de ambiente do app para apontar para as API's publicadas.

   3. Faça o deploy com o git.

**Dicas**:

Para publicar seu frontend React, utilize o buildpack [mars/create-react-app](https://elements.Heroku.com/buildpacks/mars/create-react-app-buildpack).

Lembre-se de que é possível testar o comportamento definindo as variáveis de ambiente em sua máquina. Você pode fazê-las apontar tanto para o backend rodando localmente em sua máquina, quanto para as API's já publicadas nos requisitos anteriores.

O que será testado:
  - Se ao visitar sua página no Heroku, o botão de mudar de realidade existe.
  - Se a pesquisa funciona como deveria, fazendo chamada a API externa.
  - Se o botão de mudar de realidade funciona.
  - Se os botões de próxima página e página anterior funcionam.  

### Bônus

#### 8 - Verifica os multi-ambientes e modo de desenvolvimento.

Utilize a estratégia de multi-ambientes no frontend. Para isso:

   - Renomeie o *remote* atual para `development`;

   - Refaça o deploy com um item no frontend que identifique o layout como rodando em modo de "desenvolvimento". Esse tag item **deve** conter o texto "Em desenvolvimento"

   - Crie um novo app no Heroku cujo nome deve ser seu nome de usuário do github seguido de "-pd". Por exemplo, se o seu usuário do github for "student", o nome do seu app será "student-pd" e a url ***precisar ser*** https://student-pd.Herokuapp.com/.

   - Lembre-se que a boa prática para essa situação é criar uma variável de ambiente para controlar esse comportamento, configurando-a para ter um valor diferente em cada um dos ambientes.

O que será testado:
 - Se ao acessar o frontend de desenvolvimento, haverá a tag com o texto "Em desenvolvimento"
 - Se ao acessar o frontend de produção, não haverá a tag.

---

# Depois de terminar o desenvolvimento

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ de colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque as pessoas de quem quer receber o review:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-015`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

# Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

\#VQV 🚀

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

---
