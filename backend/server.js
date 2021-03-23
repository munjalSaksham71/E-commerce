import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import  { errorHandler, notFound } from './middleWare/middleWare.js'

// Routes
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


const app = express();
app.use(express.json())

dotenv.config();

connectDB()

const PORT = process.env.PORT||5000;
app.get('/',(req,res) => {
    res.send("API is running...")
});

app.use('/api/products', productRoutes);    
app.use('/api/users', userRoutes);    
app.use('/api/orders', orderRoutes);
app.use('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))


app.use(notFound)
app.use(errorHandler)





app.listen(PORT, (req,res) => {
    console.log(`Your Port is started at localhost:${PORT}`)
})