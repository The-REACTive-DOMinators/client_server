"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const PORT = 3000;
const server = http_1.default.createServer((req, res) => {
    var _a;
    const fileName = (_a = req.url) === null || _a === void 0 ? void 0 : _a.slice(1);
    fs_1.default.readFile(`./public/${fileName}`, (error, data) => {
        if (!error) {
            res.end(data);
        }
        res.statusCode = 404;
        res.end('404 Not Found');
    });
});
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
