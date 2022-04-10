# Banco de dados

O banco de dados da aplicação é em MySQL e está em um container docker, tal banco corresponde a todas as tabelas e registros necessários para o funcionamento do login e gerenciamento de níveis de acesso do usuário.

## Instruções para execução

Instalado o docker, acesse a pasta banco_de_dados pelo terminal e execute o comando

```
# zcat db.gz | docker import - db
```

Em seguida para a execução da imagem execute

```
docker run -it db bash
```
