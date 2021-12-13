const express = require("express")

const app = express();

const port = 5000;

app.use("/home", express.static("public/index.html"));
app.use("/about", express.static("public/about.html"));
app.use("/login", express.static("public/login.html"));
app.use("/account", express.static("public/account.html"));
app.use("/checkout", express.static("public/checkout.html"));

app.listen(port, () => {
    console.log("listening on port 5000");
});