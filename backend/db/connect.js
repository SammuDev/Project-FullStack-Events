const mongoose = require('mongoose');

const main = async () => {
  try {
    await mongoose.connect(`mongodb+srv://admin:<password>@cluster0.me0xegf.mongodb.net/?retryWrites=true&w=majority`);
  } catch (error) {
    console.log(`ERRO: ${error}`);
  }
}

module.exports = main;
