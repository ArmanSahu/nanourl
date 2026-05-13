import mongoose, { Document, Schema, model } from "mongoose";

interface LinkType extends Document{
    originalUrl: string;
    shortCode: string;
    userId: Schema.Types.ObjectId;
    clicks: number;
    createdAt: Date;
    updatedAt: Date;
}

const linkSchema = new Schema<LinkType>({
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
},{
    timestamps: true
});


linkSchema.index({
    userId: 1
});

export const Link = model("links",linkSchema);