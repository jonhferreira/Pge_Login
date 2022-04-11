# Pge-Login
Repositório correspondente ao desenvolvimento de sistema de login, como forma de avaliação para preenchimento de vaga de estágio na Procuradoria Geral do Estado de Sergipe

## Composição do projeto

O projeto é composto de maneira geral das seguintes pastas:
* [banco_de_dados](/banco_de_dados)
* [backend](/backend)
* [frontend](/frontend/login-pge)

## 💻 Pré-requisitos

### Instalando o Docker

Docker são ferramentas que permitem a virtualização de aplicações através de containers, desse modo nosso banco de dados MySQL é disponibilizado através de um container, sendo assim é necessário a instalação do Docker em sua máquina.

Você pode instalar o Docker, baseado no seu sistema operacional, através desse link: [instalar o docker](https://docs.docker.com/get-docker/)

Para o presente projeto foi utilizado o Docker versão 20.10.14

### Instalando o Node.js

Para a execução do backend será necessário a instalação do Node.js em sua máquina, para isso você poderá baixa-lo e instalá-lo através deste site: [instalar Node.js](https://nodejs.org/en/download/)

Para esse projeto foi utilizado o node versão 16.14.2

Se estiver usando alguma distribuição linux, tem-se também a opção de instalar um gerenciador de versão do node <NVM> e com ele instalar o node, seguindo as instruções desse [repositório](https://github.com/nvm-sh/nvm)

Você pode verificar se a instalação do Node.js ocorreu corretamente executando o comando 

```
node --version
```

Se aparecer algo como

```
# node --version
v16.14.2
```
Sua instalação foi bem sucedida

Junto a instalação do nodejs o gerenciador de pacote <npm> também é instalado, com ele é possível instalar bibliotecas/módulos no seu projeto desenvolvido em node, ele será muito útil para a instalação de dependências deste projeto.


## Instruções para execução

* Com executar [Banco de dados](/banco_de_dados/README.md)
* Como executar [Backend](/backend/README.md)
* Com executar [Frontend](/frontend/login-pge/README.md)

*Atenção*: para a execução correta da aplicação é importante seguir a ordem apresentada: Banco de dados, Backend e por fim Frontend.

## Instruções para o uso

Com a execução correta você podera acessar o [link](http://localhost:3000/) e utilizar alguns dos [usuários e senhas](usuarios.txt) para verificar a autentificação.
