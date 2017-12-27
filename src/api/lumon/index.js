import express from 'express';
import * as controller from './lumon.controller';

const router = express.Router();

router.get("/resource/facets", controller.facets)

export default router;
