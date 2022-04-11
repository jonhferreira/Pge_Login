# Banco de dados

O banco de dados da aplicação é em MySQL e está em um container docker, tal banco corresponde a todas as tabelas e registros necessários para o funcionamento do login e gerenciamento de níveis de acesso do usuário.

## Instruções para execução

Abra o terminal e execute o comado:

```
docker pull mysql

```

Isso baixara uma imagem do MySQL e permitira você executar um container do banco de dados, com o comando:

```
docker run -p 3306:3306 --name pge-user-login -e MYSQL_ROOT_PASSWORD=Pge_04_37_20 -d mysql
```
Com isso seu container vai estar executando, e você podera acessa seu banco de dados através do MySQL Workbench

## Importando as tabelas da aplicação

Abra o MySQL Workbench, clique no *+* para criar uma nova conexão.

<img src='/criar_conex.png'>

Abrirá um formulário, requisitando dados para iniciar a sua conexão com o banco de dados.

Preencha da seguinte forma


    HostName: localhost
    Port: 3306
    UserName: root
    Password : Pge_04_37_20

E inicie a conexão

Após a conexão [importe o banco do repositório](https://help.umbler.com/hc/pt-br/articles/202385865-MySQL-Importando-Exportando-um-banco-de-dados#:~:text=Para%20importar%20um%20arquivo%2C%20abra,e%20selecionar%20o%20arquivo%20desejado.)
        
Atente-se para o fato que o arquivo do banco a ser importado
é esse: [banco de dados](pge_user_login.sql)

Após essa etapas o banco de dados da aplicação já estará disponivel para conexão pela Api e com todas as tabelas e registros necessários.


