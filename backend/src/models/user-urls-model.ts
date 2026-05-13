import mongoose, {Document, Schema,Types,model} from 'mongoose'

interface UserLinkType extends Document{
    userId: Types.ObjectId
    linkId: Types.ObjectId
}

const userLinkSchema = new Schema<UserLinkType>({
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
},{
    unique: true
});

export const UserLink = model("userlinks",userLinkSchema);