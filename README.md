# Temperature Converter

Um conversor de temperatura moderno, interativo e bidirecional construído com **HTML5**, **CSS3** (Glassmorphism & Neon Aurora Boreal) e **JavaScript puro (Vanilla)**.

---

## Funcionalidades

- **Conversão em Tempo Real (Bidirecional):** Digite em qualquer uma das três escalas (Celsius, Fahrenheit ou Kelvin) e os outros dois campos são calculados e formatados automaticamente com 2 casas decimais.

- **Botão de Reset:** Um clique limpa todos os campos instantaneamente e devolve o foco para o primeiro campo.

- **Design Aurora Boreal:**
  - Borda giratória com gradiente cônico em 360° com as cores da aurora boreal (`#3ADCA8`, `#5E83F4`, `#DB8BFF`, `#DB64B3`).
  - Efeito glassmorphism escuro com profundidade e iluminação neon.
  - Destaque e glow customizado para cada escala ao focar.

- **Totalmente Responsivo:** Tipografia fluida com `clamp()` e regras de media query garantem visual perfeito de celulares pequenos a monitores ultrawide.

- **Acessibilidade:** Uso de tags semânticas (`<header>`, `<main>`, `<footer>`), labels associados aos inputs via `for`/`id` e suporte a leitores de tela.

---

## Fórmulas de Conversão

| De | Para Celsius | Para Fahrenheit | Para Kelvin |
|---|---|---|---|
| **Celsius ($C$)** | — | $(C \times \frac{9}{5}) + 32$ | $C + 273.15$ |
| **Fahrenheit ($F$)** | $(F - 32) \times \frac{5}{9}$ | — | $(F - 32) \times \frac{5}{9} + 273.15$ |
| **Kelvin ($K$)** | $K - 273.15$ | $(K - 273.15) \times \frac{9}{5} + 32$ | — |

---

## Estrutura de Arquivos

```
conversor-de-temperatura/
│
├── index.html              # Estrutura semântica da aplicação
├── script.js               # Lógica de conversão bidirecional e eventos
├── README.md               # Documentação do projeto
├── Assets/
│   ├── style.css           # Estilos, glassmorphism e animação da aurora
│   ├── icons/              # Ícones das escalas, cabeçalho e utilitários
│   └── imgs/               # Camadas de efeito e texturas de aurora
└── Design/
    └── Temperature Converter.svg  # Design original de referência
```

---

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Flexbox, `@property`, `conic-gradient`, `@keyframes`, `clamp()` e glassmorphism.
- **JavaScript (ES6+):** Manipulação de DOM, `addEventListener('input')` e funções matemáticas nativas.

---

## Deploy

Você pode testar a aplicação funcionando ao vivo no link abaixo:

🔗 **[Acessar o Projeto Online](https://conversor-de-temperatura-sand.vercel.app)**

---

## Autor

Desenvolvido por **Nilson Limas Junior**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nilsonlimasjunior/)

