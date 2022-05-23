"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const express_session_1 = __importDefault(require("express-session"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, express_session_1.default)({ secret: process.env.SESSION_SECRET_KEY, cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));
app.use(express_1.default.json());
app.use(productRoutes_1.default);
app.use(cartRoutes_1.default);
server.listen(process.env.SERVER_PORT | 3000, () => {
    console.log(`Servidor Iniciado Porta: ${process.env.SERVER_PORT | 3000}`);
});
//# sourceMappingURL=server.js.map