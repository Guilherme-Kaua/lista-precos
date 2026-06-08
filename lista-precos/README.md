# 📋 Lista de Preços

Uma aplicação web moderna e responsiva construída com **React** e **Vite**, desenvolvida para facilitar a consulta rápida e organizada de preços de produtos de uma loja/conveniência (bebidas, destilados, petiscos, doces, cigarros, etc.).

A interface possui uma estética premium inspirada em tabernas/adegas clássicas, utilizando uma paleta de cores acolhedora e tons terrosos, com tipografia refinada e suporte a múltiplos modos de preços (unidade, caixa/dinheiro/Pix e cartão).

---

## ✨ Funcionalidades

- 🔍 **Busca em Tempo Real:** Filtragem instantânea de produtos por nome enquanto digita.
- 🏷️ **Filtro por Categorias:** Navegação rápida através de categorias (Cervejas em Lata, Cervejas Long Neck, Refrigerantes, Energéticos, Água, Cigarros, Salgadinhos, Doces, Vinhos, Cachaças e Destilados).
- 🔀 **Ordenação Inteligente:** Opções de ordenação de A a Z, menor preço ou maior preço.
- 💳 **Múltiplas Tabelas de Preços:** Visualização clara de valores unitários, caixa (à vista/Pix) e cartão de crédito.
- 📱 **Design Responsivo & Mobile First:** Layout otimizado para celulares e tablets para uso rápido no balcão ou pelos clientes.

---

## 🛠️ Tecnologias Utilizadas

- **React** (v18+)
- **Vite** (Ambiente de desenvolvimento rápido)
- **Vanilla CSS (inline-styles)** (Customização visual sob medida)
- **JavaScript (ES6+)**

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Guilherme-Kaua/lista-precos.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd lista-precos
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

---

## 📦 Estrutura de Pastas

```text
lista-precos/
├── public/          # Ícones e assets estáticos
├── src/
│   ├── assets/      # Imagens e vetores
│   ├── App.jsx      # Componente principal e banco de dados local
│   ├── index.css    # Estilos globais
│   └── main.jsx     # Ponto de entrada do React
├── eslint.config.js # Configurações do linter
├── index.html       # HTML principal
├── package.json     # Gerenciador de dependências e scripts
└── vite.config.js   # Configuração do Vite
```

---

## 🤝 Contribuição

1. Faça um Fork do projeto.
2. Crie uma nova branch com sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit de suas alterações seguindo o padrão Conventional Commits (`git commit -m 'feat: adiciona nova funcionalidade'`).
4. Envie a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.
