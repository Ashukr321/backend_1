import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid Email Address']
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    maxlength: [100, 'Password must be less than 50 characters long']
  },
  photo: String,
  confirmPassword: {
    type: String,5
    required: [true, 'Confirm Password is Required'],
    validate: {
      validator: function(value) {
        return value === this.password;
      },
      message: "Passwords do not match"
    }
  }
});

const User = mongoose.model("User", userSchema);

export default User;
