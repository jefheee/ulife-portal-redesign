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

## 🎯 O Projeto

O objetivo deste projeto foi recriar a interface do portal Ulife, utilizado por instituições do Ecossistema Ânima (como a Unisul), aplicando conceitos sólidos de **Experiência do Usuário (UX)**, **Design de Interface (UI)** e arquitetura de software modular.

O foco principal foi reduzir a sobrecarga cognitiva do aluno, eliminando menus redundantes e trazendo as informações mais críticas (como aulas do dia, prazos de trabalhos e status de documentos) para o primeiro plano.

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

O projeto foi refatorado para seguir as melhores práticas de Clean Code no React:

```text
📦 src
 ┣ 📂 components      # Componentes visuais isolados e reutilizáveis
 ┃ ┣ 📜 Sidebar.tsx   # Barra de navegação lateral (responsiva)
 ┃ ┣ 📜 TopNavbar.tsx # Barra superior com dropdowns e alertas
 ┃ ┣ 📜 HeroCard.tsx  # Lógica de calendário do dia atual
 ┃ ┗ 📜 Footer.tsx    # Rodapé global de versão e links
 ┣ 📂 screens         # Telas completas que agrupam componentes
 ┃ ┣ 📜 LoginScreen.tsx
 ┃ ┣ 📜 DashboardScreen.tsx
 ┃ ┣ 📜 MeusDocumentosScreen.tsx
 ┃ ┗ 📜 NotificacoesScreen.tsx
 ┣ 📜 App.tsx         # Orquestrador principal de rotas e Dark Mode
 ┗ 📜 main.tsx        # Ponto de entrada do React
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

1. Clone este repositório:
   ```bash
   git clone [https://github.com/jefheee/ulife-portal-redesign.git](https://github.com/jefheee/ulife-portal-redesign.git)
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd ulife-portal-redesign
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## 🤝 Padrões da Comunidade (Community Standards)

Este projeto adota métricas para garantir um ambiente colaborativo saudável:
* **Code of Conduct:** Em breve.
* **Contributing:** Feedbacks e Pull Requests focados em melhoria de UI/UX são bem-vindos.
* **License:** Distribuído sob a licença MIT.

---
*Desenvolvido com dedicação por [Jefherson Luiz](https://github.com/jefheee).*
