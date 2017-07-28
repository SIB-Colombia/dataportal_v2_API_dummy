import express from 'express';
import * as controller from './statitics.controller';

const router = express.Router();

router.get('/occurrence/search', controller.read)

export default router;