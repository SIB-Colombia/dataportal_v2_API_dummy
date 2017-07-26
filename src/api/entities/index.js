import express from 'express';
import * as controller from './entities.controller';

const router = express.Router();

router.get('/basic', controller.read);
router.get('/list', controller.list);

export default router;
