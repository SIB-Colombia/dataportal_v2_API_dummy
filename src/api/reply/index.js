import express from 'express';
import * as controller from './reply.controller';
import * as auth from '../../lib/auth/middleware';

const router = express.Router();

router.post('/create', auth.isAuthenticated(), controller.create);

export default router;
