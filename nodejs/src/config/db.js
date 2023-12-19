const mongoose = require("mongoose");

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected MongoDB");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
