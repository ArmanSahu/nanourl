import express, { Router } from 'express';
import { tokenVerification } from '../middlewares/verify-token.js';
import { validateUrl } from '../middlewares/url-validation.js';
import { deleteUserShortCodes, getUserShortCodes, shortCode } from '../controllers/link-controller.js';
const router = Router();
router.post('/', tokenVerification, validateUrl, shortCode);
router.get('/', tokenVerification, getUserShortCodes);
router.delete('/:userLinkId', tokenVerification, deleteUserShortCodes);
export default router;
//# sourceMappingURL=link-routes.js.map