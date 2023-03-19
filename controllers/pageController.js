const getIndexPage = (req, res) => {
    res.render("index", {
        link: "home"
    })
};
//
// const getAboutPage = (req, res) => {
//     res.render("about")
// };
//
// const getBlogPage = (req, res) => {
//     res.render("blog", {
//         link: "blog"
//     });
// }

// export { getIndexPage, getAboutPage };
export { getIndexPage};