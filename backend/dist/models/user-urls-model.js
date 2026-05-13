import mongoose, { Document, Schema, Types, model } from 'mongoose';
const userLinkSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: "users"
    },
    linkId: {
        type: Types.ObjectId,
        required: true,
        ref: "links"
    }
});
userLinkSchema.index({
    userId: 1,
    linkId: 1
}, {
    unique: true
});
export const UserLink = model("userlinks", userLinkSchema);
//# sourceMappingURL=user-urls-model.js.map