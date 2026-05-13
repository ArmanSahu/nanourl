import { verifyToken } from "../services/token-service.js";
export const tokenVerification = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(400).json({
            message: "Unauthorized access"
        });
    }
    try {
        const decode = verifyToken(token);
        const userId = decode.userId;
        req.userId = userId;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token found"
        });
    }
};
//# sourceMappingURL=verify-token.js.map