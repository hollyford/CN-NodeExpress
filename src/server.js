require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(port, () => {
    console.log("listening on port 5000");
});
