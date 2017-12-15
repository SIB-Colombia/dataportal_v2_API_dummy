import express from 'express';
import * as controller from './dwc.controller';

const router = express.Router();

router.get('/data/:url', controller.data)

export default router;
