import express from 'express';
import * as controller from './static.controller';
import * as auth from '../../lib/auth/middleware';

const router = express.Router();

router.get('/:nombre', controller.read);

export default router;
