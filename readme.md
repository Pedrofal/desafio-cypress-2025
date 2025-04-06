# Projeto de Testes Automatizados - Formulário de Registro de Veículo

Este projeto é uma suíte de testes automatizados de interface (UI) desenvolvida com Cypress e Cucumber (Gherkin). Ele valida o fluxo de registro de veículos, incluindo cenários positivos (cadastro completo) e negativos (validação de mensagens de erro para campos obrigatórios ou inválidos).

## Tecnologias Utilizadas

- Cypress
- Cucumber (via cypress-cucumber-preprocessor)
- Faker
- JavaScript (ES6)

## Estrutura do Projeto

DESAFIO_CYPRESS_ACADEMIA2025/.vscode/
DESAFIO_CYPRESS_ACADEMIA2025/cypress/downloads/
DESAFIO_CYPRESS_ACADEMIA2025/cypress/e2e/front-end/invalidData.feature
DESAFIO_CYPRESS_ACADEMIA2025/cypress/e2e/front-end/registerCar.feature
DESAFIO_CYPRESS_ACADEMIA2025/cypress/e2e/front-end/registerCarFail.feature
DESAFIO_CYPRESS_ACADEMIA2025/cypress/fixtures/
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/commands.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/e2e.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/page_objects/home.page.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/page_objects/insurantData.page.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/page_objects/priceOpiton.page.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/page_objects/productData.page.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/page_objects/sendQuote.page.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/page_objects/vehicleData.page.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/process/invalidData.cy.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/process/registerCar.cy.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress/support/process/registreCarFail.cy.js
DESAFIO_CYPRESS_ACADEMIA2025/node_modules/
DESAFIO_CYPRESS_ACADEMIA2025/.gitignore
DESAFIO_CYPRESS_ACADEMIA2025/cypress.config.js
DESAFIO_CYPRESS_ACADEMIA2025/cypress.env.json
DESAFIO_CYPRESS_ACADEMIA2025/package-lock.json
DESAFIO_CYPRESS_ACADEMIA2025/package.json
DESAFIO_CYPRESS_ACADEMIA2025/readme.md


## Instalação

1. Clone o repositório:

git clone https://github.com/seu-usuario/desafio-cypress-2025.git
cd desafio-cypress-2025

Instale as dependências:
npm install

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

