import mongoose from "mongoose";
const conn = () => {
    mongoose.connect( process.env.DB_CONNETCT, {
        dbName: "node_blog",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
       console.log("Success");
    }).catch((err) => {
        console.log(`Error ${err}`);
    })
};
export default conn;