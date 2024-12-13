<br>
<div align="center">
  <img src="./apps/frontend/src/assets/imagens/logo.svg" alt="Descrição da Imagem" width="450px">
</div>
<br>

# Verde Claro

Este repositório contém as aplicações do projeto **Verde Claro**. O projeto utiliza um **monorepo** gerenciado com **Turborepo**. Ele agrupa duas aplicações e varios pacotes compartilhados em um único repositório para otimizar o fluxo de desenvolvimento e melhorar a gestão de dependências.

## Tecnologias Utilizadas

O projeto usa algumas tecnologias e ferramentas como:

- **Turborepo**: Plataforma de gerenciamento de monorepos que otimiza builds e outras tarefas em múltiplos pacotes e aplicações. Ele permite a execução paralela de tarefas e a gestão de dependências entre elas, garantindo eficiência no processo de desenvolvimento.
- **React.js com TypeScript**: Biblioteca JavaScript para construção de interfaces de usuário interativas e dinâmicas, utilizando TypeScript para adicionar tipagem estática, proporcionando maior segurança e escalabilidade.
- **Styled-components**: Biblioteca para estilização em aplicações React, que permite a utilização de CSS-in-JS, facilitando a criação de componentes reutilizáveis e estilizados.
- **Nest.js com TypeScript**: Framework para desenvolvimento de aplicações robustas e escaláveis no lado do servidor, com uma estrutura modular e suporte nativo a TypeScript.
- **SWR**: Biblioteca de React para busca e cache de dados, focada em simplicidade e performance, ideal para lidar com requisições em tempo real.



## Estrutura do Projeto

O projeto utiliza a estrutura de **monorepo** para organizar diferentes pacotes e aplicativos. Abaixo está a estrutura do diretório principal do projeto:

```
/apps
  /frontend
  /backend
/packages
turbo.json
```

- **/apps**: Contém os aplicativos principais do projeto.
- **/packages**: Contém pacotes reutilizáveis que são compartilhados entre os aplicativos.
- **turbo.json**: Arquivo de configuração do Turborepo que define as tarefas e dependências entre pacotes, garantindo a execução eficiente de builds, testes e outras tarefas.

## Como Configurar o Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/verde-claro.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd verde-claro
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz dos projetos frontend e backend conforme exemplos abaixo.

### Exemplo de Arquivo `.env`

```bash
/frontend
REACT_APP_API_URL=http://localhost:3001

/backend
OPENAI_API_KEY=incluir_api_key_da_openai
```

## Como obter a OPENAI_API_KEY
Acesso o [link](https://comunidadedeestatistica.com.br/como-criar-uma-chave-token-para-api-do-chatgpt/) e siga as instruções.

_**<span style="color: red">Importante:</span> A versão que estamos usando para consulta na OpenAI é a: gpt-3.5-turbo_.

## Como Rodar o Projeto

1. Após configurar o ambiente, execute a aplicação no modo de desenvolvimento:
   ```bash
   npm run start  
   ```

2. Isso vai iniciar os aplicativos no modo de desenvolvimento e usar o **Turborepo** para otimizar as tarefas paralelas de build.
