import mongoose, { Document } from "mongoose";
interface LinkType extends Document {
    originalUrl: string;
    shortCode: string;
    clicks: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Link: mongoose.Model<LinkType, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, LinkType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<LinkType, mongoose.Model<LinkType, any, any, any, any, any, LinkType>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, LinkType, mongoose.Document<unknown, {}, LinkType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, LinkType, mongoose.Document<unknown, {}, LinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    shortCode?: mongoose.SchemaDefinitionProperty<string, LinkType, mongoose.Document<unknown, {}, LinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    originalUrl?: mongoose.SchemaDefinitionProperty<string, LinkType, mongoose.Document<unknown, {}, LinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    clicks?: mongoose.SchemaDefinitionProperty<number, LinkType, mongoose.Document<unknown, {}, LinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<Date, LinkType, mongoose.Document<unknown, {}, LinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<Date, LinkType, mongoose.Document<unknown, {}, LinkType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<LinkType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, LinkType>, LinkType>;
export {};
//# sourceMappingURL=short-url-model.d.ts.map