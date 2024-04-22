import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

// signup 
const signup = async (req, res) => {
  try {
    const {name,email,password,confirmPassword} = req.body;
    if(!name || !email || !password || !confirmPassword){
      return res.status(400).send({msg:"Please fill all fields"})
    }
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    // get user from email 
    const user =await User.findOne({email:email});
    if(user){
      return res.status(404).json({message:"User already exists"});
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await  bcryptjs.hash(password,salt);
    // Create new user
    const newUser = await User.create({
      name,
      email,
      password:hashedPassword,
      confirmPassword:hashedPassword
    })

    return res.status(201).json({message:"signup Successfully",user:newUser});
    
  } catch (error) {
    return res.status(505).json({message: error.message});
  }
}

export { signup };