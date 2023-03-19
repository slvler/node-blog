import About from "../models/aboutModel.js";

const createAbout = async (req, res) => {
    try {
        const about = await About.create(req.body);
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
        const about = await About.find();
        res.status(200).json({
           success: true,
           about
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