# 🎓 Redesign Portal Acadêmico (Ulife)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Um protótipo funcional e moderno focado em resolver problemas reais de UX/UI de um portal universitário, desenvolvido como projeto de portfólio.

## 🎯 O Projeto

O objetivo deste projeto foi recriar a interface do Ambiente Virtual de Aprendizagem (AVA) Ulife, utilizado por instituições do Ecossistema Ânima (como a Unisul), aplicando conceitos sólidos de **Experiência do Usuário (UX)** e **Design de Interface (UI)**. 

O foco principal foi reduzir a sobrecarga cognitiva do aluno, eliminando menus redundantes e trazendo as informações mais críticas (como aulas do dia e prazos de trabalhos) para o primeiro plano.

### 🛑 O Problema (Design Original)
* Navegação baseada em menus expansíveis (sanfona) excessivamente longos.
* Funcionalidades importantes escondidas a vários cliques de distância.
* Poluição visual e falta de hierarquia da informação na página inicial.
* Ausência de um modo noturno (Dark Mode) nativo.

### ✨ A Solução (Este Redesign)
* **Dashboard Orientado a Urgências:** Os alunos veem imediatamente a próxima aula do dia e os prazos que vencem em breve.
* **Navegação Simplificada:** Uma barra lateral (Sidebar) limpa e intuitiva, com ícones claros e rotas diretas.
* **Fluxo de Autenticação Realista:** Simulação do fluxo de login do ecossistema, incluindo validação de dados e modais de recuperação.
* **Dark Mode Elegante:** Implementação de tema escuro com contraste otimizado para conforto visual.

## 🚀 Funcionalidades Implementadas

- [x] **Roteamento SPA:** Navegação fluida entre Login, Seleção de Conta e Dashboard.
- [x] **Validação de Formulário:** O campo de login aceita apenas formatos válidos (Matrícula numérica).
- [x] **Modo Escuro (Dark Mode):** Alternância de tema integrada com Tailwind CSS.
- [x] **Lógica de Calendário:** O Dashboard exibe a aula correta baseada no dia da semana da máquina do usuário.
- [x] **UI Components Customizados:** Modais, Dropdowns, Badges e Cards interativos.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces.
* **[Vite](https://vitejs.dev/)** - Tooling super rápido para o build da aplicação.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitário para estilização rápida e responsiva.
* **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones modernos e limpos.

## 💻 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/jefheee/ulife-portal-redesign.git](https://github.com/jefheee/ulife-portal-redesign.git)
