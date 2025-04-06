Markdown

# Projeto de Testes Automatizados - Formulário de Registro de Veículo

Este projeto é uma suíte de testes automatizados de interface (UI) para validar o formulário de registro de veículos utilizando Cypress com Cucumber (Gherkin). Ele cobre cenários positivos (preenchimento válido) e negativos (validação de mensagens de erro em campos obrigatórios e inválidos).

## Tecnologias Utilizadas

- Cypress - Framework de testes E2E
- Cucumber (via cypress-cucumber-preprocessor) - Escrita de cenários em linguagem Gherkin
- Faker - Geração de dados aleatórios
- JavaScript (ES6)

## Estrutura do Projeto

.
├── cypress/
│   ├── integration/
│   │   └── features/
│   │       └── registerCar.feature
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   └── page_objects/
│   │       ├── home.page.js
│   │       ├── vehicleData.page.js
│   │       ├── insurantData.page.js
│   │       ├── productData.page.js
│   │       ├── priceOption.page.js
│   │       └── sendQuote.page.js
│   └── step_definitions/
│       └── registerCar.steps.js
├── cypress.config.js
├── package.json
└── README.md


## Instalação

1. Clone o repositório:

   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)
   cd nome-do-repo
Instale as dependências:

Bash

npm install
Como rodar os testes
Executar o Cypress em modo interativo:

Bash

npx cypress open
Depois disso, selecione o arquivo registerCar.feature para executar os cenários.

Executar os testes no terminal (modo headless):

Bash

npx cypress run
Funcionalidades testadas
Acesso à tela inicial de registro
Preenchimento dos dados do veículo, dados do segurado e do produto
Seleção de opções de preço
Envio da cotação
Validações de mensagens de erro para campos inválidos:
Capacidade do cilindro
Performance do motor
Data de fabricação
Peso, preço, placa e quilometragem
Cenário negativo: tentativa de continuar sem preencher campos obrigatórios
Cenário positivo: cadastro com todos os campos válidos preenchidos
Exemplos de comandos utilizados
Preencher dados válidos:

JavaScript

insurantDataPage.fillValidInsuranceData();
Verificar mensagem de erro:

JavaScript

cy.contains('span.error', 'Must be a valid date')
  .should('be.visible');
Requisitos
Node.js >= 14
npm >= 6
Observações
O projeto utiliza a biblioteca Faker para gerar dados dinâmicos.
Comandos wait e force: true são utilizados para garantir a estabilidade dos testes em ambientes lentos ou com carregamento dinâmico.