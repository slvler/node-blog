import express from "express";
import * as aboutController from "../controllers/aboutController.js";

const router = express.Router();

router.route('/').post(aboutController.createAbout);
router.route('/').get(aboutController.getAbout);

export default router;