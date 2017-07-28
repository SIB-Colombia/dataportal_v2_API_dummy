import express from 'express';
import * as controller from './publisher.controller';

const router = express.Router();

router.get('/basic', controller.read)

export default router;