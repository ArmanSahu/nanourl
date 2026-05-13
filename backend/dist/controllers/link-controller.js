import { generateShortCode } from "../services/short-code.js";
import { Link } from "../models/short-url-model.js";
import { UserLink } from "../models/user-urls-model.js";
import mongoose from "mongoose";
export const shortCode = async (req, res) => {
    const { url } = req.body;
    const userId = req.userId;
    if (!userId) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    try {
        const existingLink = await Link.findOne({
            originalUrl: url
        });
        if (existingLink) {
            const existingUserLink = await UserLink.findOne({
                userId,
                linkId: existingLink._id
            });
            if (!existingUserLink) {
                await UserLink.create({
                    userId,
                    linkId: existingLink._id
                });
                return res.status(201).json({
                    message: "created",
                    shortUrl: `${process.env.BASE_URL}/${existingLink.shortCode}`
                });
            }
            else {
                return res.status(200).json({
                    message: "Short URL already exists for this user",
                    shortUrl: `${process.env.BASE_URL}/${existingLink.shortCode}`
                });
            }
        }
        let shortCode = generateShortCode();
        while (await Link.findOne({
            shortCode
        })) {
            shortCode = generateShortCode();
        }
        const newLink = await Link.create({
            originalUrl: url,
            shortCode
        });
        await UserLink.create({
            userId,
            linkId: newLink._id
        });
        return res.status(201).json({
            message: "created",
            shortUrl: `${process.env.BASE_URL}/${newLink.shortCode}`
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
export const getUserShortCodes = async (req, res) => {
    const userId = req.userId;
    if (!userId) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    try {
        const shortCodes = await UserLink.find({
            userId
        }).populate("linkId", "originalUrl shortCode");
        return res.status(200).json({
            message: "user shortcodes",
            shortCodes
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
export const deleteUserShortCodes = async (req, res) => {
    const userLinkId = req.params.userLinkId;
    const userId = req.userId;
    if (!userId) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    if (!userLinkId) {
        return res.status(400).json({
            message: "Bad request"
        });
    }
    if (!mongoose.Types.ObjectId.isValid(userLinkId)) {
        return res.status(400).json({
            message: "Invalid Idt"
        });
    }
    try {
        const deletedContent = await UserLink.findOneAndDelete({
            _id: userLinkId,
            userId
        });
        if (!deletedContent) {
            return res.status(404).json({
                message: "could not find anything to delete"
            });
        }
        const existingReference = await UserLink.findOne({
            linkId: deletedContent.linkId
        });
        if (!existingReference) {
            await Link.findByIdAndDelete(deletedContent.linkId);
        }
        return res.status(200).json({
            message: "successfully deleted"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
//# sourceMappingURL=link-controller.js.map