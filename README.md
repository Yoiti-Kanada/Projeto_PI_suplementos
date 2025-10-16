Projeto Integrador: E-commerce de Suplementos Alimentares
Projeto desenvolvido para a disciplina de Projeto Integrador II do curso de Engenharia da Computação da Universidade Virtual do Estado de São Paulo (UNIVESP). 

📝 Sobre o Projeto
Este projeto consiste no desenvolvimento de uma plataforma de e-commerce própria e especializada para a venda de suplementos alimentares. O objetivo é centralizar as operações de marketing e vendas, que antes dependiam exclusivamente de mídias sociais, otimizando a experiência do usuário e garantindo a conformidade com as normativas da ANVISA. 


A solução proposta se baseia em uma arquitetura moderna com Frontend, Backend, API e Banco de Dados interconectados para criar um sistema de vendas escalável e seguro. 


✨ Funcionalidades Atuais
Visualização dinâmica do catálogo de produtos.

Os dados dos produtos são carregados a partir de uma API REST.

O backend se conecta a um banco de dados Supabase (PostgreSQL) para buscar os produtos em tempo real.

Interface para adicionar produtos a um pedido (carrinho).

Modal para visualização do resumo do pedido.

Funcionalidade para finalizar o pedido via WhatsApp.

💻 Tecnologias Utilizadas
Frontend
HTML5

CSS3 (com customizações de variáveis)

JavaScript (Vanilla JS)

Bootstrap 5

Backend
Node.js

Express.js

CORS

Dotenv

Banco de Dados
Supabase (PostgreSQL)

📂 Estrutura de Pastas
O projeto está organizado em duas pastas principais para desacoplar as responsabilidades:

/
├── backend/          # Contém todo o código do servidor Node.js
│   ├── images/       # Imagens servidas estaticamente pelo backend
│   ├── routes/       # Definição das rotas da API
│   ├── .env          # Arquivo para variáveis de ambiente (NÃO ENVIAR PARA O GIT)
│   ├── index.js      # Ponto de entrada do servidor
│   └── supabaseClient.js # Configuração da conexão com o Supabase
│
├── frontend/         # Contém a interface do usuário
│   └── index.html    # A página principal da aplicação
│
└── README.md         # Este arquivo
🚀 Como Executar o Projeto
Para executar este projeto localmente, siga os passos abaixo.

Pré-requisitos
É necessário ter o Node.js (que já inclui o npm) instalado em sua máquina.

Um projeto criado no Supabase com a tabela products devidamente populada.

1. Configuração do Backend
Bash

# 1. Navegue até a pasta do backend
cd backend

# 2. Instale as dependências do projeto
npm install

# 3. Crie um arquivo chamado .env na raiz da pasta 'backend'
#    Copie o conteúdo abaixo e substitua pelas suas credenciais do Supabase.
Arquivo .env:

Snippet de código

SUPABASE_URL=SUA_URL_DO_PROJETO_SUPABASE
SUPABASE_KEY=SUA_CHAVE_PUBLICA_ANON_DO_SUPABASE
Bash

# 4. Inicie o servidor em modo de desenvolvimento
npm run dev

# O servidor estará rodando em http://localhost:3001
2. Execução do Frontend
Com o servidor backend rodando, abra o arquivo frontend/index.html em seu navegador.

Recomendado: Utilize a extensão Live Server no Visual Studio Code. Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

Alternativa: Copie o caminho completo do arquivo index.html e cole no seu navegador.

👥 Autores
Este projeto foi desenvolvido pelo seguinte grupo:

JOSÉ ANTONIO MANZATO 

LEONARDO BASTOS DA SILVA 

LEONARDO YOITI OLIVEIRA KANADA 

RODRIGO AUGUSTO CAMPOS PEREIRA 

VALBER LUIS CUBA 

VICTORIA NEGRÃO CUBA 

