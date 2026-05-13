import mongoose, { Document, Schema, model } from 'mongoose';
import { comparePassword, hashPassword } from '../service/pssword-service.js';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, {
    timestamps: true
});
userSchema.pre('save', async function () {
    if (!this.isModified("password")) {
        return;
    }
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
});
userSchema.methods.comparePass = async function (password) {
    return comparePassword(password, this.password);
};
export const User = model("users", userSchema);
//# sourceMappingURL=user-model.js.map