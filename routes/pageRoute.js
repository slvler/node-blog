import express from "express";
import * as pageController from "../controllers/pageController.js";
import * as aboutController from "../controllers/aboutController.js";

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/corporate').get(aboutController.getAbout);

export default router;