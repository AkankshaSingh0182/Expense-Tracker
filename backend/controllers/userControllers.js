import userSchema from "../models/userModel.js";
export const Register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log("Kratika-->", req.body);
    try {
        const user = await userSchema.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await userSchema.create({
            userName: name,
            email,
            password
        })
        return res.status(201).json({
            message: "User created successfull", newUser
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userSchema.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: "User not found", success:false });
        }
        if(user.password != password){
            return res.status(400).json({ message: "Invalid Password", success: false });
        }
        return res.status(201).json({ message: "Login successful", success: true, user });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

