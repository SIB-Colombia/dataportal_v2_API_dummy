import express from 'express';
import * as controller from './species.controller';

const router = express.Router();

router.get('/basic', controller.read);
router.get('/list/:offset', controller.list)

export default router;
