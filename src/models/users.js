const { mongoose } = require("../config/db");

const userSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String},
    email: { type: String }
    //rol: { type: String , required: true},
    //provider: { type: String, required: true }
  },
    {
      timestamps: true,
    }
  );

  const UserModel = mongoose.model("users", userSchema);
  module.exports =  UserModel