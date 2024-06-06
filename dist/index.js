"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
/*app.engine('.hbs',hbs.engine)
app.set('view engine','.hbs')
app.set("views", __dirname + "/views/")*/
app.use('/', routes_1.default);
const PORT = 8000;
//const HOSTNAME = env.HOSTNAME
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
