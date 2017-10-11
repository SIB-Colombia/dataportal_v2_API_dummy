import express from 'express';
import * as controller from './species.controller';

const router = express.Router();

router.get('/basic', controller.read);

export default router;