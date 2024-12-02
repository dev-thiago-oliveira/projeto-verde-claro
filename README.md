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
- **Node.js**: Ambiente de execução JavaScript para aplicações do lado do servidor.
- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário interativas e dinâmicas.
- **Next.js**: Framework React para aplicações que exigem renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código, proporcionando maior segurança e escalabilidade.

## Estrutura do Projeto

O projeto utiliza a estrutura de **monorepo** para organizar diferentes pacotes e aplicativos. Abaixo está a estrutura do diretório principal do projeto:

```
/apps
  /frontend
  /backend
/packages
  /shared
  /utils
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

4. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias (exemplo abaixo).

### Exemplo de Arquivo `.env`

```bash
/frontend
REACT_APP_API_URL=http://localhost:3001

/backend
OPENAI_API_KEY=incluir_api_key_da_openai
```

## Como Rodar o Projeto

1. Após configurar o ambiente, execute a aplicação no modo de desenvolvimento:
   ```bash
   npm run start  
   ```

2. Isso vai iniciar os aplicativos no modo de desenvolvimento e usar o **Turborepo** para otimizar as tarefas paralelas de build, lint e testes.
