# 🔐 Sistema de Autenticação com LocalStorage

Um sistema simples de login e registro desenvolvido em JavaScript puro, simulando o fluxo de autenticação de usuários e persistência de dados local no navegador.

## 🚀 Funcionalidades

- **Verificação Automática**: Identifica se o usuário já possui um registro salvo no navegador.
- **Cadastro de Usuário**: Caso seja o primeiro acesso, coleta nome e senha por meio de prompts.
- **Armazenamento Seguro Local**: Utiliza a API `localStorage` convertendo os dados para o formato JSON.
- **Validação de Login**: Confere as credenciais inseridas com os dados salvos anteriormente.

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6)**: Lógica principal, manipulação de objetos e controle de fluxo.
- **HTML5**: Estrutura básica para execução do script no ambiente web.
- **LocalStorage API**: Mecanismo de persistência de dados no navegador.

## 📋 Conceitos de Lógica Praticados

Este projeto foi excelente para fixar os seguintes aprendizados:
1. **Estruturas Condicionais**: Utilização de `if / else` para validar o fluxo do usuário.
2. **Funções**: Separação de responsabilidades em blocos lógicos reutilizáveis (`VerificaUsuario`, `registro` e `login`).
3. **Conversão de Dados**: Manipulação de JSON utilizando `JSON.stringify()` (para salvar) e `JSON.parse()` (para ler o objeto).

## 💻 Como Executar o Projeto

1. Faça o clone ou download deste repositório.
2. Abra o arquivo `index.html` em qualquer navegador web.
3. Utilize os pop-ups de prompt para se registrar ou realizar o login.
4. Pressione `F12` no teclado e vá até a aba **Console** para verificar as mensagens de sucesso ou erro.
