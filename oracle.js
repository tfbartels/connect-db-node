const oracledb = require('oracledb');
const yargs = require('yargs');

// Configuração dos argumentos da linha de comando
const argv = yargs
  .option('host', {
    alias: 'h',
    description: 'Host do banco de dados',
    type: 'string',
    demandOption: true
  })
  .option('port', {
    alias: 'P',
    description: 'Porta do banco de dados',
    type: 'number',
    demandOption: true
  })
  .option('database', {
    alias: 'd',
    description: 'Nome do banco de dados',
    type: 'string',
    demandOption: true
  })
  .option('user', {
    alias: 'u',
    description: 'Usuário do banco de dados',
    type: 'string',
    demandOption: true
  })  
  .option('password', {
    alias: 'p',
    description: 'Senha do banco de dados',
    type: 'string',
    demandOption: true
  })
  .argv;

// Configuração da conexão Oracle
const connectionConfig = {
  user: argv.user,
  password: argv.password,
  connectString: `${argv.host}:${argv.port}/${argv.database}`
};

// Função para testar a conexão
const testConnection = async () => {
  let connection;

  try {
    connection = await oracledb.getConnection(connectionConfig);
    console.log('Conexão bem-sucedida!');
  } catch (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Erro ao fechar a conexão:', err);
      }
    }
  }
};

// Executa o teste de conexão
testConnection();
