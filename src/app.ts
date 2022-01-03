import express from "express";
import studentRoute from "./routes/student";

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.listen(7000);
app.use(express.json());
app.use("/student", studentRoute);