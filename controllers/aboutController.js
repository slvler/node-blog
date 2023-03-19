import About from "../models/aboutModel.js";

const createAbout = async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(req.body);
        res.status(201).json({
            succeded: true,
            about,
        });
    }catch (err) {
        req.status(500).json({
            succeded: false,
            error,
        });
    }
}

const getAbout = async (req, res) => {
    try {

        //req.status(200).render('about')
        // res.status(200).json({
        //    success: true,
        //    about
        // });
        const about = await About.find({});
        res.status(200).render("about", {
            about,
            link: "corporate"
        });

    }catch (error)
    {
        res.status(500).json({
           success: false,
           error
        });
    }
}

export { createAbout, getAbout };