"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/id/:id/name/:name", (req, res) => {
    res.send({
        id: req.params.id,
        name: req.params.name,
    });
});
app.post("/", (req, res) => {
    res.send({ data: req.body });
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
