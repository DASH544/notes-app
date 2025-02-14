import { z } from "zod";
import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/generateToken.js";
const requiredBody = z.object({
  name: z.string().min(3, "Too short").max(32, "Too big"),
  email: z.string().email(),
  password: z.string().min(8).max(64),
});
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const parsedBody = requiredBody.safeParse(req.body);
    if (!parsedBody.success) return res.status(400).json(parsedBody.error);
    const user = await userModel.findOne({ email });
    if (user) return res.status(400).json({ message: "User Already Exists" });
    const hashPassword = await bcrypt.hash(password, 10);
    const userDetail = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    console.log("hello:", userDetail._id);
    genToken(userDetail._id, res);
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const loginBody = requiredBody.pick({ email: true, password: true });
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const parsedBody = loginBody.safeParse(req.body);
    if (!parsedBody.success) return res.status(400).json(parsedBody.error);
    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Incorrect Credentails" });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck)
      return res.status(403).json({ message: "Incorrect Credentails" });

    genToken(user._id, res);
    res.status(201).json({ message: "User Signed In Succesfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const logoutUser=()=>
{
    try {
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}