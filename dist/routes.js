"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/*
router.post('/request', async (req, res, next) => {
    const body = req.body
    const result = await new RequestWebhookController().create(JSON.stringify(body))

    res.send(result)

    next()
}) */
router.get('/', async (req, res, next) => {
    res.send('hello world2');
});
exports.default = router;
