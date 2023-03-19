import express from "express";
import * as pageController from "../controllers/pageController.js";
import * as blogController from "../controllers/blogController.js";


const router = express.Router();

router.route('/').get(blogController.getBlogPage);
router.route('/create').post(blogController.createBlog);

router.route('/:id').get(blogController.getBlogDetail);


export default router;