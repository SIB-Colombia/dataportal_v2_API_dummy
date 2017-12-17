import express from 'express';
import * as controller from './statitics.controller';

const router = express.Router();

router.get('/general/:id/:param', controller.general)

export default router;
