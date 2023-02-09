
  import passport from "passport";
  import { ExtractJwt, Strategy } from "passport-jwt"
  import { signupSchema } from "./models/signup.js";

 

  const secretKey = 'secretKey'
  const jwtOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: process.env.JWT_SECRET
      secretOrKey: secretKey
    };
    passport.use(new Strategy(jwtOptions, function(jwt_payload, done) {
      // Check if the user exists in the database
      signupSchema.findOne({id: jwt_payload.id}, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }));

