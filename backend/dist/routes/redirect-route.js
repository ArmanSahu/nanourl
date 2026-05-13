import express, { Router } from 'express';
import { redirectUrl } from '../controllers/shortCode-controller.js';
const router = Router();
router.get('/:shortCode', redirectUrl);
export default router;
//# sourceMappingURL=redirect-route.js.map