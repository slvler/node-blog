import Blog from "../models/blogModel.js";

const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            succeded: true,
            blog,
        });
    }catch (err) {
        req.status(500).json({
            succeded: false,
            error,
        });
    }
}

const getBlogPage =  async (req, res) => {
    const blogs = await Blog.find({});
    res.render("blog", {
        blogs,
        link: "blog"
    });
}


const getBlogDetail = async (req, res) => {

    try {
        const blog = await Blog.findById({_id: req.params.id});
        res.render('blog-detail', {
            blog,
            link: "blog"

        });
    }catch (error) {
        res.status(500).json({
            success: false,
            error
        });
    }
}



export { createBlog, getBlogPage, getBlogDetail };