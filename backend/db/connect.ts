const mongooseConnect = require('mongoose');

require('dotenv').config();

const main = async () => {
  try {
    mongooseConnect.set('strictQuery', true);
    await mongooseConnect.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.me0xegf.mongodb.net/?retryWrites=true&w=majority`);
    console.log('❦ CONNECT: Conexão ao banco de dados bem sucedida Samu! ❦');
  }
  catch (error) {
    console.log(`ERROR: ${error}`);
    console.log('FAIL: Falha ao tentar se conectar com o banco de dados!');
  }
}

module.exports = main;
