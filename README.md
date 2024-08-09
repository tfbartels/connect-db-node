# Connect DB Node

Projeto em node para testar conexão em banco de dados

## Instalação

```
npm install
```

## Teste
Para testar, execute os comando abaixo conforme o banco de dados

### Testar conexão banco de dados postgres

```
node postgres.js -h <host> -P <port> -d <database> -u <user> -p <pass>
```

### Testar conexão banco de dados oracle

```
node oracle.js -h <host> -P <port> -d <database> -u <user> -p <pass>
```