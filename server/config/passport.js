import mongoose from 'mongoose';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import User from '../models/User.js';

export default function () {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          userName: profile.displayName,
          image: profile.photos[0].value,
        };

        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
}
