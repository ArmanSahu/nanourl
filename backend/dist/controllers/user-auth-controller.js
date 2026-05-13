import { User } from "../models/user-model.js";
import { generateToken } from "../services/token-service.js";
export const signup = async (req, res) => {
    let { username, password } = req.body;
    username = username.trim();
    try {
        const user = await User.findOne({
            username
        });
        if (user) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        await User.create({
            username,
            password
        });
        return res.status(201).json({
            message: "user signup successful"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
export const signin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }
    try {
        const existingUser = await User.findOne({
            username
        }).select("+password");
        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const isValid = await existingUser.comparePass(password, existingUser.password);
        if (!isValid) {
            return res.status(401).json({
                message: "Incorrect Password"
            });
        }
        const token = generateToken(existingUser._id);
        return res.status(200).json({
            message: "user created",
            token,
            username: existingUser.username
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server Error"
        });
    }
};
//# sourceMappingURL=user-auth-controller.js.map