import { z } from 'zod';
const urlSchema = z.object({
    url: z.url()
});
export const validateUrl = async (req, res, next) => {
    const result = urlSchema.safeParse(req.body);
    if (!result.success) {
        console.log(result.error.flatten());
        return res.status(400).json({
            message: "Invalid url"
        });
    }
    req.body = result.data;
    next();
};
//# sourceMappingURL=url-validation.js.map