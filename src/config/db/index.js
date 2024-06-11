const mongoose = require('mongoose');

async function connect() {
  const DB_URL = process.env.MONGODB_CONECT;
  try {
    await mongoose.connect(DB_URL);

    console.log('Connect successfully');
  } catch (error) {
    console.log('Connect failure');
  }
}
module.exports = { connect };
