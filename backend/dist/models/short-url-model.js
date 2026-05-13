import mongoose, { Document, Schema, model } from "mongoose";
const linkSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
export const Link = model("links", linkSchema);
//# sourceMappingURL=short-url-model.js.map