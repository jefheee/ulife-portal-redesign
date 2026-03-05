# 🎓 Redesign Portal Acadêmico (Ulife)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Version](https://img.shields.io/badge/version-v1.4.0-purple.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

Um protótipo funcional e moderno focado em resolver problemas reais de UX/UI de um portal universitário (Ambiente Virtual de Aprendizagem), desenvolvido como projeto de portfólio aplicando as melhores práticas de Front-end.

---

## 📸 Preview do Projeto

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/78539a92-fe68-4841-b97e-f7f90f40cd59" />

---
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2a1ed28a-5fc8-4dc8-b80f-fd25755a6f9f" />

---
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ee292da7-e8b2-4806-a21c-78ce973cb0da" />

---
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/78cb2db1-b0dd-420d-81f9-e0311240a23e" />

---

## 🎯 A História do Projeto

Este projeto nasceu de uma dor real. Como aluno de Análise e Desenvolvimento de Sistemas, eu sempre ouvia reclamações (minhas, de colegas e de professores) sobre o sistema acadêmico que utilizamos. As dificuldades iam desde não conseguir encontrar funcionalidades básicas até lidar com um design ultrapassado e uma UX confusa, com menus em "sanfona" excessivamente longos.

Decidi transformar essa frustração em uma oportunidade de aprendizado. Iniciei este projeto utilizando o **Google AI Studio** para idealizar como seria um dashboard moderno e com tema escuro. Minha intenção inicial não era construir um sistema completo, mas sim testar minhas ideias de UX. No entanto, o projeto escalou. 

Com a ajuda de IA, migrei o projeto para o **Cursor IDE**, o que me forçou a aprender a estruturar aplicações reais. Foi através deste projeto que tive meu primeiro contato profundo com **React**, **TypeScript** (antes só havia programado um pouco em Java no NetBeans para a faculdade) e **Tailwind CSS**. Também me permitiu descobrir e planejar a futura integração de ferramentas profissionais como Docker, APIs e Postman.

### 🛑 O Problema (Design Original)
* Navegação baseada em menus expansíveis excessivamente longos e escondidos.
* Poluição visual e falta de hierarquia da informação na página inicial.
* Ausência de um modo noturno (Dark Mode) nativo e responsividade precária.
* Fluxos de envio de documentos e configurações confusos.

### ✨ A Solução (Este Redesign)
* **Dashboard Orientado a Urgências:** Alunos veem imediatamente a próxima aula do dia e os prazos que vencem em breve.
* **Navegação Simplificada e Responsiva:** Uma barra lateral (Sidebar) limpa que se adapta a dispositivos móveis.
* **Dark Mode Elegante:** Implementação de tema escuro premium utilizando a paleta `zinc` do Tailwind.
* **Privacidade de Dados:** UI preparada com dados fictícios ("João da Silva") para demonstração pública de portfólio.

---

## 🚀 Funcionalidades e UI/UX Implementadas

- [x] **Roteamento Interno SPA:** Navegação fluida entre Login, Seleção de Conta Microsoft, Dashboard e Abas de Configurações sem recarregar a página.
- [x] **Gerenciamento de Estado Avançado:** Uso intenso de `useState` e `useEffect` para controlar modais, toggles reativos e contadores dinâmicos de status (via `reduce`).
- [x] **Persistência de Dados (Local Storage):** Conversão de uploads de imagens para **Base64** (`FileReader`), garantindo que a foto de perfil sobreviva a recarregamentos da página.
- [x] **Validação Rigorosa:** Campos de login aceitando apenas formatos válidos (Matrícula numérica >= 5 dígitos) e inputs de arquivo limitados a extensões seguras (`.pdf, .png, .jpg`).
- [x] **Componentes Interativos Customizados:** Criação de *Toggle Switches* estilo iOS, Badges de status, Cards de Upload e Dropdowns modulares.

---

## 📁 Arquitetura e Organização (Modularização)

O projeto foi refatorado para seguir as melhores práticas de Clean Code no React, abandonando o arquivo único inicial para uma estrutura modular:

```text
📦 ulife-portal-redesign
 ┣ 📂 public          # Ativos estáticos
 ┣ 📂 src
 ┃ ┣ 📂 components    # Componentes visuais isolados e reutilizáveis
 ┃ ┃ ┣ 📜 DashboardHome.tsx
 ┃ ┃ ┣ 📜 Footer.tsx
 ┃ ┃ ┣ 📜 HeroCard.tsx
 ┃ ┃ ┣ 📜 QuickShortcuts.tsx
 ┃ ┃ ┣ 📜 RecordedClassesView.tsx
 ┃ ┃ ┣ 📜 ScheduleView.tsx
 ┃ ┃ ┣ 📜 Sidebar.tsx
 ┃ ┃ ┣ 📜 SubjectsGrid.tsx
 ┃ ┃ ┣ 📜 TopNavbar.tsx
 ┃ ┃ ┗ 📜 UrgentTasks.tsx
 ┃ ┣ 📂 screens       # Telas completas que agrupam componentes e gerenciam estados complexos
 ┃ ┃ ┣ 📜 DashboardScreen.tsx
 ┃ ┃ ┣ 📜 LoginScreen.tsx
 ┃ ┃ ┣ 📜 MeusDadosScreen.tsx
 ┃ ┃ ┣ 📜 MeusDocumentosScreen.tsx
 ┃ ┃ ┣ 📜 MicrosoftSelectionScreen.tsx
 ┃ ┃ ┣ 📜 NotificacoesScreen.tsx
 ┃ ┃ ┗ 📜 RecuperarSenhaScreen.tsx
 ┃ ┣ 📜 App.tsx       # Orquestrador principal de rotas globais e Dark Mode
 ┃ ┣ 📜 index.css     # Diretivas base do Tailwind CSS
 ┃ ┗ 📜 main.tsx      # Ponto de entrada (Entry point) da aplicação React
 ┣ 📜 .env.example
 ┣ 📜 .gitignore
 ┣ 📜 index.html
 ┣ 📜 metadata.json
 ┣ 📜 package-lock.json
 ┣ 📜 package.json    # Dependências do projeto (React, Tailwind, Lucide, Vite)
 ┣ 📜 README.md       # Esta documentação
 ┣ 📜 tsconfig.json   # Configurações do compilador TypeScript
 ┗ 📜 vite.config.ts  # Configurações do bundler Vite
```

---

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/)** - Biblioteca principal para construção de interfaces e reatividade.
* **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática (`Interfaces` e `Props`) para evitar erros em tempo de execução.
* **[Vite](https://vitejs.dev/)** - Tooling ultrarrápido para o build e HMR da aplicação.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework utilitário para estilização rápida, responsividade (`md:`, `sm:`) e Dark Mode (`dark:`).
* **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones SVG limpos e modernos.

---

## 🗺️ Roadmap (Próximos Passos)

- [ ] **Hub de Mentoria:** Implementar nova tela baseada no fluxo de Matchmaking entre alunos e mentores (Case UDS).
- [ ] **Conteinerização:** Adicionar `Dockerfile` e `docker-compose.yml` para padronização de ambiente de desenvolvimento.
- [ ] **Integração Back-end (Fase 2):** Criar serviço local (`json-server` ou API Node.js) para consumo dinâmico das notas e documentos via `fetch/axios`.

---

## 🔄 Changelog

* **v1.4.0** - Anonimização de dados para privacidade, refatoração de CSS Grid nos Toggles de notificação, adição do Footer Global.
* **v1.3.0** - Criação da Tela de Notificações, blindagem do input de arquivos (apenas doc/img) e correção de links de privacidade.
* **v1.2.0** - Criação da Tela de Documentos de Matrícula com modal interativo de envio, badges reativos de status e roteamento de abas.
* **v1.1.0** - Modularização da arquitetura (`components/` e `screens/`), persistência real da foto de perfil (Base64) e correção do menu Mobile.
* **v1.0.0** - Lançamento estrutural inicial com validação de Login, seleção de conta Microsoft fictícia e visual base do Dashboard estático.

---

## 💻 Como rodar localmente

Para executar este projeto em sua máquina, você precisará do **Node.js** (Ambiente de execução JavaScript) instalado. Recomenda-se a versão LTS (Long Term Support).

1. **Clone este repositório:**
   Abra o seu terminal (Prompt de Comando, PowerShell ou Terminal do Linux/Mac) e digite:
   ```bash
   git clone [https://github.com/jefheee/ulife-portal-redesign.git](https://github.com/jefheee/ulife-portal-redesign.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd ulife-portal-redesign
   ```

3. **Instale as dependências:**
   Este comando lerá o arquivo `package.json` e fará o download de todas as bibliotecas necessárias (React, Tailwind, etc.) para a pasta `node_modules`. Se você estiver no Windows e receber um erro de permissão, pode ser necessário rodar `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` no PowerShell como Administrador antes de instalar.
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   O Vite irá compilar o projeto e iniciar um servidor local (geralmente em `http://localhost:5173`).
   ```bash
   npm run dev
   ```

---

## 🤝 Padrões da Comunidade (Community Standards)

Este projeto adota métricas para garantir um ambiente colaborativo saudável, em conformidade com as recomendações do GitHub:
* **Code of Conduct:** Estabelecido para garantir um ambiente acolhedor.
* **Contributing:** Diretrizes de contribuição estão ativas. Feedbacks e Pull Requests focados em melhoria de UI/UX são sempre bem-vindos.
* **License:** O projeto é distribuído sob a licença MIT, permitindo uso livre e modificações.
* **Security Policy & Issue Templates:** Configurados para facilitar o reporte de bugs e vulnerabilidades.

---
*Desenvolvido com dedicação por [Jefherson Luiz](https://github.com/jefheee).*
