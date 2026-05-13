import mongoose, { Document } from 'mongoose';
export interface UserType extends Document {
    username: string;
    password: string;
    comparePass(password: string, hashedPassword: string): Promise<boolean>;
}
export declare const User: mongoose.Model<UserType, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, UserType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<UserType & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<UserType, mongoose.Model<UserType, any, any, any, any, any, UserType>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UserType, mongoose.Document<unknown, {}, UserType, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<UserType & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, UserType, mongoose.Document<unknown, {}, UserType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<UserType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    username?: mongoose.SchemaDefinitionProperty<string, UserType, mongoose.Document<unknown, {}, UserType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<UserType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    password?: mongoose.SchemaDefinitionProperty<string, UserType, mongoose.Document<unknown, {}, UserType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<UserType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    comparePass?: mongoose.SchemaDefinitionProperty<(password: string, hashedPassword: string) => Promise<boolean>, UserType, mongoose.Document<unknown, {}, UserType, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<UserType & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, UserType>, UserType>;
//# sourceMappingURL=user-model.d.ts.map