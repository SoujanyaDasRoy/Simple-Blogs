import 'colors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes.js';
import MongoConnect from './db/mongoDB.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

//MongoDB Connection

MongoConnect();

//Routes
app.use('/api/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));