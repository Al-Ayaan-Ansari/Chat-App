import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { genereateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudnary.js";

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        if (password.length < 6) {
            return res.status(400).json({message : "password must be 6 charactor long"})
        };

        const user = await User.findOne({email});

        if(user) {
            return res.status(400).json({message: "email already exits"});
        }

        //hasing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //creating new user        
        const newUser = new User({
            fullName:fullName,
            email:email,
            password:hashedPassword,
        })

        if(newUser){
            //creating JWT
            genereateToken(newUser._id,res)
            await newUser.save();


            return res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic,
            });
        }else{
            return res.sendStatus(400).json({message:"invalid user data"});
        }

        
    } catch (error) {
        console.error("error while signup error: ",error);
    }
}


export const login = async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message : "Invalid email"});

        const isPasswordCorrect = await bcrypt.compare(password,user.password);

        if(!isPasswordCorrect) return res.status(400).json({message : "Invalid password"});

        genereateToken(user._id,res);

        return res.status(201).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
        });

    } catch (error) {
        console.log("error with error code",error.message);
        return res.sendStatus(500).json({message:"Internal server error"});        
    }
}


export const logout = (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        return res.status(201).json({message:"logged out successfully"});

    } catch (error) {
        return res.sendStatus(500).json({message:"Internal server error"});
    }
}


export const updateProfile = async (req,res)=>{
    try {
    const {profilePic} = req.body;
    const userId = req.user._id;

    if(!profilePic) return res.status(400).json({message:"Profile pic is required"});

    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updateUser = await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true});

    res.status(200).json(updateUser);
    }
    catch(error){
        console.log("error while uploading pic",error);
        res.status(500).json({ message: error.message || "Internal server error" });
    }
}

export const checkAuth = (req,res)=>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("error while checking :",error.message);
        res.status(500).json({message:"Interval server error"});
    }
}