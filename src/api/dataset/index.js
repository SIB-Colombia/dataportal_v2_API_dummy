import express from 'express';
import * as controller from './dataset.controller';

const router = express.Router();

router.get('/basic', controller.read)
router.get('/list', controller.list)

export default router;