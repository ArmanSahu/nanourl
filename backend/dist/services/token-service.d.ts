import { type JwtPayload } from 'jsonwebtoken';
import type { Types } from 'mongoose';
export declare const generateToken: (userId: Types.ObjectId) => string;
export declare const verifyToken: (token: string) => JwtPayload;
//# sourceMappingURL=token-service.d.ts.map