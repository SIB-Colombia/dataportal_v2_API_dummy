import express from 'express';
import * as controller from './comment.controller';
import * as auth from '../../lib/auth/middleware';

const router = express.Router();

router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);

export default router;
