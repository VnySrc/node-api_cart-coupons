import express from "express"
import http from "http"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes"
import cartRoutes from "./routes/cartRoutes"
import couponRoutes from "./routes/couponRoutes"
import session from "express-session"

dotenv.config()

const app = express()
const server = http.createServer(app)

app.use(session({ secret: process.env.SESSION_SECRET_KEY, cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))
app.use(express.json())
app.use(productRoutes)
app.use(cartRoutes)
app.use(couponRoutes)

server.listen(process.env.PORT, () => {
    console.log(`Servidor Iniciado Porta: ${process.env.PORT}`)
})
