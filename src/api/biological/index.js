import express from 'express';
import * as controller from './biological.controller';

const router = express.Router();

router.get('/basic', controller.read);
router.get('/basic/:id', controller.read);
router.get('/list', controller.list);

export default router;
