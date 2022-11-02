import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';

import connectDB from './config/db.js';
import auth from './routes/auth.js';

//  Load config

dotenv.config({ path: './config/.env' });

const app = express();

connectDB();

app.use(cors());

// Sessions

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('App is running!');
});

app.use(auth);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
