# Projeto de Testes Automatizados - Formulário de Registro de Veículo

Este projeto é uma suíte de testes automatizados de interface (UI) desenvolvida com Cypress e Cucumber (Gherkin). Ele valida o fluxo de registro de veículos, incluindo cenários positivos (cadastro completo) e negativos (validação de mensagens de erro para campos obrigatórios ou inválidos).

## Tecnologias Utilizadas

- Cypress
- Cucumber (via cypress-cucumber-preprocessor)
- Faker
- JavaScript (ES6)

## Estrutura do Projeto

DESAFIO_CYPRESS_ACADEMIA2025/
├── .vscode/
├── cypress/
│   ├── downloads/
│   ├── e2e/front-end/
│   │   ├── invalidData.feature
│   │   ├── registerCar.feature
│   │   └── registerCarFail.feature
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   ├── page_objects/
│   │   │   ├── home.page.js
│   │   │   ├── insurantData.page.js
│   │   │   ├── priceOpiton.page.js
│   │   │   ├── productData.page.js
│   │   │   ├── sendQuote.page.js
│   │   │   └── vehicleData.page.js
│   │   └── process/
│   │       ├── invalidData.cy.js
│   │       ├── registerCar.cy.js
│   │       └── registreCarFail.cy.js
├── node_modules/
├── .gitignore
├── cypress.config.js
├── cypress.env.json
├── package-lock.json
├── package.json
└── readme.md


## Instalação

1. Clone o repositório:


git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
Instale as dependências:

Instale as dependências:
npm install

Como Rodar os Testes

Modo interativo:

npx cypress open
Selecione o arquivo registerCar.feature para executar os cenários.

Modo headless (terminal):

npx cypress run
Funcionalidades Testadas
Acesso à tela de registro

Funcionalidades Testadas
Acesso à tela de registro


Preenchimento dos dados:

Veículo

Segurado

Produto

Seleção de opções de preço

Envio da cotação

Validações de mensagens de erro nos campos:

Cilindrada

Performance do motor

Data de fabricação

Peso, preço, placa e quilometragem

- Fluxo completo com preenchimento válido (valida sucesso no envio)
- Fluxo sem preenchimento de campos obrigatórios (valida mensagem de erro)
- Fluxo preenchendo os campos com entradas inválidas (valida mensagens de erro

Requisitos
Node.js >= 14
npm >= 6
Cypress ^13.5.0
Faker ^8.4.0

Observações
O projeto utiliza a biblioteca Faker para gerar dados aleatórios.

Em alguns comandos, é usado { force: true } para interagir com elementos ocultos ou sobrepostos.

