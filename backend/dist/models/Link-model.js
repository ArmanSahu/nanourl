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
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
linkSchema.index({
    userId: 1
});
export const Link = model("links", linkSchema);
//# sourceMappingURL=Link-model.js.map