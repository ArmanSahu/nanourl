import mongoose, { Document, Types } from 'mongoose';
interface UserLinkType extends Document {
    userId: Types.ObjectId;
    linkId: Types.ObjectId;
}
export declare const UserLink: mongoose.Model<UserLinkType, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, UserLinkType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<UserLinkType & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<UserLinkType, mongoose.Model<UserLinkType, any, any, any, any, any, UserLinkType>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UserLinkType, mongoose.Document<unknown, {}, UserLinkType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<UserLinkType & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<Types.ObjectId, UserLinkType, mongoose.Document<unknown, {}, UserLinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<UserLinkType & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, UserLinkType, mongoose.Document<unknown, {}, UserLinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<UserLinkType & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    linkId?: mongoose.SchemaDefinitionProperty<Types.ObjectId, UserLinkType, mongoose.Document<unknown, {}, UserLinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<UserLinkType & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, UserLinkType>, UserLinkType>;
export {};
//# sourceMappingURL=user-Link-model.d.ts.map