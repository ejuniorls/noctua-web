# Noctua - Frontend

Noctua é um blog em desenvolvimento com foco em desempenho e experiência do usuário. Este repositório contém o frontend da aplicação, construído utilizando **React** e **Tailwind CSS 3**.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS 3** - Framework CSS utilitário para estilização rápida e responsiva.

## Requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

Clone o repositório e instale as dependências:

```sh
# Clonar o repositório
git clone https://github.com/ejuniorls/noctua-web.git
cd noctua-web

# Instalar dependências
npm install  # ou yarn install
```

## Execução

Para rodar o projeto em ambiente de desenvolvimento, utilize:

```sh
npm run dev  # ou yarn dev
```

O projeto estará disponível em `http://localhost:3000/` por padrão.

## Estrutura do Projeto

```
noctua-frontend/
│── src/
│   ├── components/    # Componentes reutilizáveis
│   ├── pages/         # Páginas do blog
│   ├── assets/        # Imagens, ícones e outros recursos
│   ├── styles/        # Arquivos de estilo
│   ├── utils/         # Funções auxiliares
│── public/            # Arquivos estáticos
│── package.json       # Dependências e scripts
│── tailwind.config.js # Configuração do Tailwind CSS
```

## Contribuição

1. Faça um fork do repositório
2. Crie uma branch com sua feature (`git checkout -b minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes
