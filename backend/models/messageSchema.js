import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!"],
    minLength: [3, "Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  contact: {
    type: String,
    required: [true, "Contact is required!"],
    validate: {
      validator: function (value) {
        return validator.isMobilePhone(value, "any", { strictMode: false });
      },
      message: "Please provide a valid contact number!",
    },
  },
   
  message: {
    type: String,
    required: [true, "Message Required!"],
    minLength: [10, "Message must contain at least 10 characters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
