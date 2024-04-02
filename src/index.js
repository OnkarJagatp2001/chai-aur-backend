import connectDB from "./db/index.js";
// dotenv.config({
//   path: "./env",
// });
connectDB();

/*

(async () => {
  try {
    console.log("in try");
    const result = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listning on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("in catch");
    console.log("ERROR: ", error);
  }
})();


*/
