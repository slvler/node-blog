import express from "express";
import * as pageController from "../controllers/pageController.js";

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/corporate').get(pageController.getAboutPage);

export default router;