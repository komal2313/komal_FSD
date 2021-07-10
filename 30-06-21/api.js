const express = require("express");
const app = express();


const { response } = require("express");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Hello World!");
});

const PORT = 1111
app.listen(PORT, () => {
    console.log(`My server is running on port ${PORT}`);
});