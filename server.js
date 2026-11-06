console.log("I AM RUNNING THE CORRECT SERVER.JS");const express = require("express");
const path = require("path");
const app = require("./src/app");

const PORT = 3000;

// Serve the homepage and other static files
app.use(express.static(__dirname));

// Homepage route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/test", (req, res) => {
    res.send("SERVER.JS ROUTE IS WORKING!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});