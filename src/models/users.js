const { mongoose } = require("../config/db");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
    //rol: { type: String , required: true},
    //provider: { type: String, required: true }
  },
    {
      timestamps: true,
    }
  );

  const UserModel = mongoose.model("users", userSchema);
  module.exports =  UserModel