const mongoose = require("mongoose");
//const config = require("./index");

const MONGODB_URI= "mongodb://mongo/graphql";

const connection = async () => {
  const conn = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB is connected", conn.connection.host);
};

module.exports = { connection, mongoose };