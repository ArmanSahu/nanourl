import mongoose, { Document, Schema, model } from "mongoose";

interface LinkType extends Document{
    originalUrl: string;
    shortCode: string;
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
    clicks: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
});

export const Link = model("links",linkSchema);