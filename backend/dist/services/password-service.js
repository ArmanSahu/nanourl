import bcrypt from 'bcrypt';
export const hashPassword = async (password) => {
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound);
};
export const comparePassword = async (currentPassword, hashedPassword) => {
    return await bcrypt.compare(currentPassword, hashedPassword);
};
//# sourceMappingURL=password-service.js.map