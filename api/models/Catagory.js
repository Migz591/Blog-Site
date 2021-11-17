const mongoose = require("mongoose");

const CatagorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    }},
  { timestamps: true }
);

module.export = mongoose.model("Catagory", UserSchema);
